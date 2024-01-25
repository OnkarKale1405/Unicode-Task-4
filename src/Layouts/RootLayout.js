import { Outlet, NavLink } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export default function RootLayout() {
    const { auth, setAuth } = useAuth();

    return (
        <>
            <div className="root-Layout bg-gray-100 w-full">
                <header>
                    <nav className="flex justify-end bg-gray-100 border-b-1 border-gray-400 items-center">
                        <h1 className="mr-auto p-4 text-2xl ml-24 text-gray-800
                        cursor-pointer max-sm:ml-4">Your LOGO</h1>

                        {/* <div className="search" >
                            <form className="flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button type="submit">Search</button>
                            </form>
                        </div> */}

                        <NavLink to="/Unicode-Task-3/home" className={({ isActive }) => `btn max-sm:m-0
                    `}>Home</NavLink>

                        <NavLink to="/Unicode-Task-3/cart" className={({ isActive }) => `btn max-sm:m-0
                    `}>Cart</NavLink>

                        <NavLink to="/Unicode-Task-3/register" className={({ isActive }) => `btn max-sm:m-0
                    `}>Register</NavLink>

                        {auth.accessToken ? (
                            <NavLink to="/Unicode-Task-3/home" className={({ isActive }) => `btn max-sm:m-0 bg-[#353535] text-white`}
                                onClick={() => setAuth({ ...auth, accessToken: undefined })}
                            >Logout</NavLink>)
                            : (
                                <NavLink to="/Unicode-Task-3/login" className={({ isActive }) => `btn max-sm:m-0
                            `}>Login</NavLink>
                            )}
                    </nav>
                </header>
            </div>
        </>
    )
};
