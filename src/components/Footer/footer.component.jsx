import {FiInstagram} from 'react-icons/fi';
import {FaLinkedin} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6'

const Footer = () => {
    return ( 
        <div className="footer p-[5rem] mb-4 bg-emerald-100
        rounded-[10px] gap-[8] grid grid-cols-5 m-auto 
        items-center justify-center">
            <div>
            <div className="logoDiv">
                <h1 className="logo text-[25px]
                 text-slate-600	">
                    <strong>Job</strong>
                   Search 
                </h1>
            </div>
            <p className="text-slate-600 pb-[13px] opacity-70
            leading-7">
                We always make our seekers and companies find the best jobs and employs find the best candidates.
            </p>
            </div>

            <div className="grid">
                <span className="divTitle font-semibold pb-[1.5rem] text-slate-600">
                    Company
                </span>
                <div className="grid gap-3">
                    <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">About Us</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">Features</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]"> News</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">FAQ</li>

                </div>


            </div>

            <div className="grid">
                <span className="divTitle font-semibold pb-[1.5rem] text-slate-600">
                    Resources
                </span>
                <div className="grid gap-3">
                    <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">Account</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">Support Center</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]"> Feedback</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">Contact Us</li>

                </div>


            </div>

            <div className="grid">
                <span className="divTitle font-semibold pb-[1.5rem] text-slate-600">
                    Support
                </span>
                <div className="grid gap-3">
                    <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">Events</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">Promo</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]"> Reg Demo</li>
                     <li className="text-slate-600 opacity-[.7]
                     hover:opacity-[1]">Careers</li>

                </div>


            </div>
            <div className="grid">
                <span className="divTitle font-semibold pb-[1.5rem] text-slate-600">
                    Contact Info
                </span>
                <div className="grid gap-3">
                    <small className="text-[14px] text-slate-600">
                        jobsearch23@gmail.com
                    </small>
                <div className="icons flex gap-4 py-[1rem]">
                    <FiInstagram  className='bg-slate-200 hover:bg-emerald-300 p-[8px]
                    h-[35px] w-[35px] rounded-full icon text-slate-600'
                    />
                    <FaLinkedin  className='bg-slate-200 hover:bg-emerald-300 p-[8px]
                    h-[35px] w-[35px] rounded-full icon text-slate-600'
                    />
                    <FaSquareXTwitter  className='bg-slate-200 hover:bg-emerald-300 p-[8px]
                    h-[35px] w-[35px] rounded-full icon text-slate-600'
                    />
                </div>

                </div>


            </div>

        </div>
     );
}
 
export default Footer;