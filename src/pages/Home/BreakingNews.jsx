import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { DiAtom } from "react-icons/di";

const BreakingNews = () => {
  return (
    <div className="flex gap-2 border p-2 bg-base-200">
      <button className='btn bg-[#D72050] text-white btn-sm rounded-none'>Latest</button>
      <Marquee className='cursor-pointer' pauseOnHover={true} speed={50}>
        <Link to='/' className="flex items-center gap-3 ml-3">
        Global Tech Giant Announces Breakthrough in AI Technology <span className="text-2xl"><DiAtom /></span>
        </Link>
        <Link to='/' className="flex items-center gap-3 ml-3">
        Massive Earthquake Hits Coastal Region, Thousands Affected <span className="text-2xl"><DiAtom /></span>
        </Link>
        <Link to='/' className="flex items-center gap-3 ml-3">
        Historic Peace Treaty Signed Between Long-Time Rival Nations <span className="text-2xl"><DiAtom /></span>
        </Link>
        <Link to='/' className="flex items-center gap-3 ml-3">
        Major Data Breach Exposes Millions of User Accounts Worldwide <span className="text-2xl"><DiAtom /></span>
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
