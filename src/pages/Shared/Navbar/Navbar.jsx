import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../../src/assets/Images/user.png';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/career'>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
      </div>
      <div className='navbar-end flex gap-2'>
        <div className='avatar'>
          <div className='h-8 rounded-full'>
            <img src={userDefaultPic} />
          </div>
        </div>
        <Link to='/login'>
          <button className='btn rounded-none btn-sm bg-slate-700 text-white'>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
