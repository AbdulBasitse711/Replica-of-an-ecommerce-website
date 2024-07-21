/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  const [footerdata, setFooterData] = useState([]);

  useEffect(() => {
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

    fetch("https://api-prod.retailsso.com/v1/frame/stores/mafpak/footers?lang=en&latitude=31.495515027934786&longitude=74.35870880511509&displayCurr=PKR", requestOptions)
      .then((response) => response.json())
      .then((result) => setFooterData(result.data.list_link))
      .catch((error) => console.error(error));
  }, [])
  return (
    <>
      <div className='w-full h-12  flex items-center justify-center bg-[#0a4a89]'>
        <div>
          <Link to={'/'}>
            <p className='text-white'>BACK TO HOME</p>
          </Link>
        </div>
      </div>
      <div className='bg-[#0e63b8]  h-96 w-full flex'>
        <div className=' w-1/5 h-5/6 '>
          <div className='flex items-center ml-10 mt-8 '
          >
            <img src="https://as1.ftcdn.net/v2/jpg/01/74/13/70/1000_F_174137013_rwWR9yjvQEfIucgkmI70YAIwG7XXDn3v.jpg" className='h-16' alt="" />
            <div className='flex flex-col justify-center items-center bg-white py-3 pr-2'>
              <div className='urdu-font font-bold text-sm text-[#0e63b8]'>عبدالباسط</div>
              <div className='font-serif font-bold text-sm text-[#0e63b8]'>AbdulBasit</div>
            </div>
          </div>
          <div className=' p-4 mt-6 pl-8'>
            <div>
              <div>
                <p className='text-white text-sm'>Stay in touch with us</p>
              </div>
            </div>
            <div className='w-full pt-4 flex gap-3'>
              <div className=' cursor-pointer'>
                <img src="https://framestrapimaster.blob.core.windows.net/assets/images/Facebook_0ddadaef3b_ea343675c7_1d547c29f0.svg" alt="" />
              </div>
              <div className=' cursor-pointer'>
                <img src="	https://framestrapimaster.blob.core.windows.net/assets/images/Instagram_88847d8ba3_d534f2d78f_e44245455c.svg" alt="" />
              </div>
              <div className=' cursor-pointer'>
                <img src="https://framestrapimaster.blob.core.windows.net/assets/images/Twitter_44f3c5fb21_8a3f98290d_3b4928c432.svg" alt="" />
              </div>
              <div className=' cursor-pointer'>
                <img src="https://framestrapimaster.blob.core.windows.net/assets/images/Youtube_9cc9f992ab_ad97908e18_fcde6cdecc.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='w-4/5 h-5/6 flex'>
          <div className=' pt-8 h-full w-1/3'>
            <ul className='w-full h-full text-white'>
              {footerdata.length > 0 && footerdata.map((d, k) => (
                <li 
                key={k}
                className='  text-lg leading-10 '
                >
                  {k==0 && d.title}
                  {k === 0 && d.text_link && d.text_link.length > 0 && (
                    <ul>
                      {d.text_link.map((list, id) => (
                        <li 
                        key={id}
                        className='cursor-pointer hover:underline leading-6 text-sm'
                        >{list.title}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='pt-8 h-full w-1/3'>
          <ul className='w-full h-full text-white'>
              {footerdata.length > 0 && footerdata.map((d, k) => (
                <li 
                key={k}
                className=' text-lg leading-10'
                >
                  {k==1 && d.title}
                  {k === 1 && d.text_link && d.text_link.length > 0 && (
                    <ul>
                      {d.text_link.map((list, id) => (
                        <li 
                        key={id}
                        className='cursor-pointer hover:underline leading-6 text-sm'
                        >{list.title}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='pt-8 h-full w-1/3'>
          <ul className='w-full h-full text-white'>
              {footerdata.length > 0 && footerdata.map((d, k) => (
                <li 
                key={k}
                className=' text-lg leading-10'
                >
                  {k==2 && d.title}
                  {k === 2 && d.text_link && d.text_link.length > 0 && (
                    <ul>
                      {d.text_link.map((list, id) => (
                        <li 
                        key={id}
                        className='cursor-pointer hover:underline leading-6 text-sm'
                        >{list.title}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer