import DashboardNavbar from "../components/DashboardNavbar";
import { Button } from "../components/ui/button";
import OrganizationsCard from "../components/OrganizationsCard"
import OrganizationsSidebar from "../components/OrganizationsSidebar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { useState } from "react";
const Organizations = () => {
  const [organizations, setOrganizations] = useState([1]);

  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-end">
      <DashboardNavbar />
      <OrganizationsSidebar />
      <div className=" w-[84vw] min:h-screen h-screen flex flex-col gap-5 justify-center items-center py-10 flex-wrap mt-10">
        {organizations.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-10">
            <p>You do not have any existing Organizations</p>
            
          </div>
        ) : (
          organizations.map((organization, index) => (
              <OrganizationsCard key={index}/>
          ))
        )}
        <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>Create Organization</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Organization</DialogTitle>
                  <DialogDescription>
                  Your organization page is where volunteers learn more about your organization. 
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <p>Basic Information</p>
                    <Input className="my-1 h-20" placeholder="Organization Name"></Input>
                    <Input className="my-1 h-20" placeholder="Categories"></Input>
                    <Input className="my-1 h-20" placeholder="Description"></Input>
                </div>
                
                <DialogFooter className="flex flex-row justify-center items-center">
                  <Button onClick={() => setOpen(false)} >Save changes</Button>
                </DialogFooter>
              </DialogContent> 
            </Dialog>
      </div>
    </div>
  );
};

export default Organizations;
