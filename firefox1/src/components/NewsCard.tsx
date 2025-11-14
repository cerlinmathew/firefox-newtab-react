import React from "react";
import noimage from "@/assets/noimage.jpg";

//structure of a single news article
type NewsItem = {
  title: string;
  url: string;
  urlToImage: string;
};

type NewsCardProps = {
  news: NewsItem[];
};

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <div >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 p-7">

      {news.length === 0 ? (
        <p>Loading...</p>
      ) : (
        news.map((item, index) => (
          <div key={index} className="bg-[#1e1e2f] p-6 text-white rounded-2xl hover:-translate-y-2 ">
            
            {(
              <img className="w-full h-48 object-cover rounded-2xl"
                  src={item.urlToImage ? item.urlToImage : noimage}
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
