
const PartnersCard = ({title, description, path}:{title:string, description:string, path:string}) => {
  return (
    <div className="flex w-full h-[30%] justify-between items-center p-10">
        <div style={{ backgroundImage: `url(${path})`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-45 h-45"></div>
        <div className="flex flex-col justify-center w-[80%] h-full">
            <p className="text-2xl font-semibold mb-10">{title}</p>
            <p className="text-md">{description}</p>
        </div>

    </div>
  )
}

export default PartnersCard