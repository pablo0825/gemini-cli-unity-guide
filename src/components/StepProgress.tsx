type StepProgressProps = {
  chapterEyebrow: string;
  chapterTitle: string;
  currentStepNumber: number;
  stepShortTitle: string;
  totalSteps: number;
};

export function StepProgress({
  chapterEyebrow,
  chapterTitle,
  currentStepNumber,
  stepShortTitle,
  totalSteps,
}: StepProgressProps) {
  return (
    <section className="step-progress" aria-label="課程進度">
      <div className="step-progress__meta">
        <p>
          Step {currentStepNumber} / {totalSteps} ·{" "}
          <span style={{ fontWeight: "var(--fw-semibold)", color: "var(--color-text-primary)" }}>
            {stepShortTitle}
          </span>
        </p>
        <p>
          {chapterEyebrow} · {chapterTitle}
        </p>
      </div>
<div
        className="step-progress__segments"
        style={{ gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))` }}
        aria-hidden="true"
      >
        {Array.from({ length: totalSteps }, (_, index) => (
          <span
            className={
              index < currentStepNumber
                ? "step-progress__segment is-complete"
                : "step-progress__segment"
            }
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
