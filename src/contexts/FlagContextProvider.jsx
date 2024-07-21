import { useEffect, useState } from 'react'
import FlagContext from './FlagContext'
import { ThemeProvider } from './ThemeContext'

const FlagContextProvider = ({ children }) => {
  const [flag, setFlag] = useState('')
  const [hideList0, setHideList0] = useState('hidden')
  const [selectedMenuItem, setSelectedMenuItem] = useState(0)
  let [itemListData, setItemListData] = useState([])
  const [stockingUpToDateData, setStockingUpToDateData] = useState([]);
  const [pantryEssentialsData, setPantryEssentialsData] = useState([]);
  const [productId, setProductId] = useState(0);
  const [productListNumber, setProductListNumber] = useState(0);
  let [cartArray, setCartArray] = useState([]);
  const [cartList, setCartList] = useState(0);
  const [cartProductIndex, setCartProductIndex] = useState(0);
  const [productName, setProductName] = useState('')
  const [itemAddedToCart, setItemAddedToCart] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1)
  const [total, setTotal] = useState(1)

  //themeMode functionality

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <FlagContext.Provider value={{
      flag, setFlag,
      hideList0, setHideList0,
      selectedMenuItem, setSelectedMenuItem,
      itemListData, setItemListData,
      stockingUpToDateData, setStockingUpToDateData,
      pantryEssentialsData, setPantryEssentialsData,
      productId, setProductId,
      productListNumber, setProductListNumber,
      cartList, setCartList,
      productName, setProductName,
      cartArray, setCartArray,
      itemAddedToCart, setItemAddedToCart,
      cartProductIndex, setCartProductIndex,
      itemQuantity, setItemQuantity,
      total, setTotal,
    }}>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        {children}
      </ThemeProvider>
    </FlagContext.Provider>
  )
}

export default FlagContextProvider