const Navbar = () => {
    return ( 
        <div 
        className="navBar flex justify-between
        items-center p-[3rem] bg-emerald-100 w-full	">
            <div className="logoDiv">
                <h1 className="logo text-[25px]
                 text-indigo-700	">
                    <strong>Job</strong>
                   Search 
                </h1>
            </div>
            <div className="menu flex gap-8 border-solid bg-slate-200
             p-5">

                <li className="menuList text-[#6f6f6f]
                 hover:text-blueColor " >Jobs</li>
                <li className="menuList text-[#6f6f6f]
                 hover:text-blueColor">Companies</li>                 
                <li className="menuList text-[#6f6f6f]
                 hover:text-blueColor">About</li>
                <li className="menuList text-[#6f6f6f]
                 hover:text-blueColor">Contact</li>           
                <li className="menuList text-[#6f6f6f]
                 hover:text-blueColor">Blog</li>           
                <li className="menuList text-[#6f6f6f]
                 hover:text-blueColor">Login</li> 
                 <li className="menuList text-[#6f6f6f]
                 hover:text-blueColor">Register</li>           
            </div> 
            </div>
     );
}
 
export default Navbar;