import type { GuideChapter, GuideStep } from "../data/guide";
import { getInstructionCopyBlocks } from "../data/guide";
import { CopyBlock } from "./CopyBlock";
import { DisclosureBlock } from "./DisclosureBlock";
import { HintBlock } from "./HintBlock";
import { StepChecklistPanel } from "./StepChecklistPanel";
import { StepProgress } from "./StepProgress";

type GuideStepViewProps = {
  chapter: GuideChapter;
  step: GuideStep;
  currentStepNumber: number;
  totalSteps: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onComplete: () => void;
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
  onComplete,
}: GuideStepViewProps) {
  const remainingSteps = totalSteps - currentStepNumber;

  return (
    <section className="guide-step-view">
      <StepProgress
        chapterEyebrow={chapter.eyebrow}
        chapterTitle={chapter.title}
        currentStepNumber={currentStepNumber}
stepShortTitle={step.shortTitle}
        totalSteps={totalSteps}
      />

      <div className="guide-step-view__body">
        <article className="step-content">
          <header className="step-content__header">
            <p className="eyebrow">{chapter.eyebrow}</p>
            <h1>{step.title}</h1>
            <p className="guide-step-view__goal">{step.goal}</p>
          </header>

          {step.intro.length > 0 ? (
            <div className="step-content__intro">
              {step.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          <ol className="instruction-list">
            {step.instructions.map((instruction, index) => {
              const copyBlocks = getInstructionCopyBlocks(step, instruction);

              return (
                <li className="instruction-card" key={instruction.id}>
                  <div className="instruction-card__marker">{index + 1}</div>
                  <div className="instruction-card__content">
                    <h2>{instruction.title}</h2>
                    {instruction.body ? <p>{instruction.body}</p> : null}
                    {copyBlocks.length > 0 ? (
                      <div className="instruction-card__copy-blocks">
                        {copyBlocks.map((block) => (
                          <div key={block.id}>
                            <CopyBlock block={block} />
                            {block.caption ? (
                              <p className="copy-block__caption-external">{block.caption}</p>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {instruction.hint ? <HintBlock>{instruction.hint}</HintBlock> : null}
                  </div>
                </li>
              );
            })}
          </ol>

          {step.dropdown ? <DisclosureBlock dropdown={step.dropdown} /> : null}

          <footer className="guide-step-view__footer">
            {hasPrevious ? (
              <button className="nav-button" type="button" onClick={onPrevious}>
                <span
                  aria-hidden="true"
                  className="nav-button__icon nav-button__icon--chevron-left"
                />
                <span>{"\u4e0a\u4e00\u6b65"}</span>
              </button>
            ) : null}
            <button
              className="nav-button nav-button--primary"
              type="button"
              onClick={hasNext ? onNext : onComplete}
            >
              <span>{hasNext ? "\u4e0b\u4e00\u6b65" : "\u5b8c\u6210"}</span>
              {hasNext ? (
                <span
                  aria-hidden="true"
                  className="nav-button__icon nav-button__icon--chevron-right"
                />
              ) : null}
            </button>
          </footer>
        </article>

        <StepChecklistPanel instructions={step.instructions} remainingSteps={remainingSteps} />
      </div>
    </section>
  );
}
