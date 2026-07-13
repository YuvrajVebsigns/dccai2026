'use client';

import Image from 'next/image';

const themeCards = [
  {
    title: 'AI-Ready Infrastructure & Hyperscale Compute',
    description:
      'Explore how next-generation data centers are being purpose-built for AI—from GPU-heavy clusters and liquid-cooling innovations to modular, scalable architectures that meet extreme power and performance requirements.',
    image: '/assets/aboutus/ai.jpg',
    alt: 'AI-ready data center infrastructure',
  },
  {
    title: 'Hybrid & Multi-Cloud Ecosystems',
    description:
      'Hybrid and multi-cloud strategies are now the norm, enabling enterprises to balance agility, compliance, and cost while ensuring AI services remain performant and reliable across environments.',
    image: '/assets/aboutus/hybrid.jpg',
    alt: 'Hybrid and multi-cloud ecosystem',
  },
  {
    title: 'Intelligent Operations & Automation',
    description:
      'Learn how AI and machine learning are embedded into data center operations for predictive maintenance, autonomous orchestration, and optimization of energy, networking, and computing resources—driving efficiency and uptime.',
    image: '/assets/aboutus/operation.jpg',
    alt: 'Intelligent operations and automation',
  },
  {
    title: 'Sustainable, Resilient Growth',
    description:
      'Sustainability is not optional. Energy efficiency, carbon-neutral power strategies, and green cooling technologies are crucial as AI-driven workloads significantly increase power demands.',
    image: '/assets/aboutus/sustain.jpg',
    alt: 'Sustainable and resilient technology growth',
  },
  {
    title: 'Governance, Security & Data Sovereignty',
    description:
      'As infrastructure scales, governance frameworks around data privacy, compliance, and ethical AI become essential pillars of enterprise readiness.',
    image: '/assets/aboutus/security.jpg',
    alt: 'Data governance and cybersecurity',
  },
];

const attendeeGroups = [
  {
    title: 'Enterprise & Business Leaders',
    className: 'attendee-card-enterprise',
    items: [
      'CIOs, CTOs, CDOs, CISOs, IT Decision Makers',
      'Heads of IT Infrastructure, Cloud & Platforms',
      'Digital Transformation & Innovation Leaders',
      'Sustainability & ESG Leaders',
      'Security, Governance & Compliance Leaders',
    ],
  },
  {
    title: 'Data Center & Infrastructure Professionals',
    className: 'attendee-card-infrastructure',
    items: [
      'Data Center Operators & Facility Heads',
      'Infrastructure & Platform Architects',
      'Network, Storage & Compute Architects',
      'Colocation & Hyperscale Data Center Leaders',
      'Green Data Center & Energy Management Leaders',
      'Power, Cooling & Renewable Energy Specialists',
    ],
  },
  {
    title: 'Cloud & AI Practitioners',
    className: 'attendee-card-cloud',
    items: [
      'Cloud Architects & Engineers',
      'AI / ML Engineers & Platform Teams',
      'Data & Analytics Leaders',
      'MLOps & AIOps Professionals',
    ],
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* =====================================================
          EVENT THEME
      ====================================================== */}

      <section className="intelligent-theme-section">
        <div className="intelligent-theme-container">
          <div className="intelligent-theme-header">
            <span className="intelligent-theme-label">Theme</span>

            <h2>
              Scaling The Intelligent Enterprise: Next-Gen Data Centers Powering Cloud, Scale And AI
              Everywhere
            </h2>

            <p>
              In 2026, the digital transformation imperative has shifted from experimentation to
              enterprise-scale execution. <strong>Scaling The Intelligent Enterprise</strong> brings
              together global leaders, innovators, operators, and decision-makers to explore how
              next-generation data center and cloud infrastructure become the backbone of AI-powered
              business transformation.
            </p>

            <p>
              As AI workloads continue to outpace traditional IT demands, enterprises are investing
              heavily in hyperscale, cloud-native, and hybrid architectures that can deliver
              performance, resilience, and cost efficiency at massive scale. Industry giants are
              dramatically expanding capital spending on data centers and AI infrastructure to meet
              this growing demand—with cloud businesses driving significant revenue growth and
              compute capacity expansion in 2026.
            </p>
          </div>

          <div className="intelligent-theme-grid">
            <article className="why-theme-card">
              <div className="why-theme-card-content">
                <span className="why-theme-line" />

                <h3>Why This Matters Now</h3>

                <p>
                  Modern enterprises view AI as a core strategic asset, not an experimental add-on.
                  Delivering AI at scale requires a fundamental rethink of infrastructure
                  strategies—spanning data center design, cloud orchestration, high-performance
                  computing, AI-native networking, intelligent automation, and sustainability.
                </p>

                <p>
                  Cloud consumption models are evolving with AI as the primary growth engine,
                  forcing organizations to deploy GPUs, custom accelerators, and elastic cloud
                  services to support training, inference, and real-time insights.
                </p>
              </div>
            </article>

            {themeCards.map((card) => (
              <article className="intelligent-theme-card" key={card.title}>
                <div className="intelligent-theme-image">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={500}
                    height={290}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="intelligent-theme-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO SHOULD ATTEND
      ====================================================== */}

      <section className="who-should-attend-section">
        <div className="who-should-attend-container">
          <div className="who-should-attend-header">
            <span className="who-should-attend-label">Target Audience</span>

            <h2>Who Should Attend</h2>

            <p>
              This conference is designed for leaders and strategists shaping the future of
              intelligent enterprise infrastructure.
            </p>
          </div>

          <div className="attendee-cards-grid">
            {attendeeGroups.map((group) => (
              <article className={`attendee-card ${group.className}`} key={group.title}>
                <div className="attendee-card-number" aria-hidden="true">
                  {String(attendeeGroups.indexOf(group) + 1).padStart(2, '0')}
                </div>

                <h3>{group.title}</h3>

                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="attendee-list-icon" aria-hidden="true">
                        ›
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
    WHAT YOU’LL TAKE AWAY
====================================================== */}

      <section className="takeaway-section">
        <div className="takeaway-container">
          <div className="takeaway-layout">
            <div className="takeaway-heading">
              <span className="takeaway-label">Key Takeaways</span>

              <h2>What You’ll Take Away</h2>

              <p>
                Participants will gain high-value insights into the strategies, technologies, and
                leadership practices shaping the next generation of intelligent enterprise
                infrastructure.
              </p>
            </div>

            <div className="takeaway-content">
              <div className="takeaway-list">
                <article className="takeaway-item">
                  <span className="takeaway-number">01</span>

                  <div>
                    <h3>Scale AI Workloads Effectively</h3>

                    <p>
                      Build cloud and data center architectures capable of supporting demanding AI
                      workloads with agility, reliability, and enterprise-grade performance.
                    </p>
                  </div>
                </article>

                <article className="takeaway-item">
                  <span className="takeaway-number">02</span>

                  <div>
                    <h3>Optimize Performance and Cost</h3>

                    <p>
                      Improve cost, computing performance, and energy utilization across
                      petabyte-scale data environments and exaflop-level infrastructure.
                    </p>
                  </div>
                </article>

                <article className="takeaway-item">
                  <span className="takeaway-number">03</span>

                  <div>
                    <h3>Align Infrastructure with Business Goals</h3>

                    <p>
                      Connect infrastructure investments with business priorities, operational
                      resilience, sustainability targets, and long-term growth.
                    </p>
                  </div>
                </article>

                <article className="takeaway-item">
                  <span className="takeaway-number">04</span>

                  <div>
                    <h3>Lead Responsible Transformation</h3>

                    <p>
                      Drive enterprise transformation through stronger governance, secure operating
                      models, and responsible AI practices.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="takeaway-closing">
            <span className="takeaway-closing-mark">“</span>

            <p>
              By bringing together technical visionaries, industry strategists, and ecosystem
              partners,
              <strong> Scaling the Intelligent Enterprise 2026</strong> is where the future of
              cloud, data center, and AI converges—powering innovation everywhere.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
