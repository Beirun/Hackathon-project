
const EventCard = ({title, organization}:{title:string, organization:string}) => {
  return (
    <div className="flex w-40 h-60 bg-amber-200 justify-between items-center p-10">
        <div />
        <div>
            <p>{title}</p>
            <p>{organization}</p>
        </div>
    </div>
  )
}

export default EventCard