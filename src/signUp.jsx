
const SignUp = () => {
    return (
        <div className="w-screen flex justify-center items-center h-screen">
            <form action="" className=" h-96 bg-slate-100 w-full sm:w-72 rounded-lg  flex flex-col items-center gap-y-5">
                <h1 className=" text-center p-5 font-semibold lg:text-green-500">Create your Account</h1>
                    <input className="w-4/5 h-9 pl-3 rounded-md focus:outline-none focus:bg-gray-50" type="text" placeholder='firstname' />
                    <input className="w-4/5 h-9 pl-3 rounded-md focus:outline-none focus:bg-gray-50" type="text" placeholder='lastname' />
                    <input className="w-4/5 h-9 pl-3 rounded-md focus:Soutline-none focus:bg-gray-50" type="email" name="" id="" placeholder='gmail' />
                    <input className="w-4/5 h-9 pl-3 rounded-md focus:outline-none focus:bg-gray-50" type="password" name="" id="" placeholder='password'/>
                    <button className=" bg-red-500 h-9 px-3 rounded-md text-white hover:bg-red-400 "type="submit">Create an account</button>
            </form>
        </div>
    )
}
export default SignUp
