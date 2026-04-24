import type { GuideChapter, GuideStep } from "../data/guide";

type GuideSidebarProps = {
  chapters: GuideChapter[];
  getChapterSteps: (chapterId: string) => GuideStep[];
  activeStepId: string;
  onSelectStep: (stepId: string) => void;
};

export function GuideSidebar({
  chapters,
  getChapterSteps,
  activeStepId,
  onSelectStep,
}: GuideSidebarProps) {
  return (
    <aside className="guide-sidebar">
      <div className="guide-sidebar__intro">
        <p className="eyebrow">Step Index</p>
        <h2>快速跳步驟</h2>
        <p>適合課後複習時直接跳到卡住的地方，不必一直按 Next。</p>
      </div>

      {chapters.map((chapter) => (
        <section className="guide-sidebar__chapter" key={chapter.id}>
          <p className="guide-sidebar__chapter-eyebrow">{chapter.eyebrow}</p>
          <h3>{chapter.title}</h3>
          <ol>
            {getChapterSteps(chapter.id).map((step) => {
              const isActive = step.id === activeStepId;

              return (
                <li key={step.id}>
                  <button
                    className={isActive ? "step-link is-active" : "step-link"}
                    type="button"
                    onClick={() => onSelectStep(step.id)}
                  >
                    <span className="step-link__title">{step.shortTitle}</span>
                    <span className="step-link__goal">{step.goal}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </aside>
  );
}
