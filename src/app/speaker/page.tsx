'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  fetchWebsitePageBySlug,
  type WebsitePage,
  type WebsitePageContentBlock,
} from '@/services/pages.service';

type Speaker = {
  name: string;
  designation?: string;
  company?: string;
  image?: string;
};

type SpeakerGroup = {
  title: string;
  description?: string;
  speakers: Speaker[];
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

function normalizeSpeakerRecord(record: Record<string, unknown>): Speaker | null {
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

function collectSpeakers(value: unknown, seen: Set<string>, results: Speaker[] = []): Speaker[] {
  if (Array.isArray(value)) {
    value.forEach((item) => collectSpeakers(item, seen, results));
    return results;
  }

  if (!isRecord(value)) return results;

  const speaker = normalizeSpeakerRecord(value);
  if (speaker) {
    const key = `${speaker.name}|${speaker.designation || ''}|${speaker.company || ''}`;
    if (!seen.has(key)) {
      seen.add(key);
      results.push(speaker);
    }
  }

  Object.values(value).forEach((child) => collectSpeakers(child, seen, results));
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

  return getString(block.type) || 'Speakers';
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

function buildSpeakerGroups(page: WebsitePage): SpeakerGroup[] {
  const blocks: WebsitePageContentBlock[] = Array.isArray(page.sections)
    ? page.sections
    : Array.isArray(page.content?.blocks)
      ? page.content.blocks
      : [];

  const groups = blocks
    .map((block): SpeakerGroup | null => {
      const speakers = collectSpeakers(block.data ?? block, new Set());
      if (!speakers.length) return null;

      return {
        title: getGroupTitle(block) || 'Speakers',
        description: getGroupDescription(block) || undefined,
        speakers,
      };
    })
    .filter((group): group is SpeakerGroup => group !== null);

  if (groups.length > 0) return groups;

  const fallbackSpeakers = collectSpeakers(page, new Set());
  if (fallbackSpeakers.length > 0) {
    return [
      {
        title: page?.title || 'Speakers',
        description: getString(page?.shortDescription) || undefined,
        speakers: fallbackSpeakers,
      },
    ];
  }

  return [];
}

export default function SpeakersPage() {
  const [page, setPage] = useState<WebsitePage | null>(null);
  const [speakerGroups, setSpeakerGroups] = useState<SpeakerGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   let active = true;

  //   async function loadPage() {
  //     try {
  //       const response = await fetchWebsitePageBySlug('speaker');

  //       if (!response.success) {
  //         throw new Error(response.message || 'Unable to load speaker page');
  //       }

  //       if (!active) return;

  //       setPage(response.data);
  //       setSpeakerGroups(buildSpeakerGroups(response.data));
  //     } catch (err) {
  //       if (!active) return;
  //       setError(err instanceof Error ? err.message : 'Unable to load speaker page');
  //     } finally {
  //       if (active) setLoading(false);
  //     }
  //   }

  //   loadPage();

  //   return () => {
  //     active = false;
  //   };
  // }, []);

  useEffect(() => {
    let active = true;

    async function loadPages() {
      try {
        const responses = await Promise.all([
          fetchWebsitePageBySlug('keynote-speakers'),
          fetchWebsitePageBySlug('speaker'),
          fetchWebsitePageBySlug('partner-speakers'),
        ]);

        if (!active) return;

        const validPages: WebsitePage[] = responses
          .filter(
            (
              response,
            ): response is typeof response & {
              success: true;
              data: WebsitePage;
            } => response.success && !!response.data,
          )
          .map((response) => response.data);

        if (!validPages.length) {
          throw new Error('Unable to load speaker pages');
        }

        setPage(validPages[0]!);

        // const mergedGroups: SpeakerGroup[] = [];

        // validPages.forEach((pageData) => {
        //   const groups = buildSpeakerGroups(pageData);

        //   groups.forEach((group) => {
        //     mergedGroups.push({
        //       title: pageData.title || group.title,
        //       description: pageData.shortDescription || group.description,
        //       speakers: group.speakers,
        //     });
        //   });
        // });

        // setSpeakerGroups(mergedGroups);

        const keynotePage = validPages.find((page) => page.slug === 'keynote-speakers');

        const speakerPage = validPages.find((page) => page.slug === 'speaker');

        const partnerPage = validPages.find((page) => page.slug === 'partner-speakers');

        const orderedGroups: SpeakerGroup[] = [];

        [keynotePage, speakerPage, partnerPage].forEach((pageData) => {
          if (!pageData) return;

          const groups = buildSpeakerGroups(pageData);

          groups.forEach((group) => {
            orderedGroups.push({
              title: pageData.title || group.title,
              description: pageData.shortDescription || group.description,
              speakers: group.speakers,
            });
          });
        });

        setSpeakerGroups(orderedGroups);
      } catch (err) {
        if (!active) return;

        setError(err instanceof Error ? err.message : 'Unable to load speaker pages');
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPages();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <main className="speakers-page">
        <section className="speakers-section">
          <div className="speakers-container">
            <p>Loading speaker page...</p>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="speakers-page">
        <section className="speakers-section">
          <div className="speakers-container">
            <p className="text-red-600">{error}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="speakers-page">
      <section className="speakers-section">
        <div className="speakers-container">
          <header className="speakers-heading">
            {/* <h1 className="speakers-title">
              <span>{page?.title || 'Speakers'}</span>
            </h1> */}

            <h1 className="speakers-title">
              <span>Speakers</span>
            </h1>
            {getString(page?.shortDescription) ? <p>{page?.shortDescription}</p> : null}
          </header>

          {speakerGroups.length > 0 ? (
            speakerGroups.map((group, groupIndex) => (
              <section className="speaker-group" key={`${group.title}-${groupIndex}`}>
                <div className="speaker-group-heading">
                  <div>
                    <span className="speaker-group-number">
                      {String(groupIndex + 1).padStart(2, '0')}
                    </span>
                    <h2>{group.title}</h2>
                  </div>
                  {group.description ? <p>{group.description}</p> : null}
                </div>

                <div className="speaker-grid">
                  {group.speakers.map((speaker) => {
                    const imageUrl = speaker.image || '/assets/team/1.jpg';
                    const remote = imageUrl.startsWith('http');

                    return (
                      <article className="speaker-card" key={`${group.title}-${speaker.name}`}>
                        <div className="speaker-image-wrapper">
                          <Image
                            src={imageUrl}
                            alt={speaker.name}
                            width={420}
                            height={480}
                            className="speaker-image"
                            unoptimized={remote}
                            priority={groupIndex === 0}
                            loading={groupIndex === 0 ? 'eager' : 'lazy'}
                            sizes="(max-width:600px)100vw,(max-width:1024px)50vw,33vw"
                          />
                        </div>

                        <div className="speaker-card-content">
                          <h3>{speaker.name}</h3>
                          {speaker.designation ? (
                            <p className="speaker-designation">{speaker.designation}</p>
                          ) : null}
                          {speaker.company ? (
                            <p className="speaker-company">{speaker.company}</p>
                          ) : null}
                          <span className="speaker-card-line" />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))
          ) : (
            <section className="speaker-group">
              <p>No speaker sections were found.</p>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
