import ExperienceCard from "../ExperienceCard";

interface IWorkExperienceProps {}

const WorkExperience: React.FunctionComponent<IWorkExperienceProps> = (
  props
) => {
  return (
    <section>
      <h4 className="text-lg text-black captalize font-extrabold">
        Work Experience
      </h4>
      <div className="flex flex-col gap-5 mt-4">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  );
};

export default WorkExperience;
