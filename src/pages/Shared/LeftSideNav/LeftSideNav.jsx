import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSideNav.css";
import StockMarket from "../../../assets/Images/Stock Markets.jpg";
import Nasa from "../../../assets/Images/NASA Mars Rover.jpg";
import Climate from "../../../assets/Images/Climate Change.jpg";
import { CiCalendar } from "react-icons/ci";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      {/* All Category */}
      <div>
        <p className='text-2xl poppins-medium'>All Category</p>
        <div className='ml-7'>
          {categories.map((category) => (
            <div>
              <Link
                to='/'
                className='flex p-3 poppins-medium text-gray-500 hover:text-black hover:bg-base-200 rounded-lg'
                key={category.id}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* News */}
      <div className='flex flex-col gap-3'>
        {/* Stock Market */}
        <div className='card shadow-xl p-2'>
          <img className='rounded-lg' src={StockMarket} alt='' />
          <div className='mt-3'>
            <p className='poppins-medium'>
              Global Stock Markets Surge After Central Banks Announce New
              Stimulus Measures
            </p>
            <div className='flex justify-between mt-3'>
              <div>
                <p>Stock Market</p>
              </div>
              <div className="flex items-center gap-1">
                <CiCalendar />
                <p>Jan 19, 2025</p>
              </div>
            </div>
          </div>
        </div>
        {/* Nasa */}
        <div className='card shadow-xl p-2'>
          <img className='rounded-lg' src={Nasa} alt='' />
          <div className='mt-3'>
            <p className='poppins-medium'>
              NASA's Mars Rover Discovers Evidence of Ancient Water Flow on the
              Red Planet
            </p>
            <div className='flex justify-between mt-3'>
              <div>
                <p>Space Science</p>
              </div>
              <div className="flex items-center gap-1">
                <CiCalendar />
                <p>Jan 18, 2025</p>
              </div>
            </div>
          </div>
        </div>
        {/* Climate */}
        <div className='card shadow-xl p-2'>
          <img className='rounded-lg' src={Climate} alt='' />
          <div>
            <p className='poppins-medium'>
              Protests Erupt Worldwide in Response to Climate Change Inaction{" "}
            </p>
            <div className='flex justify-between mt-3'>
              <div>
                <p>Climate Change</p>
              </div>
              <div className="flex items-center gap-1">
                <CiCalendar />
                <p>Jan 17, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
