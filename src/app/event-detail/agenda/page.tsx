'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';
import { useState } from 'react';

const agendaHighlights = [
  'Keynote',
  'Partner Session',
  'Power Panel',
  'Workshop',
  'Recognition',
  'Break',
] as const;

type AgendaCategory = (typeof agendaHighlights)[number];

type AgendaItem = {
  time: string;
  title: string;
  description?: string;
};

const agendaData: Record<AgendaCategory, AgendaItem[]> = {
  Keynote: [
    {
      time: '2:00 PM - 2:15 PM',
      title: 'Welcome Note',
      description: 'Anoop Mathur, Founder, CORE Media',
    },
    {
      time: '2:45 PM - 3:15 PM',
      title: 'Guest Keynote - AI and the Future of Work',
      description: 'Saurabh Mukherjea, Author',
    },
  ],

  'Partner Session': [
    {
      time: '2:15 PM - 2:30 PM',
      title:
        'From Data Chaos to Cognitive Scale: Building the Intelligent Fabric for Enterprise AI',
      description:
        'Kunal Mathuria, Head of Sales, Data Analytics & ML Services, Google Cloud India',
    },
    {
      time: '2:30 PM - 2:45 PM',
      title: 'Google Cloud Demo Session',
      description: 'Omkar Sawant, Customer Engineer, Data Analytics, Google Cloud India',
    },
    {
      time: '3:15 PM - 3:30 PM',
      title: 'Experience the Future of Enterprise Connectivity: Built for AI Era',
      description: 'Lalit Chowdhary, Group Chief Technology & Innovation Officer, Lightstorm',
    },
    {
      time: '3:30 PM - 3:45 PM',
      title: 'Scaling Hybrid AI: Building the Intelligent Enterprise Across Cloud & Data Center',
      description: 'Divya Kumar Ramesh Jotwani, Senior Pre-Sales Solution Architect, Lenovo',
    },
    {
      time: '4:00 PM - 4:15 PM',
      title: 'Rubrik Agent Cloud – Unleash Agents, Not Risk',
      description: 'Uday Chaddha, Sr. Sales Engineer, Rubrik',
    },
    {
      time: '4:55 PM - 5:15 PM',
      title: 'Rittal Edge & AI Ready Data Center Solutions',
      description: 'Vinay HP, Director – IT Business, Rittal India',
    },
    {
      time: '5:35 PM - 5:55 PM',
      title: 'AI in Enterprise - Simplify, Streamline and Succeed',
      description: 'Rohan Padhi, Partner, KPMG',
    },
  ],

  'Power Panel': [
    {
      time: '3:45 PM - 4:00 PM',
      title: 'Power Panel: Building AI-Ready Enterprise Infrastructure',
      description:
        'Enterprise technology leaders discuss scalable infrastructure, cloud strategy and AI adoption.',
    },
    {
      time: '5:15 PM - 5:35 PM',
      title: 'Power Panel: The Future of Data Centers, Cloud and AI',
      description:
        'Industry leaders share perspectives on intelligent operations, sustainability and innovation.',
    },
  ],

  Workshop: [
    {
      time: '11:00 AM - 11:30 AM',
      title: 'Workshop: Enterprise AI Best Practices',
      description: 'Dr. Nitin Paranjape, Productivity Maverick',
    },
    {
      time: '11:30 AM - 12:00 PM',
      title: 'Workshop: Notion of Architectural Thinking in the AI and Cloud Era',
      description:
        'Prof. Pradeep Pendse, Professor Dean General Mgmt & CTO, Prin. L.N. Welingkar Institute of Management Development and Research',
    },
    {
      time: '12:00 PM - 1:00 PM',
      title: 'Workshop: AI Risk, Compliance, and Governance',
      description: 'Vikas Gadre, Consultant & Visiting Faculty, NMIMS',
    },
  ],

  Recognition: [
    {
      time: '6:55 PM - 7:40 PM',
      title: 'LeaderNext 2026 Recognitions',
    },
  ],

  Break: [
    {
      time: '10:00 AM - 11:00 AM',
      title: 'Registration & Walkthrough Experience Zone',
    },
    {
      time: '1:00 PM - 2:00 PM',
      title: 'Networking Lunch',
    },
    {
      time: '4:30 PM - 4:45 PM',
      title: 'Coffee Break',
    },
    {
      time: '5:55 PM - 6:55 PM',
      title: 'Walkthrough Experience Zone',
    },
  ],
};

export default function EventAgendaPage() {
  const [activeHighlight, setActiveHighlight] = useState<AgendaCategory>('Keynote');

  const activeAgendaItems = agendaData[activeHighlight];

  const handleDownload = () => {
    window.open('/assets/agenda/dccai-2026-agenda.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="agenda-page">
      <section className="agenda-section">
        <div className="agenda-container">
          {/* Top brand section */}
          <div className="agenda-brand-row">
            <div className="agenda-logo agenda-logo-left">
              <Image
                src="/assets/logo/DCCAI-Logo-Black.webp"
                alt="DCCAI World"
                width={190}
                height={70}
                priority
              />
            </div>

            <div className="agenda-event-information">
              <p className="agenda-event-name">Data Center, Cloud &amp; AI World</p>

              <p className="agenda-event-date">May 15, 2026 • ITC Maratha, Mumbai</p>
            </div>

            {/* <div className="agenda-logo agenda-logo-right">
              <Image
                src="/assets/logo/logo.png"
                alt="CORE Media"
                width={135}
                height={70}
                priority
              />
            </div> */}
          </div>

          {/* Page heading */}
          <div className="agenda-heading">
            <span className="agenda-heading-label">Event Schedule</span>

            <h1>Agenda</h1>

            <div className="agenda-heading-line" />
          </div>

          {/* Main agenda layout */}
          <div className="agenda-layout">
            {/* Left vertical navigation */}
            <aside className="agenda-sidebar">
              <div className="agenda-sidebar-card">
                <span className="agenda-sidebar-title">Highlights</span>

                {agendaHighlights.map((highlight, index) => (
                  <button
                    key={highlight}
                    type="button"
                    className={`agenda-sidebar-item ${
                      activeHighlight === highlight ? 'active' : ''
                    }`}
                    onClick={() => setActiveHighlight(highlight)}
                    aria-pressed={activeHighlight === highlight}
                  >
                    <span className="agenda-sidebar-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span>{highlight}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Right agenda content */}
            <div className="agenda-content">
              <div className="agenda-content-top">
                <button type="button" className="agenda-download-button" onClick={handleDownload}>
                  <Download size={16} strokeWidth={2.4} />
                  Download PDF
                </button>
              </div>

              {/* Desktop agenda table */}
              <div className="agenda-table-wrapper">
                <div className="agenda-table">
                  <div className="agenda-table-header">
                    <div className="agenda-table-time-column">Timing</div>
                    <div className="agenda-table-details-column">Agenda</div>
                  </div>

                  <div className="agenda-table-body">
                    {activeAgendaItems.map((item) => (
                      <article
                        key={`${activeHighlight}-${item.time}-${item.title}`}
                        className="agenda-table-row"
                      >
                        <div className="agenda-time">
                          <span>{item.time}</span>
                        </div>

                        <div className="agenda-details">
                          <span className="agenda-item-type">{activeHighlight}</span>

                          <h2>{item.title}</h2>

                          {item.description && <p>{item.description}</p>}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile agenda cards */}
              <div className="agenda-mobile-list">
                {activeAgendaItems.map((item) => (
                  <article
                    key={`mobile-${activeHighlight}-${item.time}-${item.title}`}
                    className="agenda-mobile-card"
                  >
                    <div className="agenda-mobile-time">{item.time}</div>

                    <div className="agenda-mobile-content">
                      <span>{activeHighlight}</span>

                      <h2>{item.title}</h2>

                      {item.description && <p>{item.description}</p>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
