import Image from "next/image";
import { RiCalendarTodoLine } from "react-icons/ri";

interface CompanyLogo {
  asset: {
    url: string;
  };
}

export interface ExperienceData {
  companyName: string;
  desc: string;
  companyLink: string;
  startDate: string; // ISO format date string
  endDate: string | null; // Null for current position
  companyLogo: CompanyLogo;
  position: string;
}

interface IExperienceCardProps {
  data: ExperienceData;
}

const ExperienceCard: React.FunctionComponent<IExperienceCardProps> = ({
  data,
}) => {
  const {
    companyName,
    desc,
    companyLink,
    startDate,
    endDate,
    companyLogo,
    position,
  } = data;

  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const formattedEndDate = endDate
    ? new Date(endDate).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";

  return (
    <div className="border rounded-md px-6 py-6">
      <div className="flex gap-4 items-center">
        <div className="border rounded-md shadow-sm w-[40px] h-[40px]">
          <Image
            src={companyLogo.asset.url}
            width={40}
            height={40}
            alt={`${companyName} Logo`}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-md font-bold leading-none">{position}</h4>
          <h6 className="text-xs font-extralight text-gray-500">
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {companyName}
            </a>
          </h6>
        </div>
      </div>
      <div className="flex gap-1 text-gray-500 items-center mt-3">
        <RiCalendarTodoLine size={"0.75em"} />
        <span className="text-xs font-light text-gray-500">
          {formattedStartDate} - {formattedEndDate}
        </span>
      </div>
      <p className="text-sm font-light mt-2 whitespace-pre-wrap">{desc}</p>
    </div>
  );
};

export default ExperienceCard;
