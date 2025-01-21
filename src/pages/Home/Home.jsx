import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import DragonNewsHome from "../Shared/DragonNewsHome/DragonNewsHome";
import RightSideDown from "../Shared/RightSideDown/RightSideDown";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Left Sidebar - Hidden on small devices */}
                <div className="hidden lg:block xl:block 2xl:block">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* Main Content - Takes up full width on smaller screens */}
                <div className="col-span-1 lg:col-span-2 md:col-span-2">
                    <DragonNewsHome></DragonNewsHome>
                </div>
                {/* Right Sidebar - Responsive */}
                <div>
                    <RightSideNav></RightSideNav>
                    <RightSideDown></RightSideDown>
                </div>
            </div>
        </div>
    );    
};

export default Home;