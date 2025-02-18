import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useState } from "react";
const Organization = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  return (
    <>
      <DashboardNavbar />
      <div className="w-screen min:h-screen flex justify-center">
        <div className="w-[65%] min:h-screen  pt-15">
          <div
            style={{
              background: "white",
              backgroundPosition: "center",
            }}
            className="w-full h-70"
          ></div>
          <div
            style={{
              backgroundImage: `url(../src/assets/logo-${id}.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-40 h-40 absolute left-165 top-65"
          ></div>
          <div className="text-6xl pt-20">
          Rise Above Foundation Cebu, INC          </div>
          <div className="h-[2px] w-full bg-[#4d4d4d] my-10"></div>
          <div className="w-full h-25 flex">
            <div className="flex flex-col w-1/2 gap-2 px-5">
              <p className="text-3xl text-[#4d4d4d]">Organization</p>
            </div>
            <div className="flex flex-col w-1/2 gap-2 px-5 items-end">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>Create Event</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Event</DialogTitle>
                    <DialogDescription>
                      Create an event where volunteers can join to participate.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-2">
                    <p>Basic Information</p>
                    <Input type="file"></Input>
                    <Input
                      className="my-1 h-20"
                      placeholder="Event Name"
                    ></Input>
                    <Input
                      className="my-1 h-20"
                      placeholder="Categories"
                    ></Input>
                    <Input
                      className="my-1 h-20"
                      placeholder="Description"
                    ></Input>
                  </div>

                  <DialogFooter className="flex flex-row justify-center items-center">
                    <Button onClick={() => setOpen(false)}>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="w-full min:h-30 flex py-10">
            <p className="text-xl  text-[#4d4d4d]">
              Nourish & Nurture: A Community Feeding Program is dedicated to
              providing free, nutritious meals to individuals and families
              facing food insecurity. The program offers weekly meal
              distributions, including mobile outreach, and provides balanced
              meals with options for special dietary needs. By engaging local
              volunteers and partnering with businesses for food donations, we
              create a supportive community environment. Additionally, we offer
              educational workshops on healthy eating and connect participants
              to other local support services, with the goal of reducing hunger
              and promoting overall well-being.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organization;
