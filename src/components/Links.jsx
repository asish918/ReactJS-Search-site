import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/image', text: '📷 Images' },
    { url: '/news', text: '🗞 News' },
    { url: '/videos', text: '🎬 Videos' }
]

let activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0';

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({url, text}) => (
                <NavLink to={url} className={({isActive}) => isActive ? activeClassName : 'm-2'} >
                    {text}
                </NavLink>
            ))}
        </div>
    )
}