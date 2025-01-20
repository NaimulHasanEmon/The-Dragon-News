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
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const RightSideNav = () => {
  const { user } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {/* Login With */}
      {user ? (
        <></>
      ) : (
        <div>
          <p className='text-3xl mb-7'>Login With</p>
          <div className='my-2'>
            <button
              className='btn w-full flex items-center gap-1 border-2 border-black hover:bg-white hover:text-blue-400 hover:border-blue-400'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <FcGoogle className='text-[23px]' />
              ) : (
                <FaGoogle className='text-xl' />
              )}
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
      )}

      {/* Find Us On */}
      <div className='mt-10'>
        <p className='text-3xl mb-7'>Find Us On</p>
        <div className='border-[1px] border-slate-400 rounded-lg'>
          <Link className='p-3 flex gap-2 text-lg items-center border rounded-t-lg hover:text-blue-500 hover:border-blue-500'>
            <FaFacebook className='text-xl' />
            <span>Facebook</span>
          </Link>
          <Link className='p-3 flex gap-2 text-lg items-center border-x hover:text-blue-500 hover:border-blue-500'>
            <FaTwitter className='text-xl' />
            <span>Twitter</span>
          </Link>
          <Link className='p-3 flex gap-2 text-lg items-center border rounded-b-lg hover:text-[#f09433] hover:border-[#f09433]'>
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
