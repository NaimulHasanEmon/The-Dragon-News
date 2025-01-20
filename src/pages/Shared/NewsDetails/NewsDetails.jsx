import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideNav from "../RightSideNav/RightSideNav";

const NewsDetails = () => {
    const {id} = useParams()

  return (
    <div>
      {/* Header */}
      <div>
        <Header></Header>
      </div>
      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          <p>News Details coming of: {id}</p>
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
