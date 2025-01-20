import { useEffect, useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import star from "../../../assets/Images/star.png";
import { FaEye } from "react-icons/fa";

const DragonNewsHome = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <p className='text text-3xl poppins-medium'>Dragon News Home</p>
      {/* All News */}
      <div>
        {news.map((singleNews) => (
          <div className='my-6' key={singleNews._id}>
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
                <p className='mt-5 text-2xl poppins-bold'>{singleNews.title}</p>
                {/* Image */}
                <img src={singleNews.image_url} alt={singleNews.title} />{" "}
                {/* Article */}
                <p>{singleNews.details}</p>
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
                <div className="flex gap-2 text-xl items-center">
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
