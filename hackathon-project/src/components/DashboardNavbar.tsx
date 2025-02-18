import { Label } from "../components/ui/label";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { useNavigate } from "react-router-dom";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarContent,
  MenubarSeparator,
  MenubarTrigger,
} from "../components/ui/menubar";
const DashboardNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-15 flex justify-between items-center bg-[#2e2e2e] px-5 fixed z-[100]">
      <div></div>
      <div className="flex gap-20 justify-center items-center">
        <i
          onClick={() => {
            navigate("/dashboard");
          }}
          className="fi fi-tr-document text-white cursor-pointer"
        ></i>
        <i
          onClick={() => {
            navigate("/events");
          }}
          className="fi fi-sr-calendar text-white cursor-pointer"
        ></i>
        <i
          onClick={() => {
            navigate("/organizations");
          }}
          className="fi fi-ss-users-alt text-white cursor-pointer"
        ></i>
      </div>
      <div className="h-10">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar>
                <AvatarImage
                  src="../src/assets/avatar.jpg"
                  alt="Avatar image"
                />
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem className="flex gap-2 h-10" onClick={()=> navigate('/login')}>
                <Label>Logout</Label>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default DashboardNavbar;
