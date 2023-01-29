import React from 'react'

const Footer = () => {
    return (

        <div>
            <div class="border-t border-solid border-gray-200 bg-gray-100 mt-4 py-4">
                <div class="container px-4 mx-auto">

                    <div class="text-center text-gray-300">
                        <p>Copyright © {(new Date().getFullYear())}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer