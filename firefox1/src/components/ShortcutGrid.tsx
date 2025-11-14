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
    <div className="m-6  flex flex-wrap justify-center gap-8">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg">
            <a
            href={icon.link}
            target="_blank"            
          >
            <img
              src={icon.imageUrl}
              alt={icon.title}
              className="h-10 w-10 object-contain"
            />
          </a>
          </div>
          <p className="text-sm text-gray-300 font-bold mt-2 hover:text-gray-400">{icon.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ShortcutGrid;
