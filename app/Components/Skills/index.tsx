import * as React from "react";
import Badge from "../Badge";

interface ISkillsProps {}

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
  return (
    <div>
      <h1 className="text-xl text-black captalize font-extrabold">Skills</h1>
      <div className="flex flex-wrap gap-2 justify-start mt-2">
        <Badge>React</Badge>
        <Badge>Javascript</Badge>
        <Badge>Typescript</Badge>
        <Badge>Next.js</Badge>
        <Badge>Material UI</Badge>
        <Badge>Node.js</Badge>
      </div>
    </div>
  );
};

export default Skills;
