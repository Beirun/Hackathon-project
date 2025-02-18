
const EventCard = ({title, organization, path}:{title:string, organization:string, path:string}) => {
  return (
    <div className="flex w-70 h-100 bg-white justify-between items-center pb-5 flex-col rounded-lg shadow-lg shadow-[#000]/30">
        <div style={{ backgroundImage: `url(${path})`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full h-60 rounded-t-lg" onClick={() => {}} />
        <div className=" w-full h-30 flex flex-col justify-between py-2 px-5">
            <p className="font-semibold text-lg">{title}</p>
            <p>{organization}</p>
        </div>
    </div>
  )
}

export default EventCard