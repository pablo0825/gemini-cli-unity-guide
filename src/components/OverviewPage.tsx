import type { GuideChapter } from "../data/guide";

type OverviewPageProps = {
  title: string;
  subtitle: string;
  audience: string;
  prerequisites: string[];
  outcomes: string[];
  chapters: GuideChapter[];
  onStart: () => void;
  onJumpToChapter: (stepId: string) => void;
};

export function OverviewPage({
  title,
  subtitle,
  audience,
  prerequisites,
  outcomes,
  chapters,
  onStart,
  onJumpToChapter,
}: OverviewPageProps) {
  return (
    <main className="overview-page">
      <section className="hero-card">
        <div className="hero-card__text">
          <p className="eyebrow">Classroom Guide</p>
          <h1>{title}</h1>
          <p className="hero-card__subtitle">{subtitle}</p>
          <p className="hero-card__audience">
            適合對象：<strong>{audience}</strong>
          </p>
          <div className="hero-card__actions">
            <button className="nav-button nav-button--primary" type="button" onClick={onStart}>
              開始學習
            </button>
          </div>
        </div>
        <div className="hero-card__note">
          <div className="hero-note">
            <p className="eyebrow">這份網站怎麼用</p>
            <ul>
              <li>上課時看 PPT，課後用網站複習步驟</li>
              <li>每一步都會標出操作目標與完成檢查</li>
              <li>指令與 prompt 可一鍵複製</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="overview-grid">
        <article className="overview-card">
          <p className="eyebrow">Learning Outcomes</p>
          <h2>學完後你會做到</h2>
          <ul>
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="overview-card">
          <p className="eyebrow">Prerequisites</p>
          <h2>先準備這些</h2>
          <ul>
            {prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="chapter-section">
        <div className="section-heading">
          <p className="eyebrow">Chapter Entry</p>
          <h2>章節快速入口</h2>
          <p>如果你只是想回頭找某一段，直接從章節起點進去就可以。</p>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <article className="chapter-card" key={chapter.id}>
              <p className="chapter-card__eyebrow">{chapter.eyebrow}</p>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
              <button
                className="chapter-card__button"
                type="button"
                onClick={() => onJumpToChapter(chapter.startStepId)}
              >
                從這章開始
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
