import Badge from "../Badge";

interface ISkillsProps {
  data: string[];
}

const Skills: React.FunctionComponent<ISkillsProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-xl text-black captalize font-extrabold">Skills</h1>
      <div className="flex flex-wrap gap-2 justify-start mt-2">
        {data.map((eachSkill) => (
          <Badge key={eachSkill}>{eachSkill}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
