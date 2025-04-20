import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div>navbar</div>

            <Outlet />

            <div>footer</div>
        </div>
    );
};

export default Root;