import { useEffect, useState } from "react";
import type { CopyBlock as CopyBlockType } from "../data/guide";

type CopyBlockProps = {
  block: CopyBlockType;
};

export function CopyBlock({ block }: CopyBlockProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const isCopied = status === "copied";
  const copyLabel =
    status === "copied" ? "已複製" : status === "failed" ? "複製失敗，請再試一次" : "複製";

  useEffect(() => {
    if (status === "idle") {
      return undefined;
    }

    const timeout = window.setTimeout(() => setStatus("idle"), 2200);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(block.content);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <article className="copy-block">
      <pre>{block.content}</pre>
      <div className="copy-block__copy-action">
        <button
          aria-label={copyLabel}
          className={`copy-block__button copy-block__button--${status}`}
          type="button"
          onClick={handleCopy}
        >
          <span
            aria-hidden="true"
            className={`copy-block__button-icon copy-block__button-icon--${
              isCopied ? "check" : "copy"
            }`}
          />
        </button>
        {isCopied && (
          <span aria-live="polite" className="copy-block__tooltip">
            已複製
          </span>
        )}
      </div>
    </article>
  );
}
