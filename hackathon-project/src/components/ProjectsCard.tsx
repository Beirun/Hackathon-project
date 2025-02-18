const LandingCard = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) => {
  console.log(path);
  return (
    <div className="flex flex-col w-[30%]  item-center justify-evenly">
      <div style={{ backgroundImage: `url(${path})`, backgroundSize: "cover" }} className="w-100 h-75" />
      <div className="flex flex-col items-center h-50">
      <p className="text-lg font-bold text-center">{title}</p>
      <p className="text-sm text-center mt-10">{description}</p>
      </div>
    </div>
  );
};

export default LandingCard;
