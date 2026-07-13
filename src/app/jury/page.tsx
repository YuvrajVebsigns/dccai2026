import Image from 'next/image';

const juryMembers = [
  {
    name: 'Anjani',
    image: '/assets/jury/Anjani.png',
    alt: 'LeaderNext jury member Anjani',
  },
  {
    name: 'Hilal',
    image: '/assets/jury/hilal.png',
    alt: 'LeaderNext jury member Hilal',
  },
  {
    name: 'Jai Prakash Sharma',
    image: '/assets/jury/Jai-Prakash-Sharma.png',
    alt: 'LeaderNext jury member Jai Prakash Sharma',
  },
  {
    name: 'Parhi',
    image: '/assets/jury/Parhi.png',
    alt: 'LeaderNext jury member Parhi',
  },
  {
    name: 'Rajesh',
    image: '/assets/jury/Rajesh.png',
    alt: 'LeaderNext jury member Rajesh',
  },
  {
    name: 'Viral Devda',
    image: '/assets/jury/Viral-Davda.png',
    alt: 'LeaderNext jury member Viral Devda',
  },
];

export default function JuryPage() {
  return (
    <main className="jury-page">
      <section className="jury-section">
        <div className="jury-container">
          <header className="jury-heading">
            <span className="jury-label">LeaderNext 2026</span>

            <h1 className="jury-title">
              Meet Our Distinguished <span>Jury Members</span>
            </h1>
          </header>

          <div className="jury-grid">
            {juryMembers.map((member, index) => (
              <article className="jury-card" key={member.name}>
                <div className="jury-card-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="jury-image-wrapper">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={420}
                    height={480}
                    className="jury-image"
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="jury-card-content">
                  {/* <span className="jury-member-label">Jury Member</span> */}
                  <h2>{member.name}</h2>

                  <div className="jury-card-line" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
