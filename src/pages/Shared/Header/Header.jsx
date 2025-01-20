import { Link } from "react-router-dom";
import Logo from "../../../../src/assets/Images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className='my-10 text-center mb-7 flex flex-col gap-2'>
      <Link to='/'>
        <img className='mx-auto' src={Logo} alt='The Dragon News' />
      </Link>
      <p className='text-xl'>Journalism Without Fear or Favour</p>
      <p className='text-xl'>{moment().format("dddd, MMMM Do, YYYY")}</p>
    </div>
  );
};

export default Header;
