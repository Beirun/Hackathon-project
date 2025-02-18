import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";
const OrganizationsSidebar = () => {
    const navigate = useNavigate()
  return (
    <div className="h-[calc(100%-3.75rem)] left-0 bottom-0 w-1/6 bg-white flex flex-col fixed">
      <div>
        <p className="text-4xl font-bold p-2">Organizations</p>
      </div>
      <div>
        <Input
          placeholder="Search"
          className="my-2 w-[90%] h-10 border-gray-950 rounded-sm ml-2"
        />
      </div>
      <div className="p-2 pr-4">
        <div onClick={()=> {navigate("/organizations")}} className={`p-4 ${window.location.pathname === "/organizations" ? "bg-[#c4c4c4]" : ""} rounded-md flex gap-3 items-center `}>
          <i className="fi fi-br-discover"></i>
          <Label>Discover</Label>
        </div>
      </div>
      <div className="p-2 pr-4">
        <div onClick={()=> {navigate("/your-organization")}} className={`p-4 ${window.location.pathname === "/your-organization" ? "bg-[#c4c4c4]" : ""} rounded-md  flex gap-3 items-center `}>
        <i className="fi fi-ss-users"></i>
          <Label>Your Organizations</Label>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsSidebar;
