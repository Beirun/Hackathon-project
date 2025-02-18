import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Input } from "./ui/input";


const DashboardAddPost = () => {
  return (
    <div className="w-[75%] min:h-20 bg-white shadow-lg shadow-gray/50 rounded-md flex flex-col items-center pb-2">
      <div className="h-10 w-full p-5 flex justify-between">
        <div className="h-20 flex">
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
        
      </div>
      <div className="w-[90%] pt-10 h-30 flex justify-center items-center">

      <Input className="bg-[#d4d4d4] h-15" placeholder="What's on your mind?"/>
      </div>
        <div className="relative left-100 top-0 hover:bg-gray-400 w-6 h-6 pl-1 transition-colors duration-300">

      <i className="fi fi-ss-paper-plane w-10 h-10  "></i>

        </div>
    </div>
  );
};

export default DashboardAddPost;
