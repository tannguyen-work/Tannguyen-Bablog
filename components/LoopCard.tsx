import { site } from "@/content/site";

/**
 * Card "vòng lặp" hiển thị bên phải hero — dạng code terminal,
 * chạy đúng tinh thần câu tagline của bạn (không dùng hình robot).
 */
export default function LoopCard() {
  const words = site.tagline.split(". ").map((w) => w.replace(".", ""));
  // ["TRY", "FAIL", "LEARN", "GROW", "REPEAT"]

  return (
    <div className="loop-card" aria-hidden="true">
      <div className="loop-card-head">
        <span className="loop-dot loop-dot-r" />
        <span className="loop-dot loop-dot-y" />
        <span className="loop-dot loop-dot-g" />
        <span className="loop-card-title">~/ba.loop</span>
      </div>
      <pre className="loop-card-code">
        <code>
          <span className="c-kw">while</span>
          {" (alive) {\n"}
          {words.slice(0, 4).map((w) => (
            <span key={w}>
              {"  "}
              <span className="c-fn">{w.toLowerCase()}</span>
              {"();\n"}
            </span>
          ))}
          {"  "}
          <span className="c-kw">if</span>
          {" (progress) "}
          <span className="c-fn">repeat</span>
          {"();\n}"}
        </code>
      </pre>
      <div className="loop-card-status">
        <span className="loop-status-line">▶ running...</span>
        <span className="loop-status-ok">✓ OK</span>
      </div>
      <div className="loop-card-badge">
        <span className="loop-badge-label">ANALYST</span>
        <span className="loop-badge-state">status: LEARNING ●</span>
      </div>
    </div>
  );
}
