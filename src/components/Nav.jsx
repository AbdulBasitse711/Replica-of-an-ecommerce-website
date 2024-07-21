/* eslint-disable react/prop-types */
import { Navlist } from "./index"
import { useContext, useState } from "react"
import FlagContext from "../contexts/FlagContext"

const Nav = ({ data }) => {
    const { itemListData } = useContext(FlagContext)
    const { setHideList0, hideList0 } = useContext(FlagContext)
    
    
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHideList0("block");
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHideList0("hidden");
        setHoveredIndex(null);
    };

    // const handleMenuItemClick = (index) => {
    //     setSelectedMenuItem(index);
    // };

    return (
        <>
            <div
               
                className="flex pr-3"
            >
                {data.map((d, k) => (
                    <div 
                    key={k}
                    onMouseEnter={() => handleMouseEnter(k)}
                    onMouseLeave={handleMouseLeave}
                    >
                        <Navlist title={d.title} isListVisible={hoveredIndex === k}/>
                    </div>
                ))}
            </div>
            {hoveredIndex !==null && (
                <div className=" absolute top-32 left-3 bg-white w-[98%] dark:bg-gray-600">
                    {itemListData.length > 0 && (
                        <div className={`w-full h-svh mx-5 px-5  ${hideList0}`}>
                            <ul>
                                {

                                    itemListData[hoveredIndex].children.map((d, i) => {
                                        return (
                                            <li key={i} >
                                                <div className='w-full h-10    cursor-pointer text-sm text-gray-500 hover:text-black hover:text-[15px] transition-all duration-200 dark:text-white'

                                                >
                                                    <p>{d.title}</p>
                                                </div>
                                            </li>

                                        )
                                    })
                                }

                            </ul>
                        </div>)}
                </div>
            )
            }
        </>
    );
}

export default Nav
