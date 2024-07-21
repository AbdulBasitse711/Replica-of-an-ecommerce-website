/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react"
import CountryData from "./CountryData"
import FlagContext from "../contexts/FlagContext";

function Country({ data }) {
  const [close, setClose] = useState(false)
  const [selectedCountry, setSelectedCountry] = 
  useState(null);
  let [countryFlag , setCountryFlag] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Pakistan.png/800px-Flag_of_Pakistan.png?20220301231824")

  const {setFlag} = useContext(FlagContext)


  const handleRadioChange = (id, flagLink) => {
    setSelectedCountry(id);
    setCountryFlag(flagLink);
  };

  useEffect(() => {
    // Find the index of "Pakistan" in the data array
    const pakistanIndex = data.findIndex((item) => item.displayName === "Pakistan");

    // Set the id of the radio button corresponding to "Pakistan" as the initial selected country
    if (pakistanIndex !== -1) {
      setSelectedCountry(`countryRadio${pakistanIndex}`);
    }
  }, [data]);

  const display = close ? "hidden" : "block"

  return (
    <div className={display}>
      <div className=" h-svh w-2/5 bg-white  text-2xl absolute top-0 right-0 overflow-x-hidden ">
        <div className="h-24 bg-white sticky top-0  shadow-lg">
            <button onClick={() => setClose((prev) => !prev)}>
          <div className=" bg-white pt-2 h-12 w-12 rounded-full absolute top-8 shadow-md">
              <span className="font-thin text-black">x</span>
          </div>
            </button>
          <div className=" flex items-center ml-14 w-full h-16 sticky top-0 bg-white transition-opacity">
            <div className="">
              <h2 className=" font-bold text-black">Localisation Setting</h2>
            </div>

          </div>

        </div>
        <div className=" h-16 flex items-center">
          <div className="pl-14">
            <p className=" text-lg text-black">Choose Country</p>
          </div>
        </div>

        <div className="px-10 bg-white">
          <form action="submit">
            <ul className=" h-2/3 ">
              {data.map((d, k) => (
                <li key={k}>
                  <CountryData
                    title={d.displayName}
                    id={`countryRadio${k}`}
                    media={d.media}
                    checked={selectedCountry === `countryRadio${k}`}
                    onChange={() =>{ 
                      handleRadioChange(`countryRadio${k}`, d.media)}
                    }
                  />
                </li>
              ))}
            </ul>
          </form>
        </div>
        <div className="w-full bg-white h-20 sticky bottom-0  shadow-2xl">
          <div className=" w-full h-20 flex items-center justify-evenly">
                <div className=" bg-white font-sans text-[#0e5aa7] p-2 px-8 rounded-lg drop-shadow-lg hover:shadow-xl text-lg">
                  <button 
                  onClick={() => setClose((prev) => !prev)}
                  >Cancel</button>
                </div>
                <div className="text-white font-sans bg-[#0e5aa7] p-2 px-8 rounded-lg drop-shadow-lg hover:shadow-xl text-lg">
                  <button onClick={() =>{ 
                    setFlag(countryFlag)
                    setClose((prev) => !prev)
                  }
                    }>Confirm</button>
                </div>
          </div>
        </div>
      </div>
    </div>
  )



}

export default Country