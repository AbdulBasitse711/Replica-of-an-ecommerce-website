/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import FlagContext from '../../contexts/FlagContext'
import { text } from '@fortawesome/fontawesome-svg-core';

function ProductDescription() {
    const { pantryEssentialsData, productId, productListNumber, setCartList, cartList, cartArray, cartProductIndex, setCartProductIndex, itemQuantity, setItemQuantity } = useContext(FlagContext);
    const [buttonColor, setButtonColor] = useState('bg-[#0e63b8]')
    let bgBlue = 'bg-[#0e63b8]'
    let bggray = 'bg-gray-50'
    const [textColor, setTextColor] = useState('text-white')
    const [buttonText, setButtonText] = useState('ADD TO CART')
    const [counter, setCounter] = useState(1);
    const [showCartedPrice, setShowCartedPrice] = useState('hidden');
    const [itemAddedToCart, setItemAddedToCart] = useState(false)

    

    class CartProductsArray {

        constructor(image, Name, quantity, price, productNumber) {
            this.image = image;
            this.Name = Name;
            this.quantity = quantity;
            this.price = price;
            this.productNumber = productNumber;

        }
    }

    function isPresent(arr, value) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].Name === value) return 1;
        }
        return 0;
    }

    return (
        <div className='w-full h-auto bg-gray-100'>
            <div className=' w-full h-[30rem] pt-4 flex ' >
                <div className='w-full h-full bg-gray-100 flex items-center justify-center'>
                    {pantryEssentialsData[productListNumber] &&
                        <img
                            src={pantryEssentialsData[productListNumber].recommendedProducts[productId].links.images[0] || pantryEssentialsData[productListNumber].recommendedProducts[productId].links.images[1] ? (pantryEssentialsData[productListNumber].recommendedProducts[productId].links.images[0].href.slice(0,
                                pantryEssentialsData[productListNumber].recommendedProducts[productId].links.images[0].href.length - 10
                              )) : (pantryEssentialsData[productListNumber].recommendedProducts[productId].links.images[1].href)}
                            className='h-[29rem] rounded-2xl aspect-square object-contain'
                            alt="" />
                    }

                </div>
                <div className='w-full h-full bg-gray-100'>
                    <div className='ml-7 mt-2'>
                        <h3 className='font-bold text-2xl text-gray-800 pt-3'>{pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].name}</h3>
                        {pantryEssentialsData[productListNumber] &&
                            <h4 className='text-m mt-1'>Pack size :   {pantryEssentialsData[productListNumber].recommendedProducts[productId].size}</h4>}
                        {pantryEssentialsData[productListNumber] && (pantryEssentialsData[productListNumber].recommendedProducts[productId].price.discount ?
                            <div className='flex items-center mt-2'>
                                <p className='text-2xl font-bold  text-red-600'>{pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].price.discount.formattedValue} </p>
                                <p className='text-gray-600 line-through pt-1 pl-2'>{pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].price.formattedValue}</p>
                                <span className='font-thin text-sm pl-1 pt-1'>(inc. VAT)</span>
                            </div> : <div className='flex items-center '>
                                <p className='text-xl font-bold mt-2'>{pantryEssentialsData[productListNumber].recommendedProducts[productId].price.formattedValue}</p><span className='font-thin text-sm pl-2 pt-2'>(inc. VAT)</span>
                            </div>)}
                        {pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].price.discount && <div className='w-3/4 h-8 bg-red-50 mt-6 border-red-500 border-[1px] rounded-sm text-red-500  text-left pt-[3px] p-1 flex gap-1'>
                            <p className='font-bold pl-1'>{pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].price.discount.value}% OFF</p> <span className='text-thin'>ends on {pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].price.discount.endDate}</span></div>}
                        <div>
                            <p className='pt-4 font-thin'>Sold & Delivered By {pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].offers[0].sellerName}</p>
                        </div>
                        <div className='pt-3 flex items-center gap-2'>
                            <img className='w-6 h-6 ' src="/src/assets/pngwing.com.png" alt="" />
                            <p className='text-xl font-thin'> Origin - </p>
                            <span className='text-xl'>{pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].productOrigin}</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full '>
                    <div className='ml-7 mt-2'>
                        <div className='w-full h-auto bg-gray-50 rounded-lg pb-4'>
                            <p className='p-4 text-lg font-bold'>Get it delivered by:</p>
                            <div className='flex w-full h-12  px-4'>
                                <div className='w-full h-full border-gray-300 border-[2px] rounded-lg flex items-center'>
                                    <img src="https://www.svgrepo.com/show/22694/delivery-truck.svg"
                                        className='w-9 h-9 ml-3 '
                                        alt=""
                                    />
                                    <p className='text-xl font-semibold ml-5'>Tomorrow 10 AM - 11 PM</p>
                                </div>
                            </div>
                            <div className='w-full h-12 flex justify-evenly  mt-4'>
                                <div className='flex items-center justify-center bg-white w-2/6 rounded-lg cursor-pointer border-2 shadow-md'>
                                    <button className='w-1/2 text-xl'

                                        disabled={counter == 1 && (cartArray[0] && cartArray[0].quantity == 1)}
                                        onClick={() => {

                                            if (!itemAddedToCart) {
                                                setCounter(counter > 1 && counter - 1)
                                            } else {
                                                (cartArray[0] && cartArray[0].quantity--)
                                            }


                                        }
                                        }
                                    >-</button>
                                    <span className='text-xl mb-1'>
                                        {
                                            counter
                                        }
                                    </span>
                                    <button className='w-1/2 text-xl'
                                        disabled={counter == 10}
                                        onClick={() => {
                                            if (isPresent(cartArray, pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].name) == 0) {
                                                setCounter(counter < 10 && counter + 1)
                                            } else {
                                                (cartArray[0] && cartArray[0].quantity++)
                                                setCounter(cartArray[0].quantity)
                                                alert("Item quantity updated")
                                            }
                                        }
                                        }
                                    > + </button>

                                </div>
                                <div className={isPresent(cartArray, pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].name) == 0 ? `${buttonColor} w-3/6 rounded-lg cursor-pointer shadow-md flex justify-center items-center` : `bg-gray-50 w-3/6 rounded-lg cursor-pointer shadow-md flex justify-center items-center`}>
                                    <button
                                        disabled={itemAddedToCart == true || isPresent(cartArray, pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].name) != 0}
                                        onClick={() => {
                                            showCartedPrice == 'hidden' &&
                                                setCartList(cartList + 1)
                                            setButtonColor(bggray)
                                            setTextColor('text-black')
                                            setButtonText('ITEM ADDED TO CART')

                                            if (isPresent(cartArray, pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].name) == 0) {
                                                cartArray.unshift(new CartProductsArray(
                                                    pantryEssentialsData[productListNumber].recommendedProducts[productId].links.images[0].href,

                                                    pantryEssentialsData[productListNumber].recommendedProducts[productId].name,

                                                    counter,

                                                    pantryEssentialsData[productListNumber].recommendedProducts[productId].price.discount ? pantryEssentialsData[productListNumber].recommendedProducts[productId].price.discount.price : pantryEssentialsData[productListNumber].recommendedProducts[productId].price.price,

                                                    cartProductIndex
                                                ))
                                                setItemAddedToCart(true)
                                                setCartProductIndex((prev) => prev + 1);
                                                
                                                setShowCartedPrice('block')
                                            }
                                            else {
                                                (cartArray[0] && cartArray[0].quantity++)
                                                setCounter(cartArray[0].quantity)
                                                alert("Item quantity updated")
                                            }
                                            
                                            




                                        }} className={isPresent(cartArray, pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].name) == 0 ? `w-full h-full text-white` : `w-full h-full text-black`}
                                    >
                                        {isPresent(cartArray, pantryEssentialsData[productListNumber] && pantryEssentialsData[productListNumber].recommendedProducts[productId].name) == 0 ? "ADD TO CART" : "ITEM ADDED TO CART!"}</button>
                                </div>
                            </div>
                            <div className={`text-center py-4 text-red-600 ${showCartedPrice}`}>
                                {
                                    <p>

                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='ml-5 mt-6 flex justify-between px-8 font-light text-lg'>
                        <p className='cursor-pointer'>Add to wishlist</p>
                        <p className='cursor-pointer'>Share</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductDescription