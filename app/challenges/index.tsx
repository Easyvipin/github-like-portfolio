import React from "react";
import ALL_CHALLANGES from "./data";
import { VscVscode } from "react-icons/vsc";
import { RiNavigationLine } from "react-icons/ri";
import Link from "next/link";

interface IUIChallengesProps {}

const UIChallenges: React.FunctionComponent<IUIChallengesProps> = (props) => {
  return (
    <div className="flex flex-col gap-4">
      {ALL_CHALLANGES.map((eachChallenge) => {
        return (
          <div key={eachChallenge.id}>
            <Link href={eachChallenge.codeBase}>
              <VscVscode />
            </Link>
            <Link href={eachChallenge.liveUrl}>
              <RiNavigationLine />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UIChallenges;
