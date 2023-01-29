import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/notworthy_logo.png"
import Hamburgermenu from "../assets/nav_hamburgericon.png"

const Nav = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <nav>
                <div className='w-full bg-amber-400'>
                    <div className="max-w-6xl mx-auto px-5">
                        <div className="flex justify-between">
                            {/*logo*/}
                            <div className="flex space-x-4 py-3 px-3 items-center ">
                                <img className="w-12 md:w-12 h-12 md:h-12" src={Logo} alt="NavLogoOne" />
                                <span className='text text-bold text-xl font-changa text-black md:text-3xl'>Noteworthy</span>
                            </div>

                        </div>
                    </div>
                </div>
                {/*mobile menu*/}
                {toggle && (
                    <div className="absolute inset-0 bg-blue-500 flex md:hidden ">
                        <div className="mobile-menu text-center m-auto flex flex-col space-y-10">
                            <Link to={`/`}>
                                <p className="text-white text-3xl font-bold py-3 px-3 bg-blue-700 shadow rounded">Nav One</p>
                            </Link>
                            <Link to={`/navthree`}>
                                <p className="text-white text-3xl font-bold py-3 px-3 bg-blue-700 shadow rounded">Nav Three</p>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Nav