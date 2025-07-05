
export default function Pagination({ page, total, onChange }) {
  if (total === 0) return null;

  const last = total;
  const pages = [];


  for (let p = page - 2; p <= page + 2; p++) {
    if (p >= 1 && p <= last) pages.push(p);
  }
  if (!pages.includes(1)) pages.unshift(1);
  if (!pages.includes(last)) pages.push(last);

  const display = [];
  pages.forEach((p, idx) => {
    display.push(p);
    if (idx < pages.length - 1 && pages[idx + 1] !== p + 1) {
      display.push("ellipse");
    }
  });

  return (
    <div className="pagination">
      <button
        className="page-btn"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        ‹
      </button>

      {display.map((p, i) =>
        p === "ellipse" ? (
          <span key={i} className="ellipse">
            …
          </span>
        ) : (
          <button
            key={i}
            className={`page-btn ${page === p ? "active" : ""}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        )
      )}

      <button
        className="page-btn"
        disabled={page === last}
        onClick={() => onChange(page + 1)}
      >
        ›
      </button>
    </div>
  );
}