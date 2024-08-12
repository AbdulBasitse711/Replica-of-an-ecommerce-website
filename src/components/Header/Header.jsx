/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Logo, Nav, Country } from "../index"
import FlagContext from '../../contexts/FlagContext';
import ThemeBtn from '../ThemeBtn';
import { Link } from 'react-router-dom';

function Header() {

    let requestOptions = {};
    let [countryList, setCountryList] = useState([])

    const [open, setOpen] = useState(false)
    const { flag, cartList } = useContext(FlagContext);
    const { itemListData, setItemListData, cartArray } = useContext(FlagContext)

    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append("Accept", "*/*");
        myHeaders.append("Accept-Encoding", "gzip, deflate, br");
        myHeaders.append("Accept-Language", "en-US,en;q=0.5");
        myHeaders.append("appId", "Reactweb");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Cookie", "storeInfo=mafpak|en|PKR; cart_api=v2; _abck=ED4A75A37E6CB676AD7EE09669E50A54~-1~YAAQQUw5F1x5wcuNAQAAKBrM4wuD97GOyKduDfE7ij+sGkpXI27QmamQwuG7qLXzXvh7dD19y95vMIHo6vvgNzQ6wd3sBKteXr1JXuFI59iK8X+Ep+sU5tOdP4naXJFPNJuvNv3G+9Pnumf3uepjwGLZopiNSEsMPTLjxQh8VVVOOTr+FDJs5l3Cr3yt976XzSuJNzZLZHyt2HlNcs8CWsM9EgkPaRex0+Mh8jcUkzq2Zgrh1zsBpQzAlI+rMNwrLTLi+JQNEd+/v2qRkafh6age9hsn3zbOTBp4jty8GTIjNf/hjiTnyO/DvIF19+pMMa6Tf16NDAJb2fW6g37mr3+JMs51bm4kcCO4u962j+xHCZoUD/wyFi+oBog6jI3KWRLEd3C3ViMbd0bPue7TAFllA4i17RJmjZAbuA==~-1~-1~0Fn9BgLqdE; _scid_r=76133e6c-94c6-4437-b7fe-b610224a30b1; AKA_A2=A; bm_sz=1BF721E36DF32FB2ADBBE0898B0664A8~YAAQhawwF9/lotuNAQAAEaPI4xZoM41UTPRLHp1Omz8zt2tS2wp5oOHHpIwlrgwUpkacQX4B4lAK5cYkpdI+LQhFkO0uKY2ZNzC9S62vL9fWZjdvydPgykPdiPWR1DgSirFK384E2UsaeYE/e9+TDtaZ0GV9vbdhW8wNtQPViZV5KjElkZ/XP5CU9+FAOHpLgeeL7D6Vj04DpdFo+Cs7Q1Odpu3WIhNrb4ckGUJCAZNFewQP4hCia7ahg3/G1Hgw6WuF0y3zZAjD2HgdPeA6iODL5GYHwiiMfYyd4pt9ttaL3PQX4/fFS0yfozQfpudq4h6XWXphPf2uxiMmwh0tIVUHHNYv8xJquCJnIgu+Gl5n03encU0=~4470594~3355462; page_type=home; _abck=C7DCFE9AF2930A338AA0AB21A8C131E5~-1~YAAQQUw5F8UPw8uNAQAAeBDr4wu6CSecj4ReYQ2U6I0kU5tRmf/9NY27ID+l6x/RTSins+O3HdPcleOvfZKa7ySWHUgSC7m6ha6d6G2RhiZWOMGBDjzMVpsjroI9fhGbfW/q0t60nUs/cMCsCs2/c9/kEkA+/xKbfKKBJfPHYIM2p0gAX9vKav7Pp385k8Wky+VWkeMzGlO2nA0JtgRq7MVofcdCwQCE7l6Rdp3W5p4FPzhs3Bt10Gja8nrtwZMCgl9sUWXmEzfGZ4cfQpDoyOU0mm5jy+R2ZiySmo8YZNla9DJyFJum0LRDX+mdiMs4hVoU8ERUAHGq9HUQ1eLN5UYWdMPOAJ+3OG2hVMNsp2q2mA1F20L/7MpshA==~-1~-1~-1; bm_sz=7111859B6B24A6FE43E62B0DBA0C2C7C~YAAQQUw5F8YPw8uNAQAAeBDr4xaKf7fJTvf7YRb1XdQ3bv9NvwkoOHxuYWXK2FRdTtA7a0yePi4JPlulbA9BD66h3EhNmanINDBfEQA/y6DABwLwxrvb8x1rhRRdum9k8WuQdtQmyRrskc36WhA7SOnG0oXj9cggObL3+DLnbCkKZDolmGYHps8PYkvcRCrM+atWj84maVB6wPWxoq78kiPoWbj+S9OjgpyFg+5AsBwARvjAJ99xAT3aaGCYUN/yTgGQmj23ieE50wmMC0T8S38iwABz1h5+IT4yVx8nRY2Gn269J6Q+iYCSSSc2uloQPOetA72AtPjRDsZhhgNtVyJ82uZuWX1eMvAS4Bg=~3422532~3688005; cart_api=v2");
        myHeaders.append("env", "prod");
        myHeaders.append("Host", "www.carrefour.pk");
        myHeaders.append("lang", "en");
        myHeaders.append("langCode", "en");
        myHeaders.append("newrelic", "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMzNTU3MjAiLCJhcCI6Ijk3Njc0NDUxOCIsImlkIjoiMDNjNzczZjkzMjBlOTA3ZCIsInRyIjoiMzRkZjNjZmRlZGI2OTU2OTZjOTgxZDViMDc5ZTcxZDAiLCJ0aSI6MTcwODkyMzgyMDY1M319");
        myHeaders.append("Referer", "https://www.carrefour.pk/mafpak/en/");
        myHeaders.append("Sec-Fetch-Dest", "empty");
        myHeaders.append("Sec-Fetch-Mode", "cors");
        myHeaders.append("Sec-Fetch-Site", "same-origin");
        myHeaders.append("storeId", "mafpak");
        myHeaders.append("token", "xsGhcf9a3FqexlEYL0Fn9BgLqdE");
        myHeaders.append("traceparent", "00-34df3cfdedb695696c981d5b079e71d0-03c773f9320e907d-01");
        myHeaders.append("tracestate", "3355720@nr=0-1-3355720-976744518-03c773f9320e907d----1708923820653");
        myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0");
        myHeaders.append("userId", "anonymous");
        myHeaders.append("X-Requested-With", "XMLHttpRequest");

        requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };



        fetch("https://www.carrefour.pk/api/v1/menu?latitude=31.495515027934786&longitude=74.35870880511509&lang=en&displayCurr=PKR", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setItemListData(result);
            })
            .catch((error) => console.error(error));



    }, []);

    const displayCountry = () => {
        setOpen(!open);
        const myHeaders = new Headers();
        myHeaders.append("Accept", "*/*");
        myHeaders.append("Accept-Encoding", "gzip, deflate, br");
        myHeaders.append("Accept-Language", "en-US,en;q=0.5");
        myHeaders.append("appId", "Reactweb");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Cookie", "storeInfo=mafpak|en|PKR; cart_api=v2; _abck=ED4A75A37E6CB676AD7EE09669E50A54~-1~YAAQQUw5F1x5wcuNAQAAKBrM4wuD97GOyKduDfE7ij+sGkpXI27QmamQwuG7qLXzXvh7dD19y95vMIHo6vvgNzQ6wd3sBKteXr1JXuFI59iK8X+Ep+sU5tOdP4naXJFPNJuvNv3G+9Pnumf3uepjwGLZopiNSEsMPTLjxQh8VVVOOTr+FDJs5l3Cr3yt976XzSuJNzZLZHyt2HlNcs8CWsM9EgkPaRex0+Mh8jcUkzq2Zgrh1zsBpQzAlI+rMNwrLTLi+JQNEd+/v2qRkafh6age9hsn3zbOTBp4jty8GTIjNf/hjiTnyO/DvIF19+pMMa6Tf16NDAJb2fW6g37mr3+JMs51bm4kcCO4u962j+xHCZoUD/wyFi+oBog6jI3KWRLEd3C3ViMbd0bPue7TAFllA4i17RJmjZAbuA==~-1~-1~0Fn9BgLqdE; _scid_r=76133e6c-94c6-4437-b7fe-b610224a30b1; AKA_A2=A; bm_sz=1BF721E36DF32FB2ADBBE0898B0664A8~YAAQhawwF9/lotuNAQAAEaPI4xZoM41UTPRLHp1Omz8zt2tS2wp5oOHHpIwlrgwUpkacQX4B4lAK5cYkpdI+LQhFkO0uKY2ZNzC9S62vL9fWZjdvydPgykPdiPWR1DgSirFK384E2UsaeYE/e9+TDtaZ0GV9vbdhW8wNtQPViZV5KjElkZ/XP5CU9+FAOHpLgeeL7D6Vj04DpdFo+Cs7Q1Odpu3WIhNrb4ckGUJCAZNFewQP4hCia7ahg3/G1Hgw6WuF0y3zZAjD2HgdPeA6iODL5GYHwiiMfYyd4pt9ttaL3PQX4/fFS0yfozQfpudq4h6XWXphPf2uxiMmwh0tIVUHHNYv8xJquCJnIgu+Gl5n03encU0=~4470594~3355462; page_type=home; _abck=831812983E92FB9B2FE475762FA62390~-1~YAAQQUw5F3Qzw8uNAQAAw1rt4wvf8IMfANitv5DMSupTbHLBuLwGwazH6TCsiJxfuJSjnSTMfE5J+gHOvW5vISi+TSUqPHH5vPq+12EbCepisbtko5Yndmi8TA2wWyFIB6S9fb5DNUFgfNQ2EPOXrBd1wYoYLf5YvdOhCVH0ZwGNigXqA100DudDLUCVJd6u6ktSoLkCRdR+sL/dSQNqnNLDrgXinyWkEZ8jbaqCa2zZW2NWDcVQ1lbKAj0XTLSj1wQKajBhDFYulWHwRvL/FG1MtD21ZnCNQ2BB8kMiApvePozTqzQW4DPdYpQZ7mmSV+OovLE7afOdo2jDMs6MqJjsKBq0XIybiixJPBkxPysl6p+du6NF+n5YDac=~-1~-1~-1; cart_api=v2");
        myHeaders.append("env", "prod");
        myHeaders.append("Host", "www.carrefour.pk");
        myHeaders.append("lang", "en");
        myHeaders.append("langCode", "en");
        myHeaders.append("newrelic", "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMzNTU3MjAiLCJhcCI6Ijk3Njc0NDUxOCIsImlkIjoiMDNjNzczZjkzMjBlOTA3ZCIsInRyIjoiMzRkZjNjZmRlZGI2OTU2OTZjOTgxZDViMDc5ZTcxZDAiLCJ0aSI6MTcwODkyMzgyMDY1M319");
        myHeaders.append("Referer", "https://www.carrefour.pk/mafpak/en/");
        myHeaders.append("Sec-Fetch-Dest", "empty");
        myHeaders.append("Sec-Fetch-Mode", "cors");
        myHeaders.append("Sec-Fetch-Site", "same-origin");
        myHeaders.append("storeId", "mafpak");
        myHeaders.append("token", "xsGhcf9a3FqexlEYL0Fn9BgLqdE");
        myHeaders.append("traceparent", "00-34df3cfdedb695696c981d5b079e71d0-03c773f9320e907d-01");
        myHeaders.append("tracestate", "3355720@nr=0-1-3355720-976744518-03c773f9320e907d----1708923820653");
        myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0");
        myHeaders.append("userId", "anonymous");
        myHeaders.append("X-Requested-With", "XMLHttpRequest");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://api-prod.retailsso.com/v1/frame/stores/country-details", requestOptions)
            .then((response) => response.json())
            .then((result) => setCountryList(result.data))
            .catch((error) => console.error(error));
    }




    return (
        <header className=' pt-2 dark:bg-gray-800 overflow-x-hidden'>
            <div className='min-h-[60px] m-0 p-0'>
                <nav className=''>
                    <div className='grid  sm:grid-cols-12'>

                        <div className=' flex items-center justify-start pl-2  sm:col-span-2'>
                            <div className='flex items-center ml-4 '
                            >
                                <Logo width='' />
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='urdu-font font-bold text-sm text-[#0e5aa7] dark:text-white'>عبدالباسط</div>
                                    <div className='font-serif font-bold text-sm text-[#0e5aa7] dark:text-white'>AbdulBasit</div>
                                </div>
                            </div>

                        </div>

                        <div className='sm:col-span-4 flex items-center relative '>

                            <input type="text" className='w-full h-10 pl-4  rounded-3xl bg-gray-100' placeholder="Search" />

                        </div>

                        <div className=' sm:col-span-2'>
                            <div className='w-full h-full ml-14 flex items-center gap-2'>
                                <div>
                                    <img className='w-7 h-7 mix-blend-color-burn dark:mix-blend-lighten' src="/src/assets/pngwing.com.png" alt="" />
                                </div>
                                <div>
                                    <h4 className='font-sans text-[#0e5aa7] dark:text-white'>Deliver to</h4>
                                    <h4 className=' font-sans font-bold  text-[#0e5aa7] dark:text-white'>Islamabad - Pakistan</h4>
                                </div>
                            </div>
                        </div>

                        <div className=' sm:col-span-2  flex items-center ml-14 '>
                            <div className='flex items-center gap-2'>
                                <img className='h-7 w-7' src="/src/assets/usericon.png" alt="" />
                                <h3 className='font-sans text-[#0e5aa7] dark:text-white'>Login & Register</h3>
                            </div>
                        </div>

                        <div className=' sm:col-span-1 flex items-center '>
                            <ThemeBtn />
                            <button onClick={displayCountry}>
                                <div className='flex items-center hover:cursor-pointer ml-7'>
                                    <img className='w-8' src={flag ? flag : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Pakistan.png/800px-Flag_of_Pakistan.png?20220301231824"} alt="" />

                                    <img className='w-8 h-8' src="/src/assets/dropdown-arrow_10017916.png" alt="" />

                                </div>
                            </button>
                        </div>

                        <div className='sm:col-span-1 relative flex items-center left-10 hover:cursor-pointer'>
                            <div className='relative'>
                                <Link to={'cart'} >
                                    <div className='w-full h-full  '>
                                        <img className='w-9 ' src="/src/assets/cart.png" alt="" />
                                    </div>
                                    <div className='h-full w-full absolute top-0 right-0'>
                                        <span className='ml-8 text-red-600 font-sans font-bold absolute'>{cartList}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                    </div>


                </nav>
            </div>

            {/* lower header */}

            <div className='w-full h-16 '>
                <nav>
                    <div className='flex items-center h-16 '>
                        <div className='flex items-center flex-wrap '>
                            {itemListData.length > 0 ? <Nav data={itemListData}></Nav> : null}


                        </div>
                    </div>
                </nav>
                {/* {itemListData.length > 0 && (
                <div className={`w-[97%] h-svh mx-4 overflow-x-hidden ${hideList0}` }>
                    <ul>
                        {
                            
                            itemListData[selectedMenuItem].children.map((d, k) => {
                                return (
                                    <li key={k} >
                                        <div className='w-1/4 h-10 border-b-2  flex items-center justify-center cursor-pointer text-sm text-gray-500 hover:text-black hover:text-[15px] transition-all duration-200'
                                        
                                        >
                                            <p>{d.title}</p>
                                        </div>
                                    </li>

                                )
                            })
                        }

                    </ul>
                </div>)} */}

                {open &&
                    <Country data={countryList} />
                }


            </div>

        </header>
    )
}

export default Header