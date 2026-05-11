import type { InstructionBlock } from "../data/guide";

type StepChecklistPanelProps = {
  instructions: InstructionBlock[];
  remainingSteps: number;
};

export function StepChecklistPanel({ instructions, remainingSteps }: StepChecklistPanelProps) {
  return (
    <aside className="step-check-panel" aria-label="本頁檢查">
      <p className="eyebrow">Step Check</p>
      <h2>本頁檢查</h2>
      <ol>
        {instructions.map((instruction) => (
          <li key={instruction.id}>
            <span className="step-check-panel__icon" aria-hidden="true" />
            <span>{instruction.title}</span>
          </li>
        ))}
      </ol>
      <p className="step-check-panel__remaining">
        {remainingSteps > 0 ? `完成後還有 ${remainingSteps} 步` : "完成後回到總覽"}
      </p>
    </aside>
  );
}
