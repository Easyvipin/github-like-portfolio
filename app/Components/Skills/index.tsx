import Badge from "../Badge";
import { motion } from "motion/react";

interface ISkillsProps {
  data: string[];
}

const Skills: React.FunctionComponent<ISkillsProps> = ({ data }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-start mt-2">
        {data.map((eachSkill) => (
          <Badge key={eachSkill}>{eachSkill}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
