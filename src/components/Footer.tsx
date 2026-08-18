'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { subscribeToNewsletter } from '@/services/subscribe.service';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address.' });
      return;
    }

    setLoading(true);

    try {
      const response = await subscribeToNewsletter(email);

      if (response.success) {
        setMessage({ type: 'success', text: 'Successfully subscribed to newsletter!' });
        setEmail('');
      } else {
        setMessage({
          type: 'error',
          text: response.message || 'Failed to subscribe. Please try again.',
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred. Please try again.';
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer-section">
      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* COLUMN 1 */}
            <div className="footer-widget footer-brand">
              <Link href="/" className="footer-logo">
                <Image
                  src="/assets/logo/DCCAI-Logo-Black.webp"
                  alt="Core Media"
                  width={180}
                  height={70}
                  priority
                  style={{ width: 'auto', height: 'auto' }}
                />
              </Link>

              {/* <p className="footer-description">
                Developing personalized customer journeys to increase customer satisfaction,
                engagement, and long-term loyalty for business growth.
              </p> */}
            </div>

            {/* COLUMN 2 */}
            <div className="footer-widget">
              <h4 className="footer-title">Services</h4>

              <ul className="footer-links">
                <li>
                  <Link href="/blog">Blogs</Link>
                </li>

                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/#contact-section">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="footer-widget">
              <h4 className="footer-title">Resources</h4>

              <ul className="footer-links">
                <li>
                  <Link href="/register">Registration</Link>
                </li>

                <li>
                  <Link href="/nominate">Nomination</Link>
                </li>

                <li>
                  <Link href="/speaker">Speaker</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="footer-widget">
              <h4 className="footer-title">Subscribe</h4>

              <form className="footer-subscribe" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />

                <button
                  type="submit"
                  className="footer-submit"
                  aria-label="Subscribe"
                  disabled={loading}
                >
                  <Send size={18} />
                </button>
              </form>

              {message && (
                <div
                  className={`footer-message ${message.type}`}
                  style={{
                    marginTop: '0.75rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    color: message.type === 'success' ? '#10b981' : '#ef4444',
                    backgroundColor: message.type === 'success' ? '#ecfdf5' : '#fef2f2',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    position: 'relative',
                    paddingTop: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '-0.5rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '0.5rem solid transparent',
                      borderRight: '0.5rem solid transparent',
                      borderBottom: `0.5rem solid ${message.type === 'success' ? '#ecfdf5' : '#fef2f2'}`,
                    }}
                  />
                  {message.text}
                </div>
              )}

              <br />
              <h2 className="footer-description1">Office Address</h2>
              <p className="footer-description">
                Units Nos. 3037 – A1 Wing, 3rd Floor, Oberoi Garden Estate, Near Chandivali Studio,
                Andheri (East), Mumbai – 400072, INDIA
              </p>

              {/* <label className="footer-checkbox">
                <input type="checkbox" />

                <span>
                  I agree to the{' '}
                  <Link href="/" className="footer-terms">
                    Terms & Conditions
                  </Link>
                </span>
              </label> */}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-wrapper">
          {/* CONTACT */}
          <div className="footer-contact">
            <a href="tel:+917506035537" className="footer-contact-item">
              <span className="footer-contact-icon">
                <Phone size={15} />
              </span>

              <span className="footer-contact-text">+91 22 4608 0974</span>
            </a>

            <div className="footer-contact-item">
              {/* <span className="footer-contact-icon">
                <Mail size={15} />
              </span> */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@core-mediagroup.com&su=Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail size={15} />
                </span>

                <span className="footer-contact-text">contact@core-mediagroup.com</span>
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/coremediaindia/" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/core_media_/" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://x.com/CIOChoice" aria-label="Twitter">
              <FaXTwitter />
            </a>

            <a href="https://www.linkedin.com/company/core-mediagroup/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-copy">Copyright © 2026 CORE Media. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
