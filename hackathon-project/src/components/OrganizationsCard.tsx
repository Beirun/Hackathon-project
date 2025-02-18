import { useNavigate } from "react-router-dom"
const OrganizationsCard = () => {
    const navigate = useNavigate()
  return (
    <div onClick={()=> navigate('/your-organization/1')} className="w-[80%] h-50  rounded-md flex shadow-xl shadow-gray/50">
        <div className="w-[20%] h-full">
            <div style={{ backgroundImage: `url(../src/assets/logo-1.png)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full h-full rounded-md"/>
        </div>
        <div className="w-[80%] h-full flex flex-col">
            <div className="w-full h-[55%]">
            <div style={{ backgroundImage: `url(../src/assets/projects-1.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-full h-full rounded-tr-md"/>
            </div>
            <div className="flex flex-col w-full h-[45%] px-5 gap-2">
                <p className="text-2xl">Rise Above Foundation Cebu, INC</p>
                <p className="text-sm">A Non-Profit NGO, an active group of people who focuses on improving the quality of life for the underprivileged families in Cebu, Philippines. </p>
            </div>
        </div>
    </div>
  )
}

export default OrganizationsCard