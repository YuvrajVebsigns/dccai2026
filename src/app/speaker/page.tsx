import Image from 'next/image';

const speakerGroups = [
  {
    title: 'Keynote Speakers',
    description:
      'Visionary leaders delivering strategic perspectives on enterprise technology, innovation, AI, cloud, and digital transformation.',
    speakers: [
      {
        name: 'Keynote Speaker 1',
        designation: 'Chief Information Officer',
        company: 'Organization Name',
        image: '/assets/speakers/keynote-speaker-1.png',
      },
      {
        name: 'Keynote Speaker 2',
        designation: 'Chief Technology Officer',
        company: 'Organization Name',
        image: '/assets/speakers/keynote-speaker-2.png',
      },
      {
        name: 'Keynote Speaker 3',
        designation: 'Digital Transformation Leader',
        company: 'Organization Name',
        image: '/assets/speakers/keynote-speaker-3.png',
      },
    ],
  },
  {
    title: 'Speakers',
    description:
      'Industry experts and enterprise leaders sharing practical insights, emerging trends, and transformative technology strategies.',
    speakers: [
      {
        name: 'Speaker 1',
        designation: 'Head of IT Infrastructure',
        company: 'Organization Name',
        image: '/assets/speakers/speaker-1.png',
      },
      {
        name: 'Speaker 2',
        designation: 'Cloud and Data Center Leader',
        company: 'Organization Name',
        image: '/assets/speakers/speaker-2.png',
      },
      {
        name: 'Speaker 3',
        designation: 'Chief Information Security Officer',
        company: 'Organization Name',
        image: '/assets/speakers/speaker-3.png',
      },
      {
        name: 'Speaker 4',
        designation: 'Head of Digital Innovation',
        company: 'Organization Name',
        image: '/assets/speakers/speaker-4.png',
      },
      {
        name: 'Speaker 5',
        designation: 'AI and Automation Leader',
        company: 'Organization Name',
        image: '/assets/speakers/speaker-5.png',
      },
      {
        name: 'Speaker 6',
        designation: 'Enterprise Technology Leader',
        company: 'Organization Name',
        image: '/assets/speakers/speaker-6.png',
      },
    ],
  },
  {
    title: 'Partner Speakers',
    description:
      'Technology partner representatives presenting solutions, use cases, and innovations that enable intelligent enterprise growth.',
    speakers: [
      {
        name: 'Partner Speaker 1',
        designation: 'Technology Evangelist',
        company: 'Partner Organization',
        image: '/assets/speakers/partner-speaker-1.png',
      },
      {
        name: 'Partner Speaker 2',
        designation: 'Enterprise Solutions Leader',
        company: 'Partner Organization',
        image: '/assets/speakers/partner-speaker-2.png',
      },
      {
        name: 'Partner Speaker 3',
        designation: 'Cloud Business Leader',
        company: 'Partner Organization',
        image: '/assets/speakers/partner-speaker-3.png',
      },
    ],
  },
];

export default function Partner2026Page() {
  return (
    <main className="speakers-page">
      <section className="speakers-section">
        <div className="speakers-container">
          <header className="speakers-heading">
            {/* <span className="speakers-label">DCCAI 2026</span> */}

            <h1 className="speakers-title">
              <span> Speakers</span>
            </h1>
          </header>

          {speakerGroups.map((group, groupIndex) => (
            <section className="speaker-group" key={group.title}>
              <div className="speaker-group-heading">
                <div>
                  <span className="speaker-group-number">
                    {String(groupIndex + 1).padStart(2, '0')}
                  </span>

                  <h2>{group.title}</h2>
                </div>

                <p>{group.description}</p>
              </div>

              <div className="speaker-grid">
                {group.speakers.map((speaker) => (
                  <article className="speaker-card" key={`${group.title}-${speaker.name}`}>
                    <div className="speaker-image-wrapper">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={420}
                        height={480}
                        className="speaker-image"
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* <span className="speaker-type">{group.title}</span> */}
                    </div>

                    <div className="speaker-card-content">
                      <h3>{speaker.name}</h3>
                      <p className="speaker-designation">{speaker.designation}</p>
                      <p className="speaker-company">{speaker.company}</p>

                      <span className="speaker-card-line" />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
