type HintBlockProps = {
  children: string;
};

export function HintBlock({ children }: HintBlockProps) {
  return (
    <p className="hint-block">
      <span className="hint-block__icon" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
