import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import window1 from "@/assets/window1.jpg";
import window2 from "@/assets/window2.jpg";
import window3 from "@/assets/window3.jpg";
import window4 from "@/assets/window4.jpg";
import window5 from "@/assets/window5.jpg";
import window6 from "@/assets/window6.jpg";
import { Edit } from "lucide-react";

interface SideSheetProps {
  setBackground: (url: string) => void;
}

export default function Sidesheet({ setBackground }: SideSheetProps) {
  const wallpapers = [window1, window2, window3, window4, window5, window6];

  return (
    <Sheet>
      <SheetTrigger className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-600 flex gap-2">
         <Edit className="w-5 h-5" />Customise
      </SheetTrigger>

      <SheetContent className="w-[320px] bg-gray-900 text-white">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">Wallpapers</SheetTitle>
        </SheetHeader>

        {/* WALLPAPER GRID */}
        <div className="grid grid-cols-3 gap-2 mx-6">
          {wallpapers.map((img, index) => (
            <div
              key={index}
              className=" h-20 cursor-pointer hover:opacity-80 transition"
              onClick={() => setBackground(img)}
            >
              <img src={img} />
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
