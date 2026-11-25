'use client';

import { useEffect, useState } from 'react';

const events = [
  {
    day: '24',
    month: 'JAN',
    title: 'Haldi',
    guj: 'હળદર',
    time: 'Time to be announced',
    note: 'A sunshine-filled celebration of turmeric, laughter and blessings.',
    symbol: '✿'
  },
  {
    day: '25',
    month: 'JAN',
    title: 'Mandap & Sangeet Sandhya',
    guj: 'મંડપ અને સંગીત સંધ્યા',
    time: 'Sangeet · 8:00 PM',
    note: 'An evening of music, dance, family and beautiful traditions.',
    symbol: '♫'
  },
  {
    day: '26',
    month: 'JAN',
    title: 'Lagan',
    guj: 'લગ્ન',
    time: 'Time to be announced',
    note: 'The day two hearts and two families become one.',
    symbol: 'ॐ'
  }
];

function Countdown() {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    const target = new Date('2027-01-26T00:00:00+05:30').getTime();
    const update = () => {
      const difference = Math.max(0, target - Date.now());
      setRemaining({
        days: Math.floor(difference / 86400000),
        hours: Math.floor(difference / 3600000) % 24,
        minutes: Math.floor(difference / 60000) % 60,
        seconds: Math.floor(difference / 1000) % 60
      });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!remaining) return <div className="countdown" aria-live="polite">Counting down to our day…</div>;

  return (
    <div className="countdown" aria-label="Countdown to the wedding">
      {Object.entries(remaining).map(([unit, value]) => (
        <div className="count-unit" key={unit}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{unit}</span>
        </div>
      ))}
    </div>
  );
}

function Rangoli() {
  return (
    <svg className="rangoli" viewBox="0 0 240 240" fill="none" aria-hidden="true">
      <circle cx="120" cy="120" r="95" />
      <circle cx="120" cy="120" r="78" />
      <circle cx="120" cy="120" r="57" />
      <circle cx="120" cy="120" r="35" />
      {Array.from({ length: 12 }, (_, index) => (
        <ellipse
          key={index}
          cx="120"
          cy="49"
          rx="9"
          ry="22"
          transform={`rotate(${index * 30} 120 120)`}
        />
      ))}
      <path d="M120 99l5 16 16 5-16 5-5 16-5-16-16-5 16-5 5-16Z" />
      <circle cx="120" cy="120" r="5" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rsvpMessage = encodeURIComponent(
    'Hello! I would love to RSVP for Viraj & Dhwani’s wedding celebrations. Please share the details.'
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <a className="skip-link" href="#hero-title">Skip to content</a>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Viraj and Dhwani, home">V <span>&</span> D</a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          {menuOpen ? '×' : '☰'}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#events" onClick={closeMenu}>Celebrations</a>
          <a href="#details" onClick={closeMenu}>The details</a>
          <a className="nav-rsvp" href="#rsvp" onClick={closeMenu}>RSVP <span>↗</span></a>
        </div>
      </nav>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow gujarati">॥ શ્રી ગણેશાય નમઃ ॥</p>
            <div className="hero-divider" aria-hidden="true"><span>✳</span></div>
            <p className="eyebrow spaced">TOGETHER WITH THEIR FAMILIES</p>
            <h1 id="hero-title">Viraj <i>&</i><br />Dhwani</h1>
            <p className="hero-subtitle">invite you to celebrate<br />the beginning of their forever</p>
            <p className="wedding-date"><span>26</span> JANUARY <span>2027</span></p>
            <p className="hero-location">A GUJARATI WEDDING CELEBRATION</p>
            <a className="outline-button" href="#events">Explore the celebrations <span>↓</span></a>
          </div>
          <div className="hero-art" role="img" aria-label="Rangoli-inspired wedding artwork">
            <div className="art-toran" aria-hidden="true"><span>✿　❋　✿　❋　✿　❋　✿</span></div>
            <div className="art-arch">
              <div className="art-sun" />
              <Rangoli />
              <p className="art-blessing gujarati">શુભ લગ્ન</p>
            </div>
            <div className="art-caption"><span>THE WEDDING OF</span><strong>Viraj & Dhwani</strong></div>
            <span className="art-spark art-spark-one" aria-hidden="true">✦</span>
            <span className="art-spark art-spark-two" aria-hidden="true">✧</span>
          </div>
          <p className="hero-side-note">A DAY TO REMEMBER · A LIFETIME TOGETHER</p>
        </div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="section-kicker">A LITTLE NOTE FROM US</div>
        <div className="small-flower" aria-hidden="true">✿</div>
        <h2>Two hearts.<br /><em>One beautiful</em> beginning.</h2>
        <p className="intro-copy">
          With the blessings of our families and the love of everyone dear to us, we invite you to be part of our most cherished celebration. Your presence will make our moments even more special.
        </p>
        <div className="names-signature">Viraj <span>&</span> Dhwani</div>
        <div className="intro-bottom">WITH LOVE, AND A WHOLE LOT OF JOY</div>
      </section>

      <section className="events-section section-pad" id="events">
        <div className="section-kicker">SAVE THE DATES</div>
        <h2>Our wedding <em>celebrations</em></h2>
        <p className="section-lead">Three days of traditions, music, colour and memories.</p>
        <div className="event-grid">
          {events.map((event, index) => (
            <article className="event-card" key={event.title}>
              <div className="event-index">0{index + 1} <span>·</span> JANUARY</div>
              <div className="event-symbol" aria-hidden="true">{event.symbol}</div>
              <p className="event-guj gujarati">{event.guj}</p>
              <h3>{event.title}</h3>
              <div className="event-date"><strong>{event.day}</strong><span>JAN<br />2027</span></div>
              <p className="event-time">{event.time}</p>
              <p className="event-note">{event.note}</p>
            </article>
          ))}
        </div>
        <p className="date-note">Venue and event timings will be shared as soon as they are confirmed.</p>
      </section>

      <section className="count-section" aria-labelledby="count-title">
        <div className="count-flower" aria-hidden="true">✿</div>
        <p className="section-kicker">THE COUNTDOWN BEGINS</p>
        <h2 id="count-title">Until we say <em>“I do”</em></h2>
        <Countdown />
        <p className="count-caption">26 JANUARY 2027 · THE BIG DAY</p>
      </section>

      <section className="details-section section-pad" id="details">
        <div className="section-kicker">PLAN YOUR VISIT</div>
        <h2>All the <em>little details</em></h2>
        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-icon" aria-hidden="true">⌖</span>
            <h3>Where</h3>
            <p>Venue to be announced</p>
            <small>City, Gujarat, India</small>
          </div>
          <div className="detail-item">
            <span className="detail-icon" aria-hidden="true">◷</span>
            <h3>When</h3>
            <p>24–26 January 2027</p>
            <small>Event-wise timings coming soon</small>
          </div>
          <div className="detail-item">
            <span className="detail-icon" aria-hidden="true">❀</span>
            <h3>Dress with joy</h3>
            <p>Festive Indian attire</p>
            <small>Bring your brightest smiles</small>
          </div>
        </div>
        <p className="detail-footnote">We’ll add the venue address, map and final timings here once they’re confirmed.</p>
      </section>

      <section className="rsvp-section section-pad" id="rsvp">
        <div className="rsvp-inner">
          <p className="section-kicker">WE HOPE YOU CAN JOIN US</p>
          <h2>Your presence is<br /><em>our present.</em></h2>
          <p>Kindly let us know if you’ll be celebrating with us. We can’t wait to see you!</p>
          <a
            className="solid-button"
            href={`https://wa.me/?text=${rsvpMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            RSVP on WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <small>WhatsApp will open with a pre-filled message. Please choose the family contact.</small>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-flower" aria-hidden="true">✿</div>
        <p className="footer-names">Viraj <span>&</span> Dhwani</p>
        <p>26 · 01 · 2027</p>
        <div className="footer-rule" />
        <p className="footer-blessing">May our days be filled with love, laughter and togetherness.</p>
        <small>MADE WITH LOVE · GUJARATI WEDDING CELEBRATION</small>
      </footer>
    </main>
  );
}
