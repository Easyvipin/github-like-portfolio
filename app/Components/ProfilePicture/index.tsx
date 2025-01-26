import Image from "next/image";

interface IProfilePictureProps {
  img: string;
}

const ProfilePicture: React.FunctionComponent<IProfilePictureProps> = ({
  img,
}) => {
  console.log(img);
  return (
    <div className=" w-[20%] lg:w-[100%] border overflow-hidden rounded-full">
      <Image
        alt="profile"
        src={img}
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ProfilePicture;
