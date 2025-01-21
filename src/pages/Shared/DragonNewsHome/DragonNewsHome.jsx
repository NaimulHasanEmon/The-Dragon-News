import { useEffect, useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import star from "../../../assets/Images/star.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const DragonNewsHome = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Scroll to top of the page while the data is loading
    window.scrollTo({top: 0, behavior: 'smooth'});

    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <p className='text-3xl Home-title hidden md:block lg:block xl:block 2xl:block'>Dragon News Home</p>
      {/* All News */}
      <div>
        {news.map((singleNews) => (
          <div className='my-3 md:my-5 lg:my-6 xl:my-6 2xl:m-6' key={singleNews._id}>
            {/* One News */}
            <div className='border-2 border-base-200'>
              {/* Author Info */}
              <div className='flex justify-between px-4 py-2 items-center bg-base-200 rounded'>
                <div className='flex gap-2'>
                  <img
                    className='h-12 rounded-full'
                    src={singleNews.author.img}
                    alt=''
                  />
                  <div>
                    <p className='text-lg poppins-semibold'>
                      {singleNews.author.name}
                    </p>
                    <p>{singleNews.author.published_date}</p>
                  </div>
                </div>
                <div className='flex gap-1 text-xl'>
                  <CiBookmark />
                  <CiShare2 />
                </div>
              </div>
              {/* News */}
              <div className='px-3 flex flex-col gap-3'>
                {/* Title */}
                <p className='mt-5 text-xl Home-title'>{singleNews.title}</p>
                {/* Image */}
                <img src={singleNews.image_url} alt={singleNews.title} />{" "}
                {/* Article */}
                {singleNews.details.length > 250 ? (
                  <>
                    <p>{singleNews.details.slice(0, 250)}... <Link
                    to={`/news/${singleNews._id}`}
                    className="text-orange-400 poppins-semibold">Read More</Link></p>
                  </>
                ) : (
                  <p>{singleNews.details}</p>
                )}
              </div>
              {/* Rate and View */}
              <div className='flex justify-between items-center px-5 border-t-2 border-base-200 p-2'>
                <div className='flex gap-1'>
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <p className='text-xl'>{singleNews.rating.number}</p>
                </div>
                <div className='flex gap-2 text-xl items-center'>
                  <FaEye />
                  <p>{singleNews.total_view}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragonNewsHome;
