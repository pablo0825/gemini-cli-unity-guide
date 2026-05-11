import type { DropdownBlock, DropdownContentItem } from "../data/guide";

type DisclosureBlockProps = {
  dropdown: DropdownBlock;
};

function renderListItem(item: DropdownContentItem, index: number) {
  if (typeof item === "string") {
    return <li key={index}>{item}</li>;
  }
  return (
    <li key={index}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {item.text}
      </a>
    </li>
  );
}

export function DisclosureBlock({ dropdown }: DisclosureBlockProps) {
  return (
    <details className="disclosure-block">
      <summary className="disclosure-block__summary">
        <img src="/icons/circle-question-mark.svg" alt="" className="disclosure-block__icon" />
        <span className="disclosure-block__title">{dropdown.title}</span>
        <img src="/icons/chevron-down.svg" alt="" className="disclosure-block__chevron disclosure-block__chevron--down" />
        <img src="/icons/chevron-up.svg" alt="" className="disclosure-block__chevron disclosure-block__chevron--up" />
      </summary>
      <div className="disclosure-block__content">
        {dropdown.codeNote && (
          <div className="disclosure-block__code-note">
            <span className="disclosure-block__code-note-label">錯誤訊息</span>
            <code>{dropdown.codeNote}</code>
          </div>
        )}
        <ol className="disclosure-block__steps">
          {dropdown.content.map((item, index) => renderListItem(item, index))}
        </ol>
      </div>
    </details>
  );
}
