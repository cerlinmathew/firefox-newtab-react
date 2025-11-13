import Searchbar from "./Searchbar";
import google from "../assets/google.jpg";
import firefox from "../assets/firefox.jpg";
import ShortcutGrid from "./ShortcutGrid";
import NewsList from "./NewsList";
import { useState } from "react";
import Sidesheet from "./Sidesheet";

// wallpapers
import window1 from "@/assets/window1.jpg";
import window2 from "@/assets/window2.jpg";
import window3 from "@/assets/window3.jpg";
import window4 from "@/assets/window4.jpg";
import window5 from "@/assets/window5.jpg";
import window6 from "@/assets/window6.jpg";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [background, setBackground] = useState(window1);

  const icons = [
    { title: "Gmail", imageUrl: "https://cdn.simpleicons.org/gmail" },
    { title: "GitHub", imageUrl: "https://cdn.simpleicons.org/github" },
    { title: "ChatGPT", imageUrl: "https://cdn.simpleicons.org/openai" },
    { title: "Figma", imageUrl: "https://cdn.simpleicons.org/figma" },
    { title: "YouTube", imageUrl: "https://cdn.simpleicons.org/youtube" },
    { title: "Google Drive", imageUrl: "https://cdn.simpleicons.org/googledrive" },
    { title: "Discord", imageUrl: "https://cdn.simpleicons.org/discord" },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed h-fit"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* TOP SECTION */}
      <div className="flex items-center gap-1 mx-6 pt-6">
        <img src={firefox} alt="Firefox" className="h-14 rounded-full" />
        <h1 className="font-bold text-white text-xl">Firefox</h1>
      </div>

      {/* SEARCH BAR */}
      <div className="flex justify-center mt-4">
        <Searchbar
          name="Google"
          iconUrl={google}
          onChangeText={(val) => setSearchText(val)}
        />
      </div>

      {/* SHORTCUT GRID */}
      <ShortcutGrid icons={icons} />

      {/* NEWS */}
      <NewsList search={searchText} />

      {/* CUSTOMIZE BUTTON */}
      <div className="fixed right-4 top-130">
        <Sidesheet setBackground={setBackground} />
      </div>
    </div>
  );
}
