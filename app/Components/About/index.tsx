interface IAboutProps {
  content: string;
}

const About: React.FunctionComponent<IAboutProps> = ({ content }) => {
  return (
    <div>
      <h1 className="text-xl text-black captalize font-extrabold">About Me</h1>
      <p className="text-md text-gray-500 tracking-wide mt-4">{content}</p>
    </div>
  );
};

export default About;
