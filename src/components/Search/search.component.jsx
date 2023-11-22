import {AiOutlineSearch} from 'react-icons/ai'

import {AiOutlineClose} from 'react-icons/ai'

import {BsHouseDoor } from 'react-icons/bs'

import {CiLocationOn } from 'react-icons/ci'



const Search = () => {
    return ( 
        <div className="Search grid 
        gap-10 bg-greyIsh rounded-[10px]
        p-[3rem]">
            <form action="">
                <div className="firstName flex justify-between
                items-center rounded-[8px] gap-10 
                bg-emerald-100 w-full p-5 shadow-lg shadow-greyIsh-700">
                <div className="flex gap-2 items-center
                ">
                <AiOutlineSearch className='text-[25px] icon'/>
            <input type="text" className='bg-white
             text-black focus:outline-none w-[100%] ' 
             placeholder= 'Search Job Here....'/>
             <AiOutlineClose className='text-[25px] text-slate-400
              hover:text-textColor  icon' />
                </div>

                <div className="flex gap-2 items-center
                ">
                <BsHouseDoor className='text-[25px] icon'/>
            <input type="text" className='bg-white
             text-black focus:outline-none w-[100%] ' 
             placeholder= 'Search by company....'/>
             <AiOutlineClose className='text-[25px] text-slate-400
              hover:text-textColor  icon' />
                </div>

                <div className="flex gap-2 items-center
                ">
                <CiLocationOn className='text-[25px] icon'/>
            <input type="text" className='bg-white
             text-black focus:outline-none w-[100%] ' 
             placeholder= 'Search by location....'/>
             <AiOutlineClose className='text-[25px] text-slate-400
              hover:text-textColor  icon' />
                </div>

                <button className='bg-emerald-200
                 hover:bg-emerald-300 h-full
                p-5 px-10 rounded-[10px] text-white
                 hover:text-slate-600
                curser-pointer '>
                    Search</button>


                </div>
            </form>

            <div className="sec flex items-center gap-10
            justify-center">
                <div className="singleSeaerch flex items-center
                gap-2">
                    <label htmlFor="relevance" className='text-slate-400
                    font-semiblod'>Sort by:</label>

                    <select name="" id="relevance" className='
                    bg-emerald-100 rounded-[3px] px-4 py-1 focus:outline-none'
                    >
                        <option value=""  disabled>Please Select
                        </option>
                        <option value=""  >Relevance
                        </option>
                        <option value=""  >Inclusive
                        </option>
                        <option value=""  >Starts With
                        </option>
                        <option value=""  >Contains
                        </option>

                    </select>

                </div>

                <div className="singleSeaerch flex items-center
                gap-2">
                    <label htmlFor="type" className='text-slate-400
                    font-semiblod'>Type:</label>

                    <select name="" id="type" 
                    className='
                    bg-emerald-100 rounded-[3px] px-4
                     py-1 focus:outline-none'
                    >
                        <option value=""  disabled>
                            Please Select
                        </option>
                        <option value=""  >Full-time
                        </option>
                        <option value=""  >Remote
                        </option>
                        <option value=""  >Contract
                        </option>
                        <option value=""  >Part-time
                        </option>

                    </select>

                </div>

                <div className="singleSeaerch flex items-center
                gap-2">
                    <label htmlFor="level" className='text-slate-400
                    font-semiblod'>Level:</label>

                    <select name="" id="level" className='
                    bg-emerald-100 rounded-[3px] px-4 py-1 focus:outline-none'
                    >
                        <option value=""  disabled>Please Select
                        </option>
                        <option value=""  >Beginner
                        </option>
                        <option value=""  >Intermediate
                        </option>
                        <option value=""  >Senior
                        </option>
                        <option value=""  >Advocate
                        </option>

                    </select>

                </div>

                <span className="
                 hover:bg-emerald-200 h-full
                p-2 px-5 rounded-[10px] text-black
                 hover:text-slate-600
                curser-pointer 
                 ">Clear All</span>


            </div>

        </div>
     );
}
 
export default Search;