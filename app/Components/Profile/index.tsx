import * as React from "react";
import ProfilePicture from "../ProfilePicture";
import Link from "next/link";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <ProfilePicture />
        <div className="block md:hidden">
          <h4 className="font-bold text-xl">Vipin Chandra</h4>
          <h6 className="font-extralight text-gray-500">UI Engineer</h6>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <div className="hidden md:block">
          <h4 className="font-bold text-2xl">Vipin Chandra</h4>
          <h6 className="font-extralight text-gray-500">UI Engineer</h6>
        </div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          voluptatibus maxime perspiciatis iusto optio ut tenetur quibusdam enim
          nobis est.
        </p>
        <button className="bg-black text-white p-2 uppercase w-full font-semibold rounded-md">
          CONTACT ME
        </button>
        <div className="border-t-2">
          <Link href={""}></Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
