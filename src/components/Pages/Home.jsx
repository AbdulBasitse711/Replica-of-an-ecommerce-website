/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import FlagContext from '../../contexts/FlagContext'
import StockingUpToDate from './HomeComponents/StockingUpToDate';
import PantryEssentials from './HomeComponents/PantryEssentials';
import PackedWithFeatures from './HomeComponents/PackedWithFeatures/PackedWithFeatures';
import ProductsYouLove from './HomeComponents/ProductsYouLove/ProductsYouLove';

function Home() {
  const { stockingUpToDateData, setStockingUpToDateData } = useContext(FlagContext);

  const { pantryEssentialsData, setPantryEssentialsData } = useContext(FlagContext);

  useEffect(() => {

    //Stocking Up To Date API
    const myHeaders = new Headers();
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Accept-Encoding", "gzip, deflate, br");
    myHeaders.append("Accept-Language", "en-US,en;q=0.5");
    myHeaders.append("appId", "Reactweb");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Cookie", "storeInfo=mafpak|en|PKR; cart_api=v2; _abck=ED4A75A37E6CB676AD7EE09669E50A54~-1~YAAQQUw5F1x5wcuNAQAAKBrM4wuD97GOyKduDfE7ij+sGkpXI27QmamQwuG7qLXzXvh7dD19y95vMIHo6vvgNzQ6wd3sBKteXr1JXuFI59iK8X+Ep+sU5tOdP4naXJFPNJuvNv3G+9Pnumf3uepjwGLZopiNSEsMPTLjxQh8VVVOOTr+FDJs5l3Cr3yt976XzSuJNzZLZHyt2HlNcs8CWsM9EgkPaRex0+Mh8jcUkzq2Zgrh1zsBpQzAlI+rMNwrLTLi+JQNEd+/v2qRkafh6age9hsn3zbOTBp4jty8GTIjNf/hjiTnyO/DvIF19+pMMa6Tf16NDAJb2fW6g37mr3+JMs51bm4kcCO4u962j+xHCZoUD/wyFi+oBog6jI3KWRLEd3C3ViMbd0bPue7TAFllA4i17RJmjZAbuA==~-1~-1~0Fn9BgLqdE; _scid_r=76133e6c-94c6-4437-b7fe-b610224a30b1; AKA_A2=A; bm_sz=1BF721E36DF32FB2ADBBE0898B0664A8~YAAQhawwF9/lotuNAQAAEaPI4xZoM41UTPRLHp1Omz8zt2tS2wp5oOHHpIwlrgwUpkacQX4B4lAK5cYkpdI+LQhFkO0uKY2ZNzC9S62vL9fWZjdvydPgykPdiPWR1DgSirFK384E2UsaeYE/e9+TDtaZ0GV9vbdhW8wNtQPViZV5KjElkZ/XP5CU9+FAOHpLgeeL7D6Vj04DpdFo+Cs7Q1Odpu3WIhNrb4ckGUJCAZNFewQP4hCia7ahg3/G1Hgw6WuF0y3zZAjD2HgdPeA6iODL5GYHwiiMfYyd4pt9ttaL3PQX4/fFS0yfozQfpudq4h6XWXphPf2uxiMmwh0tIVUHHNYv8xJquCJnIgu+Gl5n03encU0=~4470594~3355462; page_type=home; _abck=ED4A75A37E6CB676AD7EE09669E50A54~-1~YAAQKkw5F1J3iBSOAQAAcmFdFwvG3u91Xa8nvzoAK7TC2m3kht3pOj5Acss/FCjXJeu1RFl29onE3X087Xx04DT7+f8XN5AJRN0xviOt4+EP0ArNlb/YYzSjbEAl3beBbGE+XFaxAIUJkeCBycPsa2Vnj/GgobkES94jsDbjYhUcwyhkbejj4+x/e0lWEI8IbOu4FCi4AjEnAfLzLFHTCCTUztmReyqVqeEcm5TwE+Fx0OhbX+H4uR/LUQxQ/YcaC1lzivbTx3ld0kc9QhDsYe0T+OEQSiM+3bBBBqs2ymQc8zybnk83oqkZqe5A1D1Pa79EGBhe8cu4mfmLAd9FoKC6q0liT5XNLc+tYMe0Fu1yT/0bUsjerPtZgb3ReqPJTjs=~-1~-1~0Fn9BgLqdE; cart_api=v2 ");
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

    const requestOptions1 = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://www.carrefour.pk/v1/frame/page-components?ids=46943", requestOptions1)
      .then((response) => response.json())
      .then((result) => setStockingUpToDateData(result.data))
      .catch((error) => console.error(error));

    //Pantry Essentials API


    const myHeadersPantryEssential = new Headers();
    myHeadersPantryEssential.append("Accept", "*/*");
    myHeadersPantryEssential.append("Accept-Encoding", "gzip, deflate, br");
    myHeadersPantryEssential.append("Accept-Language", "en-US,en;q=0.5");
    myHeadersPantryEssential.append("appId", "Reactweb");
    myHeadersPantryEssential.append("Connection", "keep-alive");
    myHeadersPantryEssential.append("Cookie", "storeInfo=mafpak|en|PKR; cart_api=v2; _abck=ED4A75A37E6CB676AD7EE09669E50A54~-1~YAAQQUw5Fx/2PCWOAQAAo7VxLAt/qyhhhCUE69S+YJMOWWRkjWbYffluzvuJjibqklj3v4RoS6CtOD8UIeQtR8vZk+l6VtkJixL6Wr6VI6ApdIA5D0+s0DoSqwr1GlevKoTxEP8wT+Ax2MS5MmTIRVlBKkrv0tinK5gbZUcYN5KT5tor8AJW5KSCZIFHMauODq+08orJbm4L14LwIHkGn34RPO839eJ8YCyGPlGWiRp6vnx6FyXw8eobsIiGhSicFSR3IdBj0HEdCpntMGBhOIsRqK8yHhVYCzg9T5FV+jLSS+PQ+XexM91ABfQs6il2/0nyWAgg/N/KeqEaZJS0Xy3EBm9QJ1P2ciE/Ug67khdEZJGNbxMFU9BWt4qWRi5z0ZMBzIK6pflP5wpctgZhPKDkpOy9Rb5yAs+J2Q==~-1~-1~-ouskShSuXV2Ie9FV3u4oVkHKRJ5ImskuCnrLDR0RMnjrRt2L3iOcwV0cnhRiuOIrRgSl4PPI8WRV9ZgqTr1CxblCrbqE67Yp9UlVnzEHkLyUd0sd4=~3162679~4470069; ab.storage.sessionId.e6577fac-30b0-4270-a5df-788ef16dc4cd=%7B%22g%22%3A%22094ed093-0e27-31f8-d847-4911c81b609f%22%2C%22e%22%3A1710144345032%2C%22c%22%3A1710142545006%2C%22l%22%3A1710142545032%7D; ab.storage.deviceId.e6577fac-30b0-4270-a5df-788ef16dc4cd=%7B%22g%22%3A%22e050edf6-0d87-0ee9-38b0-c0df9ab8cfdd%22%2C%22c%22%3A1710135007065%2C%22l%22%3A1710135007065%7D; page_type=home; bm_sz=35250511CA76C21F9B4395B57F1DF97B~YAAQxW4/FyLkGuaNAQAAksmQLBfHouHYBWnq7REaVQhA1qHtFHEltprtkIsUsV9AWdtIKFLvsIAMCA9lk2cVBHoSJcuyGsK+HBfM8dBJzjO1jHACBStbt6rWyIX0kqnFm6C0PwBqxBid8+7KVD20X82BD3r4I/Tb6NNOtSY854vlRgvuzs9iP/bF/nYKsHnShNhmtMAOAdiKMU/i/MizrFhSAFLqbdhDjqEML7NGHVAAZjWK635fVHD011UaLYKL8LGbdPnOQDg9DOkWo0aSaK4RPQ6wTSz/gPdYfxzuOoYLJyWyobq/0ODv6NTSbUT5G1LpuFaZBmplsFezsamF82NQInyg50iztPQlf/I=~3223609~3229234; cart_api=v2");
    myHeadersPantryEssential.append("env", "prod");
    myHeadersPantryEssential.append("Host", "www.carrefour.pk");
    myHeadersPantryEssential.append("lang", "en");
    myHeadersPantryEssential.append("langCode", "en");
    myHeadersPantryEssential.append("newrelic", "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjMzNTU3MjAiLCJhcCI6Ijk3Njc0NDUxOCIsImlkIjoiOTFkMGFkZmE4MWM2YTM0YSIsInRyIjoiNWQ5YmRlMTM2ODkzYzU2NjYzZjU3ZDU4OWI0NWM3ZjAiLCJ0aSI6MTcxMDE0MjYzNTA2OH19");
    myHeadersPantryEssential.append("Referer", "https://www.carrefour.pk/mafpak/en/");
    myHeadersPantryEssential.append("Sec-Fetch-Dest", "empty");
    myHeadersPantryEssential.append("Sec-Fetch-Mode", "cors");
    myHeadersPantryEssential.append("Sec-Fetch-Site", "same-origin");
    myHeadersPantryEssential.append("storeId", "mafpak");
    myHeadersPantryEssential.append("token", "aOTnKRB7qXnobya0Pn_-DppGGlE");
    myHeadersPantryEssential.append("traceparent", "00-5d9bde136893c56663f57d589b45c7f0-91d0adfa81c6a34a-01 ");
    myHeadersPantryEssential.append("tracestate", "3355720@nr=0-1-3355720-976744518-91d0adfa81c6a34a----1710142635068");
    myHeadersPantryEssential.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0");
    myHeadersPantryEssential.append("userId", "anonymous");
    myHeadersPantryEssential.append("X-Requested-With", "XMLHttpRequest");
    myHeadersPantryEssential.append("Cache-Control", "no-cache");
    myHeadersPantryEssential.append("intent", "STANDARD");
    myHeadersPantryEssential.append("Pragma", "no-cache");
    myHeadersPantryEssential.append("TE", "trailers");

    const requestOptions2 = {
      method: "GET",
      headers: myHeadersPantryEssential,
      redirect: "follow"
    };

    fetch("https://www.carrefour.pk/api/v4/relevance/keyword?keyword=*&lang=en&placements=home_page.web_rank1|home_page.web_rank8|home_page.web_rank6|home_page.web_rank9|home_page.web_rank7|home_page.web_rank3|home_page.web_rank10|home_page.web_rank4|home_page.web_rank5&displayCurr=PKR&latitude=31.495515027934786&longitude=74.35870880511509&needOOSProducts=", requestOptions2)
      .then((response) => response.json())
      .then((result) => setPantryEssentialsData(result.placements))
      .catch((error) => console.error(error));
  }, [])

  return (
    <>
      <StockingUpToDate data={stockingUpToDateData} />
      <PantryEssentials data={pantryEssentialsData} />
      <PackedWithFeatures data={pantryEssentialsData} />
      <ProductsYouLove data={pantryEssentialsData} />
    </>
  )
}

export default Home