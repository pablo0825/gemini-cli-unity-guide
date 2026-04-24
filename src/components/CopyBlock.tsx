import { useEffect, useState } from "react";
import type { CopyBlock as CopyBlockType } from "../data/guide";

type CopyBlockProps = {
  block: CopyBlockType;
};

export function CopyBlock({ block }: CopyBlockProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

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
      <div className="copy-block__header">
        <div>
          <p className="copy-block__type">{block.type === "command" ? "Command" : "Prompt"}</p>
          <h4>{block.label}</h4>
        </div>
        <button className="copy-block__button" type="button" onClick={handleCopy}>
          {status === "copied" ? "已複製" : status === "failed" ? "請手動複製" : "複製"}
        </button>
      </div>
      <pre>{block.content}</pre>
      <p className="copy-block__caption">{block.caption}</p>
    </article>
  );
}
