import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-2 border p-2 bg-base-200">
      <button className='btn bg-[#D72050] text-white btn-sm rounded-none'>Latest</button>
      <Marquee className='cursor-pointer' pauseOnHover={true} speed={50}>
        <Link to='/' className="mr-5">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link to='/' className="mr-5">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link to='/' className="mr-5">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
        <Link to='/' className="mr-5">
          I can be a React component, multiple React components, or just some
          text......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
