import {Input} from "./ui/input"
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"
const DashboardSidebar = () => {

  const categories = [
    "Feeding",
    "Clean Up Drive",
    "Blood Donation",
    "Tree Planting",
    "Animal Adoption",
    "Relief Goods Distribution",
    "Assistance Service",
    "Charity Runs/Walk",
    "Workshops"
  ];

  return (
    <div className='h-[calc(100%-3.75rem)] left-0 bottom-0 w-1/6 bg-white flex flex-col fixed'>
      <div>
      <p className='text-4xl font-bold p-2'>Events</p>
      </div>
      <div>
        <Input placeholder="Search" className="my-2 w-[90%] h-10 border-gray-950 rounded-sm ml-2" />
      </div>
      <div>
        {categories.map((category, index) => (
          <div key={index} className="flex w-[90%] my-2 px-2 py-2 gap-2">
            <Checkbox className="w-4 h-4 border-gray-950"/>
            <Label>{category}</Label>
          </div>
        ))}

      </div>
    </div>
  )
}

export default DashboardSidebar