import React from 'react'

const Footer = () => {
    return (

        <div>
            <div class="border-t border-solid border-gray-200 bg-gray-100 mt-4 py-4">
                <div class="container px-4 mx-auto">

                    <div class="text-center text-gray-300 text-base">
                        <p class="hidden md:block">Copyright © {(new Date().getFullYear())} by The Bingmachine</p>
                        <p class="md:hidden">Copyright © {(new Date().getFullYear())} <br></br>by The Bingmachine</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer