import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="relative h-screen">
      <div
        style={{
          backgroundImage:
            "url('https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg')",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 flex mt-96  lg:mt-[450px] xl:mt-[600px] ml-20">
        <Link
          to="/"
          className="btn poppins-bold bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
