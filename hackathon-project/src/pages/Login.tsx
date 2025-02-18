import { useNavigate } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate()  
  return (
    <div className='w-screen h-screen bg-[#f1f1f1] flex justify-center items-center'>
        <div className="w-3/4 h-4/5 bg-[#f5f5f5]  rounded-xl shadow-lg shadow-gray/50 flex">
        <div className="w-1/2 h-full border-r border-[#d4d4d4] flex justify-center items-center flex-col">
            <h1 className="text-3xl mb-7 text-blue-mint font-bold">LOGIN</h1>
            <input type="text" className="text-[#2e2e2e] my-3 px-2 w-5/7 h-9 border-b-2 border-[#d4d4d4] focus:outline-none before:z-10 before:p-2.5 before:bg-amber-200 placeholder:text-[#8e8e8e]" placeholder="Username"/>
            <input type="password" className="text-[#2e2e2e] my-3 px-2 w-5/7 h-9 border-b-2 border-[#d4d4d4] focus:outline-none placeholder:text-[#8e8e8e]" placeholder="Password"/>
            <button className="w-5/7 mt-10 px-5 py-2 rounded text-[#ffff] font-semibold cursor-pointer text-lg bg-blue-mint  hover:bg-blue-mint/65 transition-colors duration-400">LOGIN</button>
            <div className="flex flex-row xl:flex-row lg:flex-col md:flex-col mt-10 sm:flex-col sm:item-center sm:justify-center">
                <p className="text-lg text-[#8e8e8e] mr-1.5">Don't have an account?</p>
                <div className="flex justify-center">
                    <button onClick={() => {navigate("/register")}} className="w-auto text-blue-mint/75 hover:text-blue-mint font-semibold cursor-pointer text-lg hover:underline transition-colors duration-400">Register Here!</button>
                </div>
            </div>
        </div>
        <div className="w-1/2 h-full border-l border-[#d4d4d4] flex items-center justify-center flex-col">
            <div className="flex flex-col">
                <p className="text-3xl leading-[.5] mb-5 text-[#4e4e4e] font-bold text-center">Welcome to the</p>
                <p className="text-3xl leading-[.5] mb-5 text-blue-mint font-bold text-center">CommUnity</p>
            </div>
        </div>
        </div>        
    </div>
  )
}

export default Login