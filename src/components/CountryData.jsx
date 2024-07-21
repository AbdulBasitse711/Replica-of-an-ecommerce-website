/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function CountryData({ title, id, media, checked, onChange }) {

    return (
        <>
            <div className=' flex items-center font-extralight gap-3 border-t-2 pt-3 w-full h-14 pl-10'>
                <input
                    type="radio"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />
                <img src={media} className='h-4 pl-3' alt="" />
                <label
                    htmlFor={id}
                    className=' text-xl font-arial text-black'
                >{title}</label>
            </div>
        </>
    )
}

export default CountryData