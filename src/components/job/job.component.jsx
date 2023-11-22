
import {BiTimeFive} from 'react-icons/bi';



// For all the jobs, we are going to use high order array method called Map.
// We can use constants for this case..
import { data } from '../../constants';
const Job = () => {
    return ( 
        <div>
            <div className="jobContainer flex gap-10
            justify-center flex-wrap items-center py-10">

                {
                    data.map(({id,image,title,time,location,desc,company})=>{
                        return (
                            // This will be return a single job post based on the ID
                            <div key={id} className="group group/item singleJob
                            w-[250px] p-[20px] bg-emerald-100 rounded-[10px]
                            hover:bg-emerald-200 shadow-lg shadow-greyIsh-400/700
                            hover:shadow-lg">
                                <span className="flex justify-between items-center gap-4 ">
                                    <h1 className="text-[16px] font-semibold
                                    text-textColor group-hover:text-slate-600">
                                         {title}</h1>
                                        <span className='flex items-center
                                        text-textColor gap-1'>
                                            <BiTimeFive/>{time}
                                        </span>
                                </span>
                                <h6 className='text-textColor'>{location}</h6>
                                <p
                                className='text-[13px] text-[#959595] pt-[20px]
                                border-t-[2px] mt-[20px] group-hover:text-slate-600 '>
                                    {desc}</p>
            
                                     <div className="company flex items-center
                                     gap-2">
                                        <img 
                                        src={image}
                                         className='w-[10%]'
                                         alt={title} />
            
                                         <span className="text-[14px] py-[1rem] 
                                         block group-hover:text-slate-600">
                                            {company}
                                         </span>
                                     </div>
            
                                     <button className='border-[2px] rounded-[10px]
                                     block p-[10px] w-full text-[14px] font-semibold 
                                     text-black hover:bg-emerald-300 group-hover/item:text-black 
                                     group-hover:text-slate-600
                                     '>
                                    Apply Now
                                     </button>
            
            
                            </div>
             
                        )
                    })
                }

            </div>

        </div>
     );
}
 
export default Job;