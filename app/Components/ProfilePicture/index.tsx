import Image from "next/image";
import { motion } from "motion/react";

interface IProfilePictureProps {
  img: string;
}

const ProfilePicture: React.FunctionComponent<IProfilePictureProps> = ({
  img,
}) => {
  return (
    <motion.div
      className=" w-[20%] lg:w-[100%] border overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        alt="profile"
        src={img}
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
};

export default ProfilePicture;
