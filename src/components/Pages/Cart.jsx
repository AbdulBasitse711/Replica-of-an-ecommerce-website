import CartedProducts from "./CartedProducts"
import { useContext } from "react"
import FlagContext from '../../contexts/FlagContext'

function Cart() {
    const { cartArray, total, setTotal } = useContext(FlagContext)
    let totalPrice = 0;
    let cartLength = cartArray.length;
    cartArray.map((d) => totalPrice += d.price * d.quantity)
    setTotal(totalPrice)


    return (
        <>
            {
                cartLength > 0 ? (
                    <div className="w-full h-auto bg-gray-100 flex justify-evenly p-4 gap-4">
                        <div className="w-1/2 h-auto rounded-lg ">
                            <div className="mb-3">
                                <p className="font-bold text-lg">Your Shipment</p>
                                <p className="font-thin">Sold</p>
                            </div>
                            <div className="shadow-lg bg-gray-50 rounded-lg py-2">
                                <div className='flex w-full h-12  px-4'>
                                    <div className='w-full h-full rounded-lg flex items-center'>
                                        <img src="https://www.svgrepo.com/show/22694/delivery-truck.svg"
                                            className='w-9 h-9 ml-3 '
                                            alt=""
                                        />
                                        <p className=' font-semibold ml-5'>Standard Tomorrow 10 AM - 11 PM</p>
                                    </div>
                                </div>
                                <div className="px-8 pt-2">
                                    <CartedProducts />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 h-auto mt-16  rounded-lg ">
                            <p className="ml-10">Order Summary</p>
                            <div className="ml-10 pt-2">
                                <div className="w-full h-auto bg-gray-50 p-3 rounded-lg shadow-lg flex gap-4 items-center">
                                    Items
                                    <p className="text-sm font-thin">{cartArray.length} items in the cart</p>
                                </div>
                                <div className="w-full h-auto bg-gray-50 p-3 rounded-lg shadow-lg flex gap-4 items-center">
                                    Shipment Charges
                                    <p className="text-sm font-thin">{cartArray.length * 100} (PKR 100 on each product)</p>
                                </div>
                                <div className="w-full h-auto bg-gray-50 p-3 rounded-lg shadow-lg flex gap-4 items-center">
                                    Subtotal
                                    <p className="font-bold">PKR {total}.00</p>
                                    <p className="text-sm font-thin">(inclusive of VAT)</p>
                                </div>
                                <div className="w-full h-auto bg-gray-50 p-3 rounded-lg shadow-lg flex gap-4 items-center">
                                    Total
                                    <p className="font-bold">PKR {total + cartArray.length * 100}.00</p>
                                </div>
                            </div>
                            <div className="ml-10 pt-6">
                                <p className="text-lg font-semibold text-center">Available Payment Methods</p>
                                <div className="flex items-center justify-center pt-3 gap-2">
                                    <img className="w-10 h-10 rounded-full" src="https://play-lh.googleusercontent.com/ahBZCpNP4elK4uI-gImTdi7pLpEwZUMLFngwCfWWHlzOI1GZqwipiv_ekRT--mDcVg4" alt="" />
                                    <img className="w-10 h-10 rounded-full" src="https://www.brandpoint.com/wp-content/uploads/2022/06/visa-log.jpg" alt="" />
                                    <img className="w-10 h-10 rounded-full" src="https://cdn.vox-cdn.com/thumbor/FtAV-Waa1rTPheAkxv3o4i0MVf0=/0x0:1000x1000/1200x800/filters:focal(421x430:581x590)/cdn.vox-cdn.com/uploads/chorus_image/image/62800797/Mastercard_logo.0.jpg" alt="" />
                                    <p className="font-thin text-sm">Cash on
                                        <p className="font-thin">Delivery</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>) :
                    <div className="w-full h-[60vh] bg-gray-100 flex items-center justify-center ">
                        <div>
                            <p className="text-2xl text-center font-thin">Cart is empty! Please add some items</p>
                            <div className="flex items-center justify-center">
                                <img src="../../../src/assets/emptycCart.png" alt=""
                                    className=" h-60 w-60" />
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Cart