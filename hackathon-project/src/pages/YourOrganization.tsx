import DashboardNavbar from '../components/DashboardNavbar'
import OrganizationsSidebar from '../components/OrganizationsSidebar'
const Organizations = () => {

  return (
    <div className='flex flex-col items-end'>
        <DashboardNavbar/>
        <OrganizationsSidebar  />
        <div className=' w-[84vw] min:h-screen flex gap-5 justify-center item py-10 flex-wrap mt-10'>
        </div>
    </div>
  )
}

export default Organizations