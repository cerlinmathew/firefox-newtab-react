import React from "react";

type NewsItem = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

type NewsCardProps = {
  news: NewsItem[];
};

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <div >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 px-6">

      {news.length === 0 ? (
        <p>Loading...</p>
      ) : (
        news.map((item, index) => (
          <div key={index} className="bg-[#1e1e2f] p-6 text-white rounded-2xl hover:-translate-y-2 ">
            
            {item.urlToImage && (
              <img className="w-full h-48 object-cover rounded-2xl"
                src={item.urlToImage}
                alt={item.title}
              />
            )}
        <div className="p-4 flex flex-col justify-start min-h-[150px]">
            <a href={item.url} target="_blank" className="no-underline hover:no-underline border-none">
              <h3>{item.title}</h3>
            </a>
            </div>
          </div>
        ))
      )}</div>
    </div>
  );
}
