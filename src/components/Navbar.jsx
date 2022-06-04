import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-r-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to='/'>
                    <p className="text-2xl bg-blue-500 rounded font-bold text-white py-1 px-2 dark:bg-gray-500 dark:text-gray-900">
                        Goggl🔎
                    </p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg=gray-50 dark:text-gray-900 bg-white rounded-full border px-1 py-1 hover:shadow-lg'>
                    {darkTheme ?  'Light🔅' : 'Dark🌙'}
                </button>
            </div>
        </div>
    )
}