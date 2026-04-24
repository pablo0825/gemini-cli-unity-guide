import type { GuideChapter, GuideStep } from "../data/guide";
import { CopyBlock } from "./CopyBlock";

type GuideStepViewProps = {
  chapter: GuideChapter;
  step: GuideStep;
  currentStepNumber: number;
  totalSteps: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export function GuideStepView({
  chapter,
  step,
  currentStepNumber,
  totalSteps,
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}: GuideStepViewProps) {
  return (
    <section className="guide-step-view">
      <header className="guide-step-view__header">
        <div>
          <p className="eyebrow">{chapter.eyebrow}</p>
          <h1>{step.title}</h1>
          <p className="guide-step-view__goal">{step.goal}</p>
        </div>
        <div className="step-progress-badge">Step {currentStepNumber} / {totalSteps}</div>
      </header>

      <div className="guide-step-view__content">
        <article className="step-card step-card--text">
          <div className="step-card__section">
            <h2>這一步要完成什麼？</h2>
            {step.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="step-card__section">
            <h3>完成檢查</h3>
            <ul className="checklist">
              {step.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {step.tip ? (
            <div className="teacher-tip">
              <strong>Tips</strong>
              <p>{step.tip}</p>
            </div>
          ) : null}
        </article>

        <article className="step-card step-card--image">
          <img src={step.image.src} alt={step.image.alt} />
        </article>
      </div>

      {step.copyBlocks.length > 0 ? (
        <section className="copy-blocks">
          <div className="copy-blocks__header">
            <p className="eyebrow">Copy Ready</p>
            <h2>這一步可以直接複製</h2>
          </div>
          <div className="copy-blocks__grid">
            {step.copyBlocks.map((block) => (
              <CopyBlock block={block} key={block.id} />
            ))}
          </div>
        </section>
      ) : null}

      <footer className="guide-step-view__footer">
        <button className="nav-button" type="button" disabled={!hasPrevious} onClick={onPrevious}>
          ← Previous
        </button>
        <button className="nav-button nav-button--primary" type="button" disabled={!hasNext} onClick={onNext}>
          Next →
        </button>
      </footer>
    </section>
  );
}
