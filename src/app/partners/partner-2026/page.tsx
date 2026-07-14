export default function Partner2026Page() {
  const partnerGroups = [
    {
      title: 'Premium Partners',
      logos: [
        '/assets/partner2026/premiumpartner_logo_1.png',
        '/assets/partner2026/premiumpartner_logo_2.png',
        '/assets/partner2026/premiumpartner_logo_3.png',
        '/assets/partner2026/premiumpartner_logo_4.png',
        '/assets/partner2026/premiumpartner_logo_5.png',
      ],
    },
    {
      title: 'Elite Partners',
      logos: ['/assets/partner2026/elite_logo_1.png'],
    },

    {
      title: 'Associate Partners',
      logos: [
        '/assets/partner2026/Associate_Partners_1.png',
        '/assets/partner2026/Associate_Partners_2.png',
      ],
    },

    {
      title: 'Partners',
      logos: [
        '/assets/partner2026/partner_logo_1.png',
        '/assets/partner2026/partner_logo_2.png',
        '/assets/partner2026/partner_logo_3.png',
      ],
    },

    {
      title: 'Knowledge Partner',
      logos: ['/assets/partner2026/knowledgepartner_logo_1.png'],
    },
  ];

  return (
    <main>
      <section className="partner2026-section">
        <div className="partner2026-container">
          <div className="partner2026-heading">
            <span className="partner2026-label11">PARTNERS 2026</span>

            <h1 className="partner2026-title">
              Celebrating Our <span>Valued Partners</span>
            </h1>

            {/* <p className="partner2026-description">
              We proudly collaborate with leading brands and technology partners who support CIO
              Power List 2026 and strengthen India&apos;s enterprise technology ecosystem.
            </p> */}
          </div>

          {partnerGroups.map((group) => (
            <div key={group.title} className="partner-group">
              <h2 className="partner-group-title">{group.title}</h2>

              <div className="partner-grid-static">
                {group.logos.map((logo, index) => (
                  <div key={index} className="partner-card">
                    <img src={logo} alt={`${group.title} ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
