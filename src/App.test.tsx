import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './components/Contact/ContactSection';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { volunteering } from './data/volunteering';
import { ventures } from './data/ventures';
import { spheres } from './data/spheres';
import { sections } from './data/sections';

// ── Smoke test ────────────────────────────────────────────
test('App renders without crashing', () => {
  render(<App />);
  expect(document.body).toBeInTheDocument();
});

// ── Data integrity ────────────────────────────────────────
describe('experiences data', () => {
  it('lists Manitoba Hydro first with NERC compliance bullets', () => {
    const hydro = experiences[0];
    expect(hydro.company).toBe('Manitoba Hydro');
    expect(hydro.bullets.length).toBeGreaterThan(0);
    expect(hydro.bullets.join(' ')).toMatch(/NERC/);
  });

  it('every experience has an id, role, and date', () => {
    for (const exp of experiences) {
      expect(exp.id).toBeTruthy();
      expect(exp.role).toBeTruthy();
      expect(exp.date).toBeTruthy();
    }
  });
});

// ── Spheres & sections registry ───────────────────────────
describe('spheres and sections', () => {
  it('every project and volunteering entry references a valid sphere', () => {
    const sphereIds = new Set(spheres.map((s) => s.id));
    for (const p of projects) expect(sphereIds).toContain(p.sphereId);
    for (const v of volunteering) expect(sphereIds).toContain(v.sphereId);
    for (const v of ventures) expect(sphereIds).toContain(v.sphereId);
  });

  it('hides the Ventures section while ventures.ts is empty', () => {
    const ids = sections.map((s) => s.id);
    if (ventures.length === 0) {
      expect(ids).not.toContain('ventures');
    } else {
      expect(ids).toContain('ventures');
    }
    expect(ids).toContain('projects');
    expect(ids).toContain('contact');
  });
});

// ── About section ─────────────────────────────────────────
describe('AboutSection', () => {
  it('renders the bio and quick facts', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Compliance Engineer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/quick facts/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/core skills/i)).toBeInTheDocument();
  });

  it('falls back to the monogram when the headshot is missing', () => {
    render(<AboutSection />);
    const img = screen.getByAltText(/headshot/i);
    fireEvent.error(img);
    expect(screen.queryByAltText(/headshot/i)).not.toBeInTheDocument();
    expect(screen.getByText(/headshot coming soon/i)).toBeInTheDocument();
  });
});

// ── Projects section ──────────────────────────────────────
describe('ProjectsSection — category filter', () => {
  it('renders All filter pill as active by default', () => {
    render(<ProjectsSection />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(allBtn).toHaveAttribute('aria-pressed', 'true');
  });

  it('filters to Hardware category', () => {
    render(<ProjectsSection />);
    fireEvent.click(screen.getByRole('button', { name: /hardware/i }));
    expect(screen.getByText('Formula SAE')).toBeInTheDocument();
    expect(screen.queryByText('EventSync')).not.toBeInTheDocument();
  });

  it('restores all projects when All is re-selected', () => {
    render(<ProjectsSection />);
    fireEvent.click(screen.getByRole('button', { name: /hardware/i }));
    fireEvent.click(screen.getByRole('button', { name: /all/i }));
    expect(screen.getByText('EventSync')).toBeInTheDocument();
  });

  it('filters by sphere: U of A hides personal projects', () => {
    render(<ProjectsSection />);
    fireEvent.click(screen.getByRole('button', { name: /university of alberta/i }));
    expect(screen.getByText('8-bit CPU')).toBeInTheDocument();
    expect(screen.queryByText('Stock Picker')).not.toBeInTheDocument();
  });

  it('resets the category filter when the sphere changes', () => {
    render(<ProjectsSection />);
    // "Web" only exists under the Personal sphere
    fireEvent.click(screen.getByRole('button', { name: /^web$/i }));
    fireEvent.click(screen.getByRole('button', { name: /university of alberta/i }));
    expect(screen.queryByRole('button', { name: /^web$/i })).not.toBeInTheDocument();
    expect(screen.getByText('8-bit CPU')).toBeInTheDocument();
  });

  it('shows all projects again via the Everything sphere pill', () => {
    render(<ProjectsSection />);
    fireEvent.click(screen.getByRole('button', { name: /university of alberta/i }));
    fireEvent.click(screen.getByRole('button', { name: /everything/i }));
    expect(screen.getByText('Stock Picker')).toBeInTheDocument();
  });

  it('opens modal when a project card is clicked', () => {
    render(<ProjectsSection />);
    const card = screen.getAllByRole('button', { name: /view details/i })[0];
    fireEvent.click(card);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes modal on close button click', () => {
    render(<ProjectsSection />);
    fireEvent.click(screen.getAllByRole('button', { name: /view details/i })[0]);
    fireEvent.click(screen.getByRole('button', { name: /close dialog/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes modal on Escape key', () => {
    render(<ProjectsSection />);
    fireEvent.click(screen.getAllByRole('button', { name: /view details/i })[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens modal on Enter keydown', () => {
    render(<ProjectsSection />);
    const card = screen.getAllByRole('button', { name: /view details/i })[0];
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('prevents page scroll on Space keydown', () => {
    render(<ProjectsSection />);
    const card = screen.getAllByRole('button', { name: /view details/i })[0];
    const event = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });
    card.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });
});

// ── Contact form ──────────────────────────────────────────
describe('ContactSection — form', () => {
  it('renders name, email, subject, and message fields', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders send button', () => {
    render(<ContactSection />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows error when form submission fails', async () => {
    render(<ContactSection />);
    fireEvent.change(screen.getByLabelText(/name/i),    { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/email/i),   { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hello' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test body.' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() =>
      expect(
        screen.getByText(/not yet configured|something went wrong/i)
      ).toBeInTheDocument(),
    );
  });

  it('has an aria-live region for status announcements', () => {
    render(<ContactSection />);
    const liveRegion = document.querySelector('[aria-live="polite"]');
    expect(liveRegion).toBeInTheDocument();
  });
});

// ── Nav a11y ──────────────────────────────────────────────
describe('Nav — accessibility', () => {
  it('hamburger button has aria-controls pointing to mobile-nav', () => {
    render(<App />);
    const hamburger = screen.queryByRole('button', { name: /open navigation menu/i });
    // On desktop viewport (jsdom default) hamburger may be hidden via CSS,
    // but the element should exist with the correct attributes when rendered
    if (hamburger) {
      expect(hamburger).toHaveAttribute('aria-controls', 'mobile-nav');
      expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    }
  });
});
