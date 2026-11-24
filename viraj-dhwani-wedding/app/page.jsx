'use client';

import { useEffect, useState } from 'react';

const events = [
  { day: '24', month: 'JAN', year: '2027', title: 'Haldi', guj: 'હળદર', time: 'Time to be announced', note: 'A sunshine-filled celebration of turmeric, laughter and blessings.', symbol: '✿' },
  { day: '25', month: 'JAN', year: '2027', title: 'Mandap & Sangeet Sandhya', guj: 'મંડપ અને સંગીત સંધ્યા', time: 'Sangeet · 8:00 PM', note: 'An evening of music, dance, family and beautiful traditions.', symbol: '♫' },
  { day: '26', month: 'JAN', year: '2027', title: 'Lagan', guj: 'લગ્ન', time: 'Time to be announced', note: 'The day two hearts and two families become one.', symbol: 'ॐ' }
];

function Countdown() {
  const [remaining, setRemaining] = useState(null);
  useEffect(() => {
    const target = new Date('2027-01-26T10:00:00+05:30').getTime();
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setRemaining({ days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 });
    };
    update(); const timer = setInterval(update, 1000); return () => clearInterval(timer);
  }, []);
  if (!remaining) return <div className="countdown">Loading the celebration…</div>;
  return <div className="countdown" aria-label="Countdown to the wedding">{Object.entries(remaining).map(([unit, value]) => <div className="count-unit" key={unit}><strong>{String(value).padStart(2, '0')}</strong><span>{unit}</span></div>)}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <nav className="nav wrap"><a className="brand" href="#home">V <span>&</span> D</a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button><div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#events" onClick={() => setMenuOpen(false)}>Celebrations</a><a href="#details" onClick={() => setMenuOpen(false)}>The details</a><a href="#rsvp" onClick={() => setMenuOpen(false)}>RSVP</a></div></nav>

    <section className="hero" id="home"><div className="hero-pattern"></div><div className="hero-inner"><p className="eyebrow">॥ શ્રી ગણેશાય નમઃ ॥</p><div className="ornament">✧ &nbsp; ✿ &nbsp; ✧</div><p className="eyebrow spaced">TOGETHER WITH THEIR FAMILIES</p><h1>Viraj <i>&</i><br/>Dhwani</h1><p className="hero-subtitle">invite you to celebrate the beginning<br className="desktop"/> of their forever</p><div className="hero-rule"><span>❧</span></div><p className="wedding-date">26 <span>·</span> 01 <span>·</span> 2027</p><p className="hero-location">GUJARATI WEDDING CELEBRATION</p><a className="outline-button" href="#events">Explore the celebrations <span>↓</span></a></div><div className="side-note">A DAY TO REMEMBER · A LIFETIME TOGETHER</div></section>

    <section className="intro section-pad" id="story"><div className="section-kicker">A LITTLE NOTE FROM US</div><div className="small-flower">✿</div><h2>Two hearts.<br/><em>One beautiful</em> beginning.</h2><p className="intro-copy">With the blessings of our families and the love of everyone dear to us, we invite you to be part of our most cherished celebration. Your presence will make our moments even more special.</p><div className="names-signature">Viraj <span>&</span> Dhwani</div><div className="intro-bottom">WITH LOVE, AND A WHOLE LOT OF JOY</div></section>

    <section className="events-section section-pad" id="events"><div className="section-kicker">SAVE THE DATES</div><h2>Our wedding <em>celebrations</em></h2><p className="section-lead">Three days of traditions, music, colour and memories.</p><div className="event-grid">{events.map((event, i) => <article className="event-card" key={event.title}><div className="event-index">0{i + 1}</div><div className="event-symbol">{event.symbol}</div><div className="event-date"><strong>{event.day}</strong><span>{event.month} {event.year}</span></div><div className="event-line"></div><p className="event-guj">{event.guj}</p><h3>{event.title}</h3><p className="event-time">{event.time}</p><p className="event-note">{event.note}</p></article>)}</div><p className="date-note">Please note: event timings and venue details will be updated soon.</p></section>

    <section className="count-section"><div className="count-flower">✿</div><p className="section-kicker">THE COUNTDOWN BEGINS</p><h2>Until we say <em>“I do”</em></h2><Countdown/><p className="count-caption">26 JANUARY 2027 · THE BIG DAY</p></section>

    <section className="details-section section-pad" id="details"><div className="section-kicker">PLAN YOUR VISIT</div><h2>All the <em>little details</em></h2><div className="detail-grid"><div className="detail-item"><span className="detail-icon">⌖</span><h3>Where</h3><p>Venue name to be announced</p><small>City, Gujarat, India</small></div><div className="detail-item"><span className="detail-icon">◷</span><h3>When</h3><p>24 – 26 January 2027</p><small>Event-wise timings coming soon</small></div><div className="detail-item"><span className="detail-icon">❀</span><h3>Dress with joy</h3><p>Festive Indian attire</p><small>Bring your brightest smiles</small></div></div><p className="detail-footnote">Venue address, Google Maps location and individual event timings will be added once confirmed.</p></section>

    <section className="rsvp-section section-pad" id="rsvp"><div className="rsvp-inner"><p className="section-kicker">WE HOPE YOU CAN JOIN US</p><h2>Your presence is<br/><em>our present.</em></h2><p>Kindly let us know if you’ll be celebrating with us. We can’t wait to see you!</p><a className="solid-button" href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20love%20to%20RSVP%20for%20Viraj%20%26%20Dhwani%27s%20wedding." target="_blank" rel="noreferrer">RSVP on WhatsApp ↗</a><small>Replace the sample WhatsApp number with your family contact number before publishing.</small></div></section>

    <footer className="footer"><div className="footer-flower">✿</div><p className="footer-names">Viraj <span>&</span> Dhwani</p><p>26 · 01 · 2027</p><div className="footer-rule"></div><p className="footer-blessing">May our days be filled with love, laughter and togetherness.</p><small>MADE WITH LOVE · GUJARATI WEDDING CELEBRATION</small></footer>
  </main>;
}
