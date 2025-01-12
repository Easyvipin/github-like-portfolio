import Image from "next/image";

interface IProfilePictureProps {}

const ProfilePicture: React.FunctionComponent<IProfilePictureProps> = (
  props
) => {
  return (
    <div className=" w-[20%] md:w-[100%] border overflow-hidden rounded-full">
      <Image
        alt="profile"
        src="https://avatar.iran.liara.run/public/48"
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ProfilePicture;
