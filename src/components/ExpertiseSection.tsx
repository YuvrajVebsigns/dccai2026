'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

export default function AboutCioChoiceSection() {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
  });

  const cardRef1 = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-left',
    initialTransform: 'translateX(-40px)',
    threshold: 0.2,
  });

  const cardRef2 = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
    threshold: 0.2,
  });

  const cardRef3 = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-right',
    initialTransform: 'translateX(40px)',
    threshold: 0.2,
  });

  const cards = [
    {
      title: 'Data Center Cloud and AI World 2026',
      description:
        'Curated by CORE Media, Data Center Cloud and AI World (DCCAI) 2026 is a premier forum of enterprise technology leaders driving AI-ready infrastructure transformation.',
      image: '/assets/aboutus/IMG1.png',
    },
    {
      title: 'About CORE Media',
      description:
        'Founded in 2012, CORE Media (Centre of Recognition & Excellence) is a multi-platform, new-age niche media company that owns and operates proprietary marketing events, account-based marketing (ABM) solutions and digital platforms, with a focus on ICT enterprises, the CIO community and technology startups.',
      image: '/assets/aboutus/IMG2.png',
    },
    {
      title: 'Our Reach and Impact',
      description:
        'Our programs have a combined reach of 15,000+ C-level IT leaders and 100,000+ IT influencers and decision-makers across all key sectors. Our recognised and unique brand engagements have reached more than 600 clients over the last 14 years.',
      additionalDescription:
        'Through our bespoke offerings, we have consistently delivered quality events and secured successful outcomes for our clients, supported by our unparalleled reach within the ICT community across India.',
      image: '/assets/aboutus/IMG3.png',
    },
  ];

  const cardRefs = [cardRef1, cardRef2, cardRef3];

  return (
    <section ref={sectionRef} className="about-cio-section">
      <div className="about-cio-container">
        <div className="about-cio-heading">
          <div className="about-cio-label">
            <Image
              src="/assets/icon.png"
              alt="About DCCAI"
              width={20}
              height={20}
              className="expertise-label-icon"
            />

            <span className="about-cio-label-text">ABOUT DCCAI 2026</span>
          </div>

          {/* <h2 className="about-cio-title">
            Building the Future of <span>AI-Ready Infrastructure</span>
          </h2>

          <p className="about-cio-description">
            Bringing together enterprise technology leaders, infrastructure experts and digital
            innovators to shape the next generation of data center, cloud and artificial
            intelligence ecosystems.
          </p> */}
        </div>

        <div className="about-cio-grid">
          {cards.map((card, index) => (
            <div key={card.title} ref={cardRefs[index]} className="about-cio-card">
              {/* <div className="about-cio-image-wrap">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={320}
                  className="about-cio-card-img"
                />
              </div> */}

              <h3 className="about-cio-card-title">{card.title}</h3>

              <p className="about-cio-card-description">{card.description}</p>

              {card.additionalDescription && (
                <p className="about-cio-card-description">{card.additionalDescription}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
