import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftSideNav.css'

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <p className='text-2xl poppins-medium'>All Category</p>
      <div className="ml-7">
        {categories.map((category) => (
          <div>
            <Link
            to='/'
            className='flex p-3 poppins-medium text-gray-500 hover:text-black hover:bg-base-200 rounded-lg' key={category.id}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
