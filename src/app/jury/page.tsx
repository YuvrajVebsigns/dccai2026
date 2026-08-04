// import Image from 'next/image';

// const juryMembers = [
//   {
//     name: 'Anjani',
//     image: '/assets/jury/Anjani.png',
//     alt: 'LeaderNext jury member Anjani',
//   },
//   {
//     name: 'Hilal',
//     image: '/assets/jury/hilal.png',
//     alt: 'LeaderNext jury member Hilal',
//   },
//   {
//     name: 'Jai Prakash Sharma',
//     image: '/assets/jury/Jai-Prakash-Sharma.png',
//     alt: 'LeaderNext jury member Jai Prakash Sharma',
//   },
//   {
//     name: 'Parhi',
//     image: '/assets/jury/Parhi.png',
//     alt: 'LeaderNext jury member Parhi',
//   },
//   {
//     name: 'Rajesh',
//     image: '/assets/jury/Rajesh.png',
//     alt: 'LeaderNext jury member Rajesh',
//   },
//   {
//     name: 'Viral Devda',
//     image: '/assets/jury/Viral-Davda.png',
//     alt: 'LeaderNext jury member Viral Devda',
//   },
// ];

// export default function JuryPage() {
//   return (
//     <main className="jury-page">
//       <section className="jury-section">
//         <div className="jury-container">
//           <header className="jury-heading">
//             <span className="jury-label">LeaderNext 2026</span>

//             <h1 className="jury-title">
//               Meet Our Distinguished <span>Jury Members</span>
//             </h1>
//           </header>

//           <div className="jury-grid">
//             {juryMembers.map((member, index) => (
//               <article className="jury-card" key={member.name}>
//                 <div className="jury-card-number" aria-hidden="true">
//                   {String(index + 1).padStart(2, '0')}
//                 </div>

//                 <div className="jury-image-wrapper">
//                   <Image
//                     src={member.image}
//                     alt={member.alt}
//                     width={420}
//                     height={480}
//                     className="jury-image"
//                     sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />
//                 </div>

//                 <div className="jury-card-content">
//                   {/* <span className="jury-member-label">Jury Member</span> */}
//                   <h2>{member.name}</h2>

//                   <div className="jury-card-line" />
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  fetchWebsitePageBySlug,
  type WebsitePage,
  type WebsitePageContentBlock,
} from '@/services/pages.service';

type JuryMember = {
  name: string;
  designation?: string;
  company?: string;
  image?: string;
};

type JuryGroup = {
  title: string;
  description?: string;
  members: JuryMember[];
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function getImageUrl(value: unknown): string {
  if (typeof value === 'string' && value.trim()) return value.trim();
  if (!isRecord(value)) return '';

  return (
    getString(value.url) ||
    getString(value.src) ||
    getString(value.image) ||
    getString(value.avatar) ||
    getString(value.thumbnail) ||
    getString(value.media) ||
    ''
  );
}

function normalizeJuryRecord(record: Record<string, unknown>): JuryMember | null {
  const name =
    getString(record.name) ||
    getString(record.title) ||
    getString(record.author) ||
    getString(record.heading) ||
    getString(record.label);

  if (!name) return null;

  return {
    name,
    designation:
      getString(record.designation) ||
      getString(record.role) ||
      getString(record.position) ||
      getString(record.subtitle) ||
      undefined,

    company:
      getString(record.company) ||
      getString(record.organization) ||
      getString(record.companyName) ||
      getString(record.affiliation) ||
      undefined,

    image:
      getImageUrl(record.avatar ?? record.image ?? record.photo ?? record.file ?? record.media) ||
      undefined,
  };
}

function collectJuryMembers(
  value: unknown,
  seen: Set<string>,
  results: JuryMember[] = [],
): JuryMember[] {
  if (Array.isArray(value)) {
    value.forEach((item) => collectJuryMembers(item, seen, results));
    return results;
  }

  if (!isRecord(value)) return results;

  const member = normalizeJuryRecord(value);

  if (member) {
    const key = `${member.name}|${member.designation || ''}|${member.company || ''}`;

    if (!seen.has(key)) {
      seen.add(key);
      results.push(member);
    }
  }

  Object.values(value).forEach((child) => collectJuryMembers(child, seen, results));

  return results;
}

function getGroupTitle(block: WebsitePageContentBlock): string {
  if (isRecord(block.data)) {
    return (
      getString(block.data.title) ||
      getString(block.data.heading) ||
      getString(block.data.sectionTitle) ||
      getString(block.data.label) ||
      getString(block.data.groupTitle) ||
      ''
    );
  }

  return getString(block.type) || 'Jury Members';
}

function getGroupDescription(block: WebsitePageContentBlock): string {
  if (!isRecord(block.data)) return '';

  return (
    getString(block.data.description) ||
    getString(block.data.subtitle) ||
    getString(block.data.tagline) ||
    getString(block.data.summary) ||
    ''
  );
}

function buildJuryGroups(page: WebsitePage): JuryGroup[] {
  const blocks: WebsitePageContentBlock[] = Array.isArray(page.sections)
    ? page.sections
    : Array.isArray(page.content?.blocks)
      ? page.content.blocks
      : [];

  const groups = blocks
    .map((block): JuryGroup | null => {
      const members = collectJuryMembers(block.data ?? block, new Set());

      if (!members.length) return null;

      return {
        title: getGroupTitle(block) || 'Jury Members',
        description: getGroupDescription(block) || undefined,
        members,
      };
    })
    .filter((group): group is JuryGroup => group !== null);

  if (groups.length > 0) return groups;

  const fallbackMembers = collectJuryMembers(page, new Set());

  if (fallbackMembers.length > 0) {
    return [
      {
        title: page.title || 'Jury Members',
        description: getString(page.shortDescription) || undefined,
        members: fallbackMembers,
      },
    ];
  }

  return [];
}

function JuryMemberImage({ src, alt }: { src?: string; alt: string }) {
  const fallbackImage = '/assets/team/Anoop-Mathur.png';

  const [imageSrc, setImageSrc] = useState(src || fallbackImage);

  useEffect(() => {
    setImageSrc(src || fallbackImage);
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={420}
      height={480}
      className="jury-image"
      unoptimized={imageSrc.startsWith('http')}
      priority
      sizes="(max-width:600px)100vw,(max-width:1024px)50vw,33vw"
      onError={() => {
        if (imageSrc !== fallbackImage) {
          setImageSrc(fallbackImage);
        }
      }}
    />
  );
}

export default function JuryPage() {
  const [page, setPage] = useState<WebsitePage | null>(null);
  const [juryGroups, setJuryGroups] = useState<JuryGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadPage() {
      try {
        // Change the slug if your CMS uses a different one.
        const response = await fetchWebsitePageBySlug('jury');

        if (!response.success) {
          throw new Error(response.message || 'Unable to load jury page');
        }

        if (!active) return;

        setPage(response.data);
        setJuryGroups(buildJuryGroups(response.data));
      } catch (err) {
        if (!active) return;

        setError(err instanceof Error ? err.message : 'Unable to load jury page');
      } finally {
        if (active) setLoading(false);
      }
    }

    loadPage();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <main className="jury-page">
        <section className="jury-section">
          <div className="jury-container">
            <p>Loading jury page...</p>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="jury-page">
        <section className="jury-section">
          <div className="jury-container">
            <p className="text-red-600">{error}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="jury-page">
      <section className="jury-section">
        <div className="jury-container">
          <header className="jury-heading">
            <span className="jury-label">{page?.title || 'LeaderNext 2026'}</span>

            {/* <h1 className="jury-title">
              <span>{page?.title || 'Meet Our Distinguished Jury Members'}</span>
            </h1> */}

            {page?.shortDescription ? <p>{page.shortDescription}</p> : null}
          </header>

          {juryGroups.length > 0 ? (
            juryGroups.map((group) => (
              <section className="jury-group" key={group.title}>
                <div className="jury-grid">
                  {group.members.map((member, index) => {
                    // const imageUrl = member.image || '/assets/jury/default.png';

                    // const remote = imageUrl.startsWith('http');

                    return (
                      <article className="jury-card" key={`${group.title}-${member.name}`}>
                        <div className="jury-card-number">{String(index + 1).padStart(2, '0')}</div>

                        <div className="jury-image-wrapper">
                          <JuryMemberImage src={member.image} alt={member.name} />
                        </div>

                        <div className="jury-card-content">
                          <h2>{member.name}</h2>

                          {member.designation && (
                            <p className="jury-designation">{member.designation}</p>
                          )}

                          {member.company && <p className="jury-company">{member.company}</p>}

                          <div className="jury-card-line" />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))
          ) : (
            <p>No jury members found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
