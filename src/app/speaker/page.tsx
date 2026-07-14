import Image from 'next/image';

const speakerGroups = [
  {
    title: 'Keynote Speakers',
    description:
      'Visionary leaders delivering strategic perspectives on enterprise technology, innovation, AI, cloud, and digital transformation.',
    speakers: [
      {
        name: 'Anoop Mathur',
        designation: 'Founder',
        company: 'CORE Media',
        image: '/assets/speaker/Anoop-Mathur.png',
      },
      {
        name: 'Saurabh Mukherjea',
        designation: 'Author',
        company: '"Breakpoint: The Crisis of the Middle Class and the Future of Work"',
        image: '/assets/speaker/Saurabh-Mukherjea-3.png',
      },
    ],
  },
  {
    title: 'Speakers',
    description:
      'Industry experts and enterprise leaders sharing practical insights, emerging trends, and transformative technology strategies.',
    speakers: [
      {
        name: 'Ananth Subramanian',
        designation: 'Sr. EVP & Head IT',
        company: 'Kotak Mahindra AMC',
        image: '/assets/speaker/Ananth-Subramanian-2.png',
      },
      {
        name: 'Dr. Nitin Paranjape',
        designation: 'Productivity Maverick',
        company: '',
        image: '/assets/speaker/Dr.-Nitin-Paranjape.png',
      },
      {
        name: 'Dr. Pradeep Pendse',
        designation: 'Professor Dean General Mgmt & CTO',
        company: 'L.N. Welingkar Institute of Management Development and Research',
        image: '/assets/speaker/Dr.-Pradeep-Pendse.png',
      },
      {
        name: 'Jagat Ram',
        designation: 'Head Datacenter Operation & Delivery',
        company: 'Larsen & Toubro',
        image: '/assets/speaker/Jagat-Ram.png',
      },
      {
        name: 'Pavan Agrawal',
        designation: 'CTO',
        company: 'Yes Bank',
        image: '/assets/speaker/Pavan-Agrawal.png',
      },
      {
        name: 'Rahul Chopra',
        designation: 'Sr. Director & Head Digital & Innovation CoE',
        company: 'PNB MetLife India Insurance',
        image: '/assets/speaker/Rahul-Chopra.png',
      },
      {
        name: 'Ramesh Narayanaswamy',
        designation: 'Group President - Digital & Data Intelligence',
        company: 'Hinduja Group',
        image: '/assets/speaker/Ramesh-Narayanswamy.png',
      },
      {
        name: 'Rupesh Mehta',
        designation: 'Sr. VP IT',
        company: 'Tata AIA Life Insurance',
        image: '/assets/speaker/Rupesh-Mehta.png',
      },
      {
        name: 'Udit Pahwa',
        designation: 'CIO',
        company: 'Blue Star',
        image: '/assets/speaker/Udit-pahwa.png',
      },
      {
        name: 'Vikas Gadre',
        designation: 'Consultant & Visiting Faculty',
        company: 'NMIMS',
        image: '/assets/speaker/Vikas-Gadre.png',
      },
    ],
  },
  {
    title: 'Partner Speakers',
    description:
      'Technology partner representatives presenting solutions, use cases, and innovations that enable intelligent enterprise growth.',
    speakers: [
      {
        name: 'Divya Kumar Ramesh Jotwani',
        designation: 'Senior Pre-Sales Solution Architect',
        company: 'Lenovo',
        image: '/assets/speaker/Divya-Kumar-Ramesh-Jotwani.png',
      },
      {
        name: 'Kunal Mathuria',
        designation: 'Head of Sales, Data Analytics & ML Services',
        company: 'Google Cloud India',
        image: '/assets/speaker/Kunal-Mathuria.png',
      },
      {
        name: 'Lalit Chowdhary',
        designation: 'Group Chief Technology & Innovation Officer',
        company: 'Lightstorm',
        image: '/assets/speaker/Lalit-Chowdhary.png',
      },
      {
        name: 'Mayank Chaturvedi',
        designation: 'Director - Hybrid Cloud Solutions',
        company: 'Hewlett Packard Enterprise, India',
        image: '/assets/speaker/Mayank-Chaturvedi.png',
      },
      {
        name: 'Omkar Sawant',
        designation: 'Customer Engineer, Data Analytics',
        company: 'Google Cloud',
        image: '/assets/speaker/Omkar-S.png',
      },
      {
        name: 'P Srinivasarao',
        designation: 'AVP Strategic Products',
        company: 'Tata Communications',
        image: '/assets/speaker/P-Srinivasarao.png',
      },
      {
        name: 'Rohan Padhi',
        designation: 'Partner',
        company: 'KPMG',
        image: '/assets/speaker/Rohan-Padhi.png',
      },
      {
        name: 'Uday Chaddha',
        designation: 'Sr. Sales Engineer',
        company: 'Rubrik',
        image: '/assets/speaker/Uday-Chaddha.png',
      },
      {
        name: 'Vinay HP',
        designation: 'Director – IT Business',
        company: 'Rittal India',
        image: '/assets/speaker/Vinay-H-P.png',
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
