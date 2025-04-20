import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="text-5xl bg-green-400">navbar</div>

            <main className="min-h-[calc(100vh-100px)]">
                <Outlet />
            </main>

            <div className="text-5xl bg-blue-400">footer</div>
        </div>
    );
};

export default Root;