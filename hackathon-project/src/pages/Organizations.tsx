import DashboardNavbar from '../components/DashboardNavbar'
import OrganizationsSidebar from '../components/OrganizationsSidebar'
import OrganizationsCard from '../components/OrganizationsCard'
const Organizations = () => {

  return (
    <div className='flex flex-col items-end'>
        <DashboardNavbar/>
        <OrganizationsSidebar  />
        <div className=' w-[84vw] min:h-screen flex gap-5 justify-center item py-10 flex-wrap mt-10'>
            {
                ([1,1,1,1].map((item,index)=> (<OrganizationsCard key={index}/>)))
            }
        </div>
    </div>
  )
}

export default Organizations