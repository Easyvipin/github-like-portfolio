import Image from "next/image";
import { RiCalendarTodoLine } from "react-icons/ri";

interface IExperienceCardProps {}

const ExperienceCard: React.FunctionComponent<IExperienceCardProps> = (
  props
) => {
  return (
    <div className="border rounded-md px-6 py-6">
      <div className="flex gap-4 items-center">
        <div className="border rounded-md shadow-sm w-[40px] h-[40px]">
          <Image
            src="https://placehold.co/40x40.jpg"
            width={40}
            height={40}
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-md font-bold leading-none">Senior Swe</h4>
          <h6 className="text-xs font-extralight text-gray-500">
            Wednesday Solution
          </h6>
        </div>
      </div>
      <div className="flex gap-1 text-gray-500 items-center mt-3">
        <RiCalendarTodoLine size={"0.75em"} />
        <span className="text-xs font-light text-gray-500">
          Oct 2024 - Nov 2024
        </span>
      </div>
      <p className="text-sm font-light mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis
        cum, ut minus non ipsam alias. Magnam officiis nobis velit repudiandae
        sunt eius ullam itaque totam! Deleniti animi suscipit voluptate
        assumenda repudiandae quia eum laboriosam. Corrupti, voluptates
        pariatur. Facilis, praesentium.
      </p>
    </div>
  );
};

export default ExperienceCard;
