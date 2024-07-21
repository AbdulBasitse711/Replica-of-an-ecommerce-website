import { useContext, useState } from "react"
import FlagContext from '../../contexts/FlagContext'

function CartedProducts() {
    const { cartArray, setCartList, setItemQuantity } = useContext(FlagContext)
    let [removingItem, setRemovingItem] = useState(false)
    const [updatedCartArray, setUpdatedCartArray] = useState([]);

   




    function removeItemFromCart(data) {
        let index = cartArray.indexOf(data)
        cartArray.splice(index, 1)
        setUpdatedCartArray(cartArray);
        alert("Item removed from cart")
        setRemovingItem((prev) => !prev);
        setCartList(cartArray.length)

    }


    return (
        <>
            {removingItem ? (
                <div>
                    {
                        updatedCartArray.map((d, k) => (
                            <div key={k} className=" w-full h-auto bg-white p-2 pb-3 mb-3 rounded-xl shadow-md">
                                <div className="flex">
                                    <div className=" pl-3">
                                        <img src={d.image}
                                            className="w-14 "
                                            alt="" />
                                    </div>
                                    <div className="w-4/6 flex items-center pl-3">
                                        <p className="text-gray-600">{d.Name}</p>
                                    </div>
                                    <div className=" w-2/6 h-auto flex items-center justify-end pr-2">
                                        <p className="font-bold">PKR {d.price * d.quantity}.00</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className='w-full h-12 flex justify-evenly  mt-4'>
                                        <div className="bg-white w-2/6 rounded-lg cursor-pointer border-2 shadow-md flex items-center justify-center text-red-700">
                                            <button
                                                className="w-full h-full"
                                                onClick={() => removeItemFromCart(d)}>
                                                Remove item
                                            </button>
                                        </div>
                                        <div className='flex items-center justify-center bg-white w-2/6 rounded-lg cursor-pointer border-2 shadow-md'>
                                            <button className='w-1/2 text-xl'
                                                disabled={d.quantity == 1}
                                                onClick={() => {
                                                    while (d.quantity > 1) {
                                                        d.quantity--
                                                    }
                                                    setItemQuantity(d.quantity)
                                                }}
                                            >-</button>
                                            <span className='text-xl mb-1'>
                                                {d.quantity}
                                            </span>
                                            <button className='w-1/2 text-xl'
                                                onClick={() => {
                                                    d.quantity++
                                                    setItemQuantity(d.quantity)
                                                }
                                                }
                                            > + </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}


                </div>
            )
                : (

                    <div>
                        {
                            cartArray.map((d, k) => (
                                <div key={k} className=" w-full h-auto bg-white p-2 pb-3 mb-3 rounded-xl shadow-md">
                                    <div className="flex">
                                        <div className=" pl-3">
                                            <img src={d.image}
                                                className="w-14 "
                                                alt="" />
                                        </div>
                                        <div className="w-4/6 flex items-center pl-3">
                                            <p className="text-gray-600">{d.Name}</p>
                                        </div>
                                        <div className=" w-2/6 h-auto flex items-center justify-end pr-2">
                                            <p className="font-bold">PKR {d.price * d.quantity}.00</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className='w-full h-12 flex justify-evenly  mt-4'>
                                            <div className="bg-white w-2/6 rounded-lg cursor-pointer border-2 shadow-md flex items-center justify-center text-red-700">
                                                <button
                                                    className="w-full h-full"
                                                    onClick={() => removeItemFromCart(d)}>
                                                    Remove item
                                                </button>
                                            </div>
                                            <div className='flex items-center justify-center bg-white w-2/6 rounded-lg cursor-pointer border-2 shadow-md'>
                                                <button className='w-1/2 text-xl'
                                                    disabled={d.quantity == 1}
                                                    onClick={() => {
                                                        while (d.quantity > 1) {
                                                            d.quantity--
                                                        }
                                                        setItemQuantity(d.quantity)
                                                    }}
                                                >-</button>
                                                <span className='text-xl mb-1'>
                                                    {d.quantity}
                                                </span>
                                                <button className='w-1/2 text-xl'
                                                    onClick={() => {
                                                        d.quantity++
                                                        setItemQuantity(d.quantity)
                                                    }
                                                    }
                                                > + </button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}


                    </div>
                )}
        </>
    )
}

export default CartedProducts