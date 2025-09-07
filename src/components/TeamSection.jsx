import React from "react";

function PersonCard({ person }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
      <img
        src={person.image}
        alt={person.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold">{person.name}</div>
        <div className="text-sm text-gray-600">{person.role}</div>
      </div>
    </div>
  );
}

export default function TeamSection({ sections = {} }) {
  return (
    <div className="space-y-12">
      {Object.entries(sections).map(([key, list]) => (
        <section key={key} className="">
          <h3 className="text-2xl font-bold mb-6 capitalize">
            {key.replace("-", " ")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
