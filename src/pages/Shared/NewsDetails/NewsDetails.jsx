import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideNav from "../RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NewsDetails = () => {
  const newsItem = useLoaderData();
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    const news = newsItem.find((n) => n._id === id);
    setSelectedNews(news);
  }, [newsItem, id]);

  return (
    <div>
      {/* Header */}
      <div>
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <div className='grid grid-cols-4 gap-10'>
        <div className='col-span-3'>
          <div className='border p-5'>
            <div>
              {selectedNews && (
                <div>
                  <img src={selectedNews.image_url} alt={selectedNews.title} />
                  <p className='py-5 text-2xl poppins-semibold'>
                    {selectedNews.title}
                  </p>
                  <p>{selectedNews.details}</p>
                </div>
              )}
            </div>
            <div className='mt-4'>
              <Link
                to='/'
                className='bg-[#D72050] text-white btn-sm rounded-none p-2 poppins-medium flex gap-2 items-center w-[215px]'
              >
                <span>
                  <FaLongArrowAltLeft />
                </span>
                All news in this category
              </Link>
            </div>
          </div>
        </div>
        {/* Right Side Nav Content */}
        <div className='col-span-1'>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
