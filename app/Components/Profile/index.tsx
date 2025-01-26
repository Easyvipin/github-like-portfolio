"use client";

import React from "react";
import ProfilePicture from "../ProfilePicture";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

type socials = {
  type: string;
  url: string;
  handle: string;
};

interface IProfileProps {
  profileImg: string;
  bio: string;
  position: string;
  socials: socials[];
}

const Profile: React.FunctionComponent<IProfileProps> = ({
  profileImg,
  bio,
  position,
  socials,
}) => {
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <ProfilePicture img={profileImg} />
        <div className="block lg:hidden">
          <h4 className="font-bold text-xl">Vipin Chandra</h4>
          <h6 className="font-extralight text-gray-500">{position}</h6>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <div className="hidden lg:block">
          <h4 className="font-bold text-2xl">Vipin Chandra</h4>
          <h6 className="font-extralight text-gray-500">{position}</h6>
        </div>
        <p className="text-gray-500">{bio}</p>
        <a
          href="mailto:vipinchandra555@gmail.com"
          className="bg-black text-white p-2 uppercase w-full font-semibold rounded-md text-center hover:bg-gray-900"
        >
          CONTACT ME
        </a>
        <div className="border-t-2 py-2 flex flex-col gap-2">
          {socials.map((eachSocial) => (
            <Link
              href={eachSocial.url}
              target="_blank"
              className="flex items-center gap-1"
              key={eachSocial.url}
            >
              {eachSocial.type === "github" && <IoLogoGithub />}
              {eachSocial.type === "linkedin" && <FaLinkedin />}
              {eachSocial.type === "twitter" && <RiTwitterXLine />}
              <span className="text-gray-500 text-sm">
                /{eachSocial.handle}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
