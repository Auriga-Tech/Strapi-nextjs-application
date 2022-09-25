import React from 'react'

const Header = (header) => {
    console.log("Tis is my header",header)


    return (
        <div className="container   ">
            
            <h2 className="sm:text-3xl w-2/3 text-2xl font-medium title-font text-white mb-2">{header.title}
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-2">{header.label}
            </h1>

            <br />
            <br />





        </div>
    )
}

export default Header