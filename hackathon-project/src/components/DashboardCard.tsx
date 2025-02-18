import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Input } from "./ui/input";

import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarContent,
  MenubarSeparator,
  MenubarTrigger,
} from "../components/ui/menubar";
import { Label } from "../components/ui/label";

const DashboardCard = () => {
  return (
    <div className="w-[75%] min:h-50 bg-white shadow-lg shadow-gray/50 rounded-md flex flex-col items-center pb-2">
      <div className="h-10 w-full p-5 flex justify-between">
        <div className="h-10 flex">
          <div className="h-10 flex justify-center items-center pt-3">
            <Avatar className="border-1 border-gray-950 h-10 w-10 flex justify-center items-center">
              <AvatarImage src="../src/assets/avatar.jpg" alt="Avatar image" />
            </Avatar>
          </div>
          <div className="flex flex-col ml-5 h-10">
            <p className="text-2xl">Name</p>
            <p className="text-sm">Volunteer</p>
          </div>
        </div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <i className="fi fi-rr-menu-dots"></i>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="flex gap-2">
                  <i className="fi fi-rr-pencil"></i>
                  <Label>Edit Post</Label>
                </MenubarItem>
                <MenubarSeparator/>
                <MenubarItem className="flex gap-2">
                  <i className="fi fi-br-trash"></i>
                  <Label>Delete Post</Label>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className=" w-[83%] min:h-15 text-2xl mt-10">
      <p className="w-full text-wrap hyphens-manual">Test</p>
      </div>
      <div className="w-full h-2 py-5 flex justify-center">
        <div className="w-[83%] h-[1px] bg-gray-950" />
      </div>
      <div className="w-[83%] min:h-10 py-5 flex items-center">
        <Avatar><AvatarImage src="../src/assets/avatar.jpg" alt="Avatar image"/></Avatar>
        <p className="min:h-10 rounded bg-[#d4d4d4] px-5">Message</p>
      </div>
      <div className="w-[83%] h-10 flex justify-start items-start">

      <Input className="bg-[#d4d4d4]"/>
        <div className="relative right-7 top-2 hover:bg-gray-400 w-6 h-6 pl-1 transition-colors duration-300">

      <i className="fi fi-ss-paper-plane w-10 h-10  "></i>

        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
