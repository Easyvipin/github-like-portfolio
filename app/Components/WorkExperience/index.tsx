import ExperienceCard, { ExperienceData } from "../ExperienceCard";

interface IWorkExperienceProps {
  experiences: ExperienceData[];
}

const WorkExperience: React.FunctionComponent<IWorkExperienceProps> = ({
  experiences,
}) => {
  return (
    <section>
      <h4 className="text-lg text-black captalize font-extrabold">
        Work Experience
      </h4>
      <div className="flex flex-col gap-5 mt-4">
        {experiences.map((eachExperience) => (
          <ExperienceCard data={eachExperience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
