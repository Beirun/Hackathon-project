import EventsSidebar from '../components/EventsSidebar'
import DashboardNavbar from '../components/DashboardNavbar'
const Events = () => {
  return (
    <div className='flex'>
        <DashboardNavbar/>
        <EventsSidebar/>
        <div className='bg-amber-300 w-[80vw] h-screen'>

        </div>
    </div>
  )
}

export default Events