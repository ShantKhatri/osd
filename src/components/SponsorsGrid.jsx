import React from "react";

export default function SponsorsGrid({
  sponsors = [],
  columns = 4,
  maxHeight = 140
}) {
  const colsClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      6: "grid-cols-6"
    }[columns] || "grid-cols-4";

  return (
    <div className={`grid ${colsClass} gap-6 items-center`}>
      {sponsors.map((s) => (
        <div
          key={s.name}
          className="flex items-center justify-center p-4 bg-white rounded-lg transition"
        >
          <img
            src={s.logo}
            alt={s.name}
            loading="lazy"
            className="w-auto object-contain"
            style={{ maxHeight: `${maxHeight}px` }}
          />
        </div>
      ))}
    </div>
  );
}
