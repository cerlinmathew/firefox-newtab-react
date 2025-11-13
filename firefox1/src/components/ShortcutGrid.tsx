import React from "react";

type IconItem = {
  title: string;
  imageUrl: string;
  link?: string; 
};

type ShortcutGridProps = {
  icons: IconItem[];
};

function ShortcutGrid({ icons }: ShortcutGridProps) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-8">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg">
            <img
              src={icon.imageUrl}
              alt={icon.title}
              className="h-10 w-10 object-contain"
            />
          </div>
          <p className="text-sm text-gray-300 text-8xl mt-2 hover:border-l-blue-950">{icon.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ShortcutGrid;
