import DashboardNavbar from '../components/DashboardNavbar'
import DashboardCard from '../components/DashboardCard'
import DashboardAddPost from '../components/DashboardAddPost'
const Dashboard = () => {
  return (
    <>
    <DashboardNavbar/>
    <div className='w-screen min:h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[80%] min:h-screen gap-5 py-10  pt-20'>
        <DashboardAddPost/>
        {[1,1,1,1,1].map((item,index)=>(<DashboardCard key={index}/>))}
        </div>
    </div>
    </>
  )
}

export default Dashboard