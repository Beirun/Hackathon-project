import LandingNavbar from "../components/LandingNavbar"
import ProjectsCard from "../components/ProjectsCard"
import { projects} from "../library/projects"
import {partners} from "../library/partners"
import PartnersCard from "../components/PartnersCard"
import { Element } from "react-scroll"
import {Avatar, AvatarImage} from "../components/ui/avatar"

const Landing = () => {
  return (
    <>
    <div className="w-screen h-screen bg-[#f1f1f1]">
    <LandingNavbar/>
        <div className="flex justify-center items-center h-4/5 w-full px-10 pt-50">
            <div className="">
                <div className="flex">

                <p className="text-4xl font-bold mb-10 text-blue-mint">CommUnity</p>
                <p className="text-4xl font-bold mb-10">: Unite, Serve, Grow</p>
                </div>
            <p className="text-mg font-medium font-poppins">
            CommUnity is a web and mobile application designed to strengthen community alliances by connecting volunteers with service opportunities. It facilitates collaboration between local organizations, volunteers, and residents to promote impactful service projects.
            </p>
            </div>
            <img src="../src/assets/landing.svg" alt="landing" width={100} className="w-128"/>
        </div>
    </div>
    <Element name='projects'>
        <div  className="w-screen h-screen bg-blue-mint flex justify-evenly">

        {projects.map((project, index) => (<ProjectsCard key={index} title={project[0]} description={project[1]} path={"../src/assets/projects-"+(index+1)+".jpg"}/>))}
        </div>
    </Element>
    <Element name='partners'>
        <div  className="w-screen h-screen bg-[#f1f1f1] flex flex-col justify-evenly">

        {partners.map((partner, index) => (<PartnersCard key={index} title={partner[0]} description={partner[1]} path={"../src/assets/logo-"+(index+1)+".png"}/>))}
        </div>
    </Element>
    <Element name='about'>
    <div  className="w-screen h-screen bg-[#f1f1f1] flex justify-center items-center flex-col">
        <p className="text-9xl font-bold text-blue-mint">EGO</p>
        <div className="flex gap-50 p-20">
        <div className="flex flex-col justify-center items-center">
            <Avatar>
                <AvatarImage
                    src="../src/assets/avatar.jpg"
                  alt="Avatar image"
                />
              </Avatar>
              <p className="text-3xl">Mark Jess Anthony Enfermo</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <Avatar>
                <AvatarImage
                    src="../src/assets/avatar.jpg"
                  alt="Avatar image"
                />
              </Avatar>
              <p className="text-3xl">Bryl Darrel Gorgonio</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <Avatar>
                <AvatarImage
                    src="../src/assets/avatar.jpg"
                  alt="Avatar image"
                />
              </Avatar>
              <p className="text-3xl">Bernard Jay Orillo</p>
            </div>
        </div>
    </div>
    </Element>
    </>
  )
}

export default Landing