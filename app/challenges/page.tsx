import React from "react";
import ALL_CHALLANGES from "./data";
import { VscVscode } from "react-icons/vsc";
import { RiNavigationLine } from "react-icons/ri";
import Link from "next/link";

const UIChallenges: React.FunctionComponent = () => {
  return (
    <div className="w-[95vw] md:w-[65vw] mx-auto py-8 md:py-10">
      <h4 className="text-2xl text-center font-extralight text-gray-500 mb-4">
        UI SANDBOXES
      </h4>
      <div className="flex flex-col gap-4">
        {ALL_CHALLANGES.map((eachChallenge) => {
          return (
            <div
              key={eachChallenge.id}
              className="flex justify-between items-center px-4 py-2 border shadow-md rounded-md"
            >
              <div>
                <h4>{eachChallenge.label}</h4>
              </div>
              <div className="flex gap-4">
                <Link href={eachChallenge.codeBase}>
                  <VscVscode />
                </Link>
                <Link href={eachChallenge.liveUrl}>
                  <RiNavigationLine />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UIChallenges;
