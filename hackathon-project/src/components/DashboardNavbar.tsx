import {Avatar, AvatarImage} from "../components/ui/avatar"

const DashboardNavbar = () => {
  return (
    <div className='w-screen h-15 flex justify-between items-center bg-[#2e2e2e] px-5 fixed'>
        <div></div>
        <div></div>
        <div>
            <Avatar>
                <AvatarImage src="../src/assets/avatar.jpg" alt="Avatar image"/>
            </Avatar>
        </div>
    </div>
  )
}

export default DashboardNavbar