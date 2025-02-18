import EventsSidebar from '../components/EventsSidebar'
import DashboardNavbar from '../components/DashboardNavbar'
import EventCard from '../components/EventCard'
const Events = () => {
  return (
    <div className='flex flex-col items-end'>
        <DashboardNavbar/>
        <EventsSidebar/>
        <div className=' w-[84vw] min:h-screen flex gap-5 justify-center item py-10 flex-wrap mt-10'>
            {
                ([1,1,1,1,1,1,1,1].map(
                    (item, index) => (<EventCard path={"../src/assets/projects-"+(index+1)+".jpg"} key={index} title='title' organization='organization'/> )
                ))
            }
        </div>
    </div>
  )
}

export default Events