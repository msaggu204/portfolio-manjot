import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactSection.module.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import { sectionIndex } from '../../data/sections';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? '';

const ContactSection: React.FC = () => {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [hp, setHp]           = useState('');        // honeypot — bots fill this
  const [status, setStatus]   = useState<FormState>('idle');
  const formRef               = useRef<HTMLFormElement>(null);

  const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check — silent drop if filled
    if (hp) return;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return;
    if (!configured) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name.trim(), from_email: email.trim(), subject: subject.trim(), message: message.trim() },
        { publicKey: PUBLIC_KEY },
      );
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => setStatus('idle');

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading index={sectionIndex('contact')} title="Get In Touch" />
        <p className={styles.subtext}>
          Have a question, want to collaborate, or just want to say hi? Drop me a message
          and I&apos;ll get back to you as soon as I can.
        </p>

        {/* aria-live region so screen readers announce status changes */}
        <div aria-live="polite" aria-atomic="true">
          {status === 'success' && (
            <div className={styles.successCard}>
              <div className={styles.successIcon} aria-hidden="true">✓</div>
              <p className={styles.successText}>Message sent! I&apos;ll be in touch soon.</p>
              <button className={styles.resetBtn} onClick={reset}>Send another</button>
            </div>
          )}
          {status === 'error' && (
            <p className={styles.errorText}>
              {configured
                ? 'Something went wrong. Please try again or email me directly.'
                : 'Contact form is not yet configured. Please email me directly.'}
            </p>
          )}
        </div>

        {status !== 'success' && (
          <form
            ref={formRef}
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Honeypot — visually hidden, bots fill it, humans never see it */}
            <input
              type="text"
              name="website"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
              className={styles.honeypot}
              autoComplete="off"
            />

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  disabled={status === 'sending'}
                  maxLength={80}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === 'sending'}
                  maxLength={120}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                className={styles.input}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's this about?"
                required
                disabled={status === 'sending'}
                maxLength={120}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                required
                disabled={status === 'sending'}
                rows={6}
                maxLength={2000}
              />
            </div>

            <div className={styles.formFooter}>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className={styles.spinner} aria-label="Sending…" role="status" />
                ) : (
                  'Send Message →'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
