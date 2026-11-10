import { useState, type ChangeEvent } from "react";
import { ArrowUpRight, Check, ImagePlus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomHero from "@/assets/roomform-hero.jpg";
import chairImage from "@/assets/roomform-chair.jpg";

const categories = ["Furniture", "Rugs", "Flooring", "Wallpaper", "Artwork"];
const roomOptions = [
  { name: "Sunlit living room", src: roomHero },
  { name: "Quiet bedroom", src: "/images/roomform-bedroom.jpg" },
];

export function RoomVisualizer() {
  const [category, setCategory] = useState(categories[0]);
  const [room, setRoom] = useState(roomOptions[0].src);
  const [customRoom, setCustomRoom] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setCustomRoom(reader.result);
        setMessage("Your room photo is ready to preview.");
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="demo-workbench" id="categories">
      <div className="demo-preview">
        <img src={customRoom ?? room} alt="Room preview" />
        <div className="demo-caption">{customRoom ? "Your room" : room === roomOptions[0].src ? "Sample room · Living" : "Sample room · Bedroom"}</div>
        <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-border bg-background/95 px-3 py-2 shadow-nav">
          <img src={chairImage} alt="Moss green accent chair" className="h-12 w-12 rounded-full object-cover" />
          <div><strong className="block text-xs">Marlow lounge chair</strong><span className="text-[11px] text-muted-foreground">Moss velvet · $890</span></div>
        </div>
      </div>
      <div className="demo-controls">
        <div>
          <p className="eyebrow">Try the roomform preview</p>
          <h2>Make it feel like yours.</h2>
          <p>Choose a category and a room. See how a considered piece can change the space.</p>
        </div>
        <div>
          <span className="control-label">01 · Choose a category</span>
          <div className="category-options mt-3">
            {categories.map((item) => (
              <Button key={item} size="sm" variant={item === category ? "default" : "outline"} className={item === category ? "active" : ""} onClick={() => setCategory(item)}>
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <span className="control-label">02 · Choose a room</span>
          <div className="mt-3 flex gap-2">
            {roomOptions.map((option) => (
              <Button key={option.name} variant={room === option.src && !customRoom ? "secondary" : "outline"} onClick={() => { setRoom(option.src); setCustomRoom(null); setMessage(""); }}>
                {option.name}
              </Button>
            ))}
          </div>
        </div>
        <label className="upload-box">
          <ImagePlus size={20} />
          <span>Or add a room photo from your device</span>
          <input type="file" accept="image/*" onChange={onUpload} aria-label="Upload a room photo" />
        </label>
        <div className="demo-product">
          <img src={chairImage} alt="Marlow lounge chair, moss velvet" />
          <div className="min-w-0 flex-1"><strong>{category === "Furniture" ? "Marlow lounge chair" : `A new look for your ${category.toLowerCase()}`}</strong><span>{category === "Furniture" ? "Moss velvet · Walnut legs" : "Explore styles in your space"}</span></div>
          <Button size="icon" variant="outline" aria-label="Reset room preview" onClick={() => { setCustomRoom(null); setRoom(roomOptions[0].src); setMessage(""); }}><RotateCcw /></Button>
        </div>
        {message && <div role="status" className="flex items-center gap-2 text-sm text-forest"><Check size={16} />{message}</div>}
        <Button asChild className="w-full"><a href="mailto:hello@roomform.example?subject=Roomform%20demo">Explore the full experience <ArrowUpRight /></a></Button>
      </div>
    </div>
  );
}