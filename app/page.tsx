import Image from "next/image";
import ProfilePicture from "./Components/ProfilePicture";
import Profile from "./Components/Profile";

export default function Home() {
  return (
    <div className="w-[95vw] md:w-[65vw] mx-auto py-8 md:py-10">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border-2 px-6 py-4 rounded-md">
          <Profile />
        </div>
        <div className="border-2 md:col-span-2 px-6 py-4 rounded-md">
          grid 2
        </div>
      </div>
    </div>
  );
}
