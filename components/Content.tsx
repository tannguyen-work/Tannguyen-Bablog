import type { Block } from "@/content/posts";
import ImagePlaceholder from "./ImagePlaceholder";

/** Render inline **bold** trong text thường */
function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

/** Render nội dung bài viết từ mảng block trong content/posts.ts */
export default function Content({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article-body">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2 key={i} id={slugify(b.text)}>
                <span className="h2-hash">##</span> {b.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "p":
            return <p key={i}>{inline(b.text)}</p>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ul>
            );
          case "code":
            return (
              <pre key={i} className="code-block">
                <code>{b.text}</code>
              </pre>
            );
          case "quote":
            return (
              <blockquote key={i} className="pull-quote">
                {b.text}
              </blockquote>
            );
          case "img":
            return (
              <figure key={i} className="article-figure">
                <ImagePlaceholder label={b.label} />
                <figcaption>{b.label}</figcaption>
              </figure>
            );
        }
      })}
    </div>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
