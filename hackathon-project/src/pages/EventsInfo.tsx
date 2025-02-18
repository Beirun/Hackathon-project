import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import { Button } from "../components/ui/button";
import { useState } from "react";
const EventsInfo = () => {
  const { id } = useParams();
  const [joinClicked, setJoinClicked] = useState(false);
  return (
    <>
      <DashboardNavbar />
      <div className="w-screen min:h-screen flex justify-center">
        <div className="w-[65%] min:h-screen  pt-15">
          <div
            style={{
              backgroundImage: `url(../src/assets/projects-${id}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-70"
          ></div>
          <div className="text-6xl">
            Nourish & Nurture: A Community Feeding Program
          </div>
          <div className="h-[2px] w-full bg-[#4d4d4d] my-10"></div>
          <div className="w-full h-25 flex">
            <div className="flex flex-col w-1/2 gap-2 px-5">
              <p className="text-3xl text-[#4d4d4d]">Organization</p>
              <p className="text-lg text-[#4d4d4d]">Organization</p>
            </div>
            <div className="flex flex-col w-1/2 gap-2 px-5 items-end">
              {joinClicked ? (
                <Button onClick={() => setJoinClicked(!joinClicked)} className="w-10 bg-blue-mint hover:bg-blue-mint/65"><i
                className=
                "fi fi-rr-checkbox"
                ></i></Button>
              ) : (
                <Button onClick={() => setJoinClicked(!joinClicked)} className="w-30 bg-blue-mint hover:bg-blue-mint/65">JOIN EVENT</Button>
              )}
            </div>
          </div>
          <div className="w-full min:h-30 flex py-10">
            <p className="text-xl  text-[#4d4d4d]">Nourish & Nurture: A Community Feeding Program is dedicated to providing free, nutritious meals to individuals and families facing food insecurity. The program offers weekly meal distributions, including mobile outreach, and provides balanced meals with options for special dietary needs. By engaging local volunteers and partnering with businesses for food donations, we create a supportive community environment. Additionally, we offer educational workshops on healthy eating and connect participants to other local support services, with the goal of reducing hunger and promoting overall well-being.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsInfo;
