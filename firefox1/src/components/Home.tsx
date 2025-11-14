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
 
  const [searchText, setSearchText] = useState(""); //news filter : used by NewsList.

  const [background, setBackground] = useState(window1); //change background : updated by Sidesheet

  const icons = [
    { title: "Gmail", imageUrl: "https://cdn.simpleicons.org/gmail", link: "https://mail.google.com/mail/u/0/#inbox"},
    { title: "GitHub", imageUrl: "https://cdn.simpleicons.org/github", link: "https://github.com/LitoMore/simple-icons-cdn" },
    { title: "ChatGPT", imageUrl: "https://cdn.simpleicons.org/openai", link: "https://chatgpt.com/" },
    { title: "Figma", imageUrl: "https://cdn.simpleicons.org/figma", link: "https://www.figma.com/design/OkDgI7K5WS0xj9T5Mj0dBe/Simple-To-Do-list?node-id=0-1&p=f&t=MW1RUJy5PelbcegX-0" },
    { title: "YouTube", imageUrl: "https://cdn.simpleicons.org/youtube", link: "https://www.youtube.com/" },
    { title: "Google Drive", imageUrl: "https://cdn.simpleicons.org/googledrive", link: "https://drive.google.com/drive/u/0/home" },
    { title: "Discord", imageUrl: "https://cdn.simpleicons.org/discord", link: "https://discord.com/" },
  ];

  return (

    //wallpaper update
    <div
      className="bg-cover bg-fixed "
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* firefox icon */}
      <div className="flex items-center gap-1 p-6">
        <img src={firefox} alt="Firefox" className="h-14 rounded-full" />
        <h1 className="font-bold text-white text-xl">Firefox</h1>
      </div>

      {/* search bar */}
      <div className="flex justify-center mt-4">
        <Searchbar
          name="Google"
          iconUrl={google}
          onChangeText={(val) => setSearchText(val)}
        />
      </div>

      {/* short icons */}
      <ShortcutGrid icons={icons} />

     
      <NewsList search={searchText} />

      {/* customise button */}
      <div className="fixed bottom-6 right-6">
        <Sidesheet setBackground={setBackground} />
      </div>
    </div>
  );
}
