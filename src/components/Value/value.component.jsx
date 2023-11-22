import { values } from "../../constants";
const Value = () => {
    return ( 
        <div className="mb-[4rem] mt-[6rem]">
            <h1 className="text-black text-[25px] 
            py-[2rem] pb-[3rem] font-bold w-[400px] black">
                The value that holds us true and to account</h1>
        
        <div className="grid gap-[10rem] grid-cols-3 
        items-center">
           
           {
                values.map(({id,image,title,text})=>{
                    return (
                        <div className="singleGrid rounded-[10px] text-emerald-100
                        hover:bg-emerald-200 p-[1.5rem]" key={id}>
                           <div className="flex items-center gap-3 ">
                           <div className="imgDiv p-[4px] rounded-[.8rem]
                            bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center
                            justify-center  ">
           
                               <img 
                               src={image}
                                className="w-[80%]"
                                alt="" />
                           </div>
                           <span className="font-semibold text-slate-600 text-[18px]">
                               {title}
                           </span>
                           </div>
                           
                           <p className="text-[13px] text-slate-600 
                           opacity-[.7]
                           py-[1rem]">
                              {text}
                           </p>


                       </div>
                    )
                })
           }


        </div>
        
        <div className="card mt-[2rem] flex justify-between bg-emerald-100 
        p-[5rem] rounded-[10px]  ">
            <div>
                <h1 className="text-emerald-600 text-[30px] 
                font-bold ">Ready to switch a career? </h1>
                <h2 className="text-emerald-500 text-[25px] 
                font-bold">Let's get started
                </h2>
                
            </div>
            <button className="border-[2px] rounded-[10px] py-[4px] 
            px-[50px] text-[10px] font-semibold text-slate-600
            hover:text-slate-600 border-emerald-500 hover:border-emerald-600">
                    Get Started
                </button>

        </div>
        
        
        </div>

     );
}
 
export default Value;