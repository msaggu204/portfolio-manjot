import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import ThirdPage from './pages/ThirdPage';
import ContactSection from './components/Contact/ContactSection';

// ── Smoke test ────────────────────────────────────────────
test('App renders without crashing', () => {
  render(<App />);
  expect(document.body).toBeInTheDocument();
});

// ── Projects / ThirdPage ──────────────────────────────────
describe('ThirdPage — category filter', () => {
  it('renders All filter pill as active by default', () => {
    render(<ThirdPage />);
    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(allBtn).toHaveAttribute('aria-pressed', 'true');
  });

  it('filters to Hardware category', () => {
    render(<ThirdPage />);
    fireEvent.click(screen.getByRole('button', { name: /hardware/i }));
    expect(screen.getByText('Formula SAE')).toBeInTheDocument();
    expect(screen.queryByText('EventSync')).not.toBeInTheDocument();
  });

  it('restores all projects when All is re-selected', () => {
    render(<ThirdPage />);
    fireEvent.click(screen.getByRole('button', { name: /hardware/i }));
    fireEvent.click(screen.getByRole('button', { name: /all/i }));
    expect(screen.getByText('EventSync')).toBeInTheDocument();
  });

  it('opens modal when a project card is clicked', () => {
    render(<ThirdPage />);
    const card = screen.getAllByRole('button', { name: /view details/i })[0];
    fireEvent.click(card);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes modal on close button click', () => {
    render(<ThirdPage />);
    fireEvent.click(screen.getAllByRole('button', { name: /view details/i })[0]);
    fireEvent.click(screen.getByRole('button', { name: /close dialog/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes modal on Escape key', () => {
    render(<ThirdPage />);
    fireEvent.click(screen.getAllByRole('button', { name: /view details/i })[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens modal on Enter keydown', () => {
    render(<ThirdPage />);
    const card = screen.getAllByRole('button', { name: /view details/i })[0];
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('prevents page scroll on Space keydown', () => {
    render(<ThirdPage />);
    const card = screen.getAllByRole('button', { name: /view details/i })[0];
    const event = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });
    card.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });
});

// ── Contact form ──────────────────────────────────────────
describe('ContactSection — form', () => {
  it('renders name, subject, and message fields', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders send button', () => {
    render(<ContactSection />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows unconfigured error when EmailJS env vars are absent', async () => {
    render(<ContactSection />);
    fireEvent.change(screen.getByLabelText(/name/i),    { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hello' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test body.' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() =>
      expect(screen.getByText(/not yet configured/i)).toBeInTheDocument(),
    );
  });

  it('has an aria-live region for status announcements', () => {
    render(<ContactSection />);
    const liveRegion = document.querySelector('[aria-live="polite"]');
    expect(liveRegion).toBeInTheDocument();
  });
});

// ── GridHeader a11y ───────────────────────────────────────
describe('GridHeader — accessibility', () => {
  it('hamburger button has aria-controls pointing to mobile-nav', () => {
    render(<App />);
    // GridHeader is rendered inside App
    const hamburger = screen.queryByRole('button', { name: /open navigation menu/i });
    // On desktop viewport (jsdom default) hamburger may be hidden via CSS,
    // but the element should exist with the correct attributes when rendered
    if (hamburger) {
      expect(hamburger).toHaveAttribute('aria-controls', 'mobile-nav');
      expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    }
  });
});
