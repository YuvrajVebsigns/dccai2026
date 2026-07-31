import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Gavel,
  MessageCircleMore,
  Network,
  ShieldCheck,
  UserRoundCheck,
  // UsersRound,
} from 'lucide-react';

const evaluationSteps = [
  {
    number: '01',
    title: 'Achievement Data Review',
    description: 'Combining data on professional achievements and career milestones till date.',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'Industry Participation',
    description:
      'Analyzing involvement in professional associations, technology forums, and industry groups.',
    icon: Network,
  },
  {
    number: '03',
    title: 'Social Media Engagement',
    description:
      'Conducting random sampling of professional social media engagement and thought leadership.',
    icon: MessageCircleMore,
  },
  {
    number: '04',
    title: 'Recent Executive Achievements',
    description:
      'Collecting inputs from executives on their key professional achievements during the last 12 months.',
    icon: ClipboardList,
  },
  {
    number: '05',
    title: 'Leadership Assessment',
    description:
      'Evaluating interpersonal skills, emotional intelligence, communication, decision-making, and leadership potential.',
    icon: UserRoundCheck,
  },
  {
    number: '06',
    title: 'Jury Interview',
    description:
      'Shortlisted senior IT and digital executives are interviewed by the panel of jurors before the winners are selected.',
    icon: Gavel,
  },
];

const eligibilityCriteria = [
  'Applicants must be residents of India at the time of submitting their application for the LeaderNext Awards 2026.',
  'Applicants should report directly to the CIO, CDO, ICT Leader, or the senior-most technology decision-maker within their organization.',
  'A minimum of 10 years of full-time professional work experience is required in the information technology or digital domain.',
  'Only one application per individual is permitted. Multiple entries submitted by the same applicant will not be considered.',
  'Applicants must currently be employed by a registered company or organization. Self-employed professionals and consultants are not eligible.',
  'Applicants must provide valid supporting documents verifying their current employment, work experience, and personal information during the application process.',
  'Written approval or formal permission from the applicant’s current employer is required to participate in the LeaderNext Awards 2026 program.',
];

// const processHighlights = [
//   {
//     icon: UsersRound,
//     title: 'Industry-Led Selection',
//     description: 'India’s leading CIOs and business leaders guide the complete process.',
//   },
//   {
//     icon: ShieldCheck,
//     title: 'Credible Evaluation',
//     description: 'Candidates are assessed through data, leadership review, and jury interviews.',
//   },
//   {
//     icon: Award,
//     title: 'Future CXO Recognition',
//     description:
//       'The platform identifies senior professionals ready to advance into C-Suite roles.',
//   },
// ];

export default function LeaderNextProcessPage() {
  return (
    <main className="ln-process-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      {/* <section className="ln-process-hero">
        <div className="ln-process-container">
          <div className="ln-process-hero-layout">
            <div className="ln-process-hero-copy">
              <span className="ln-process-label">
                <Sparkles size={15} aria-hidden="true" />
                LeaderNext 2026
              </span>

              <p className="ln-process-kicker">Process</p>

              <h1>
                Recognising the Leaders
                <span>Ready for the C-Suite</span>
              </h1>

              <p className="ln-process-hero-description">
                LeaderNext is a transformative and influential platform dedicated to honouring the
                brightest technology minds of our nation who are poised to take on CXO roles in the
                future.
              </p>
            </div>

            <div className="ln-process-hero-panel">
              <span className="ln-process-panel-number">2026</span>

              <div className="ln-process-panel-content">
                <Award size={34} aria-hidden="true" />

                <h2>Leadership Beyond Technology</h2>

                <p>
                  A selection framework designed to evaluate achievement, professional expertise,
                  industry influence, and leadership readiness.
                </p>
              </div>
            </div>
          </div>

          <div className="ln-process-highlights">
            {processHighlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <article className="ln-process-highlight" key={highlight.title}>
                  <span className="ln-process-highlight-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>

                  <div>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* =====================================================
          JURY INTRODUCTION
      ====================================================== */}

      <section className="ln-jury-section">
        <div className="ln-process-container">
          <div className="ln-jury-layout">
            <div className="ln-jury-title">
              <span className="ln-process-label">
                <Gavel size={15} aria-hidden="true" />
                Selection Leadership
              </span>

              <h2>India’s Leading CIOs and Business Leaders Lead the Selection</h2>
            </div>

            <div className="ln-jury-copy">
              <p>
                India&apos;s leading CIOs and business leaders play the lead role in the selection
                of the LeaderNext award winners. The jury members cumulatively represent rich
                leadership experience backed by technical and digital expertise.
              </p>

              <p>
                They are entrusted to define the award selection criteria, interview candidates, and
                approve the list of winners. The jury evaluates and appraises candidates based on
                their career achievements, professional expertise, and leadership potential to join
                the C-Suite.
              </p>

              <div className="ln-jury-message">
                <ShieldCheck size={24} aria-hidden="true" />

                <span>
                  The process is structured to identify accomplished technology professionals with
                  the capability and potential to become the next generation of enterprise leaders.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EVALUATION PROCESS
      ====================================================== */}

      <section className="ln-evaluation-section">
        <div className="ln-process-container">
          <div className="ln-section-heading">
            <span className="ln-process-label">
              <ClipboardList size={15} aria-hidden="true" />
              Complete Evaluation Process
            </span>

            <h2>Six Stages of Evaluation</h2>

            <p>
              Every candidate is assessed through a combination of professional data, industry
              participation, leadership capabilities, and direct jury interaction.
            </p>
          </div>

          <div className="ln-evaluation-timeline">
            {evaluationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="ln-evaluation-step" key={step.number}>
                  <div className="ln-evaluation-marker">
                    <span>{step.number}</span>
                  </div>

                  <div className="ln-evaluation-card">
                    <div className="ln-evaluation-icon">
                      <Icon size={25} aria-hidden="true" />
                    </div>

                    <div className="ln-evaluation-copy">
                      <span className="ln-evaluation-stage">Stage {index + 1}</span>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="ln-final-stage">
            <div className="ln-final-stage-icon">
              <Award size={32} aria-hidden="true" />
            </div>

            <div>
              <span>Final Outcome</span>
              <h3>Winner List Prepared and Approved by the Jury</h3>

              <p>
                Following the leadership assessment and jury interviews, the panel prepares and
                approves the final list of LeaderNext 2026 winners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ELIGIBILITY CRITERIA
      ====================================================== */}

      <section className="ln-eligibility-section">
        <div className="ln-process-container">
          <div className="ln-eligibility-layout">
            <div className="ln-eligibility-summary">
              <span className="ln-process-label ln-process-label-light">
                <BriefcaseBusiness size={15} aria-hidden="true" />
                Eligibility Criteria
              </span>

              <h2>Who Is Eligible for LeaderNext 2026?</h2>

              <p>
                Applicants must meet the required residency, reporting, experience, employment, and
                documentation conditions.
              </p>

              <div className="ln-experience-card">
                <strong>10+</strong>

                <div>
                  <span>Minimum Experience</span>
                  <p>Years of full-time professional work experience required.</p>
                </div>
              </div>
            </div>

            <div className="ln-eligibility-grid">
              {eligibilityCriteria.map((criterion, index) => (
                <article className="ln-eligibility-card" key={criterion}>
                  <span className="ln-eligibility-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="ln-eligibility-check">
                    <CheckCircle2 size={22} aria-hidden="true" />
                  </span>

                  <p>{criterion}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
