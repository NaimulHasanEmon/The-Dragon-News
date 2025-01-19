import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swimming from "../../../assets/Images/swimming.png";
import Class from "../../../assets/Images/class.png";
import PlayGround from "../../../assets/Images/playground.png";

const RightSideNav = () => {
  return (
    <div>
      {/* Login With */}
      <div>
        <p className='text-3xl mb-7'>Login With</p>
        <div className='my-2'>
          <button className='btn w-full flex items-center gap-1 border-2 border-black hover:bg-white hover:text-blue-400 hover:border-blue-400'>
            <FaGoogle className='text-xl' />
            Login With Google
          </button>
        </div>
        <div>
          <div>
            <button className='btn w-full flex items-center gap-1 border-2 border-black hover:bg-white hover:text-blue-400 hover:border-blue-400'>
              <FaGithub className='text-xl' />
              Login With Github
            </button>
          </div>
        </div>
      </div>

      {/* Find Us On */}
      <div className='mt-10'>
        <p className='text-3xl mb-7'>Find Us On</p>
        <div className='border-[1px] border-slate-400 rounded-lg'>
          <Link className='p-3 flex gap-2 text-lg items-center border rounded-t-lg'>
            <FaFacebook className='text-xl' />
            <span>Facebook</span>
          </Link>
          <Link className='p-3 flex gap-2 text-lg items-center border-x'>
            <FaTwitter className='text-xl' />
            <span>Twitter</span>
          </Link>
          <Link className='p-3 flex gap-2 text-lg items-center border rounded-b-lg'>
            <FaInstagram className='text-xl' />
            <span>Instagram</span>
          </Link>
        </div>
      </div>

      {/* Q-Zone */}
      <div className='bg-base-200 px-3 my-10'>
          <p className='text-3xl mb-5 pt-3'>Q-Zone</p>
         <div>
          <img src={Swimming} alt='Swimming' />
        </div>
        <div>
          <img src={Class} alt='Class' />
        </div>
        <div>
          <img src={PlayGround} alt='PlayGround' />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
