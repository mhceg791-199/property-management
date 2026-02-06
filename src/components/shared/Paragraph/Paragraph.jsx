function Paragraph({ p, text = "justify" }) {
  if (Array.isArray(p)) {
    return (
      <div className="space-y-2">
        {p.map((para, index) => (
          <p
            key={index}
            className={`mt-2 sm:text-base paragraph 'text-'${text}`}
          >
            {para}
          </p>
        ))}
      </div>
    );
  }

  return <p className={`mt-2 sm:text-base paragraph 'text-'${text}`}>{p}</p>;
}

export default Paragraph;
