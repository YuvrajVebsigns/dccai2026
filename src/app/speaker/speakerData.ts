export type SpeakerCard = {
  slug: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  groupTitle: string;
};

type SpeakerGroup = {
  title: string;
  description: string;
  speakers: Array<Omit<SpeakerCard, 'groupTitle'>>;
};

const speakerGroups: SpeakerGroup[] = [
  {
    title: 'Keynote Speakers',
    description:
      'Visionary leaders delivering strategic perspectives on enterprise technology, innovation, AI, cloud, and digital transformation.',
    speakers: [
      {
        slug: 'anoop-mathur',
        name: 'Anoop Mathur',
        designation: 'Founder',
        company: 'CORE Media',
        image: '/assets/speaker/Anoop-Mathur.png',
      },
      {
        slug: 'saurabh-mukherjea',
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
        slug: 'ananth-subramanian',
        name: 'Ananth Subramanian',
        designation: 'Sr. EVP & Head IT',
        company: 'Kotak Mahindra AMC',
        image: '/assets/speaker/Ananth-Subramanian-2.png',
      },
      {
        slug: 'dr-nitin-paranjape',
        name: 'Dr. Nitin Paranjape',
        designation: 'Productivity Maverick',
        company: '',
        image: '/assets/speaker/Dr.-Nitin-Paranjape.png',
      },
      {
        slug: 'dr-pradeep-pendse',
        name: 'Dr. Pradeep Pendse',
        designation: 'Professor Dean General Mgmt & CTO',
        company: 'L.N. Welingkar Institute of Management Development and Research',
        image: '/assets/speaker/Dr.-Pradeep-Pendse.png',
      },
      {
        slug: 'jagat-ram',
        name: 'Jagat Ram',
        designation: 'Head Datacenter Operation & Delivery',
        company: 'Larsen & Toubro',
        image: '/assets/speaker/Jagat-Ram.png',
      },
      {
        slug: 'pavan-agrawal',
        name: 'Pavan Agrawal',
        designation: 'CTO',
        company: 'Yes Bank',
        image: '/assets/speaker/Pavan-Agrawal.png',
      },
      {
        slug: 'rahul-chopra',
        name: 'Rahul Chopra',
        designation: 'Sr. Director & Head Digital & Innovation CoE',
        company: 'PNB MetLife India Insurance',
        image: '/assets/speaker/Rahul-Chopra.png',
      },
      {
        slug: 'ramesh-narayanaswamy',
        name: 'Ramesh Narayanaswamy',
        designation: 'Group President - Digital & Data Intelligence',
        company: 'Hinduja Group',
        image: '/assets/speaker/Ramesh-Narayananswamy.png',
      },
      {
        slug: 'rupesh-mehta',
        name: 'Rupesh Mehta',
        designation: 'Sr. VP IT',
        company: 'Tata AIA Life Insurance',
        image: '/assets/speaker/Rupesh-Mehta.png',
      },
      {
        slug: 'udit-pahwa',
        name: 'Udit Pahwa',
        designation: 'CIO',
        company: 'Blue Star',
        image: '/assets/speaker/Udit-pahwa.png',
      },
      {
        slug: 'vikas-gadre',
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
        slug: 'divya-kumar-ramesh-jotwani',
        name: 'Divya Kumar Ramesh Jotwani',
        designation: 'Senior Pre-Sales Solution Architect',
        company: 'Lenovo',
        image: '/assets/speaker/Divya-Kumar-Ramesh-Jotwani.png',
      },
      {
        slug: 'kunal-mathuria',
        name: 'Kunal Mathuria',
        designation: 'Head of Sales, Data Analytics & ML Services',
        company: 'Google Cloud India',
        image: '/assets/speaker/Kunal-Mathuria.png',
      },
      {
        slug: 'lalit-chowdhary',
        name: 'Lalit Chowdhary',
        designation: 'Group Chief Technology & Innovation Officer',
        company: 'Lightstorm',
        image: '/assets/speaker/Lalit-Chowdhary.png',
      },
      {
        slug: 'mayank-chaturvedi',
        name: 'Mayank Chaturvedi',
        designation: 'Director - Hybrid Cloud Solutions',
        company: 'Hewlett Packard Enterprise, India',
        image: '/assets/speaker/Mayank-Chaturvedi.png',
      },
      {
        slug: 'omkar-sawant',
        name: 'Omkar Sawant',
        designation: 'Customer Engineer, Data Analytics',
        company: 'Google Cloud',
        image: '/assets/speaker/Omkar-S.png',
      },
      {
        slug: 'p-srinivasarao',
        name: 'P Srinivasarao',
        designation: 'AVP Strategic Products',
        company: 'Tata Communications',
        image: '/assets/speaker/P-Srinivasarao.png',
      },
      {
        slug: 'rohan-padhi',
        name: 'Rohan Padhi',
        designation: 'Partner',
        company: 'KPMG',
        image: '/assets/speaker/Rohan-Padhi.png',
      },
      {
        slug: 'uday-chaddha',
        name: 'Uday Chaddha',
        designation: 'Sr. Sales Engineer',
        company: 'Rubrik',
        image: '/assets/speaker/Uday-Chaddha.png',
      },
      {
        slug: 'vinay-hp',
        name: 'Vinay HP',
        designation: 'Director – IT Business',
        company: 'Rittal India',
        image: '/assets/speaker/Vinay-H-P.png',
      },
    ],
  },
];

export const speakerCards: SpeakerCard[] = speakerGroups.flatMap((group) =>
  group.speakers.map((speaker) => ({ ...speaker, groupTitle: group.title })),
);

export function getSpeakerBySlug(slug: string) {
  return speakerCards.find((speaker) => speaker.slug === slug) ?? null;
}

export function getAllSpeakerSlugs() {
  return speakerCards.map((speaker) => speaker.slug);
}

export { speakerGroups };
