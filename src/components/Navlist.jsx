/* eslint-disable no-unused-vars */
import { useContext } from "react"
import React from 'react'
import FlagContext from "../contexts/FlagContext"

function Navlist({ title, isListVisible }) {
    const { setHideList0, hideList0 } = useContext(FlagContext)
    const {selectedMenuItem} = useContext(FlagContext);
    const {itemListData, setItemListData} = useContext(FlagContext);
    return (
        <>
            <div onClick={() => {
                // setHideList0(hideList0 === 'hidden' ? 'block' : 'hidden') 
            }}
                className='w-auto ml-3 p-4 flex justify-center hover:bg-gray-100 transition cursor-pointer'>
                <p
                    className=' font-arial text-[#0e5aa7] dark:text-white dark:hover:text-gray-900'
                >{title}</p>
            </div>
            

        </>
    )
}


export default Navlist