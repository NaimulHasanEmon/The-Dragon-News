import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[370px] sm:max-w-sm md:max-w-[720px] lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;