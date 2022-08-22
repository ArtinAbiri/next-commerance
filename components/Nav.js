import Link from 'next/link'
import {useContext} from 'react'
import {CartContext} from '../context/shopContext'
import MiniCart from './MiniCart'

export default function Nav() {
    const {cart, cartOpen, setCartOpen} = useContext(CartContext)

    let cartQuantity = 0
    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    })

    return (<nav className="relative px-2 py-4">

            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div style={{cursor: "pointer", display: "flex", justifyItems: "center", alignItems: "center"}}>
                        <img className='logoImg' src="/logo.svg" alt="Tailwindcss Navigation"/>
                        <h1 className='logoText' style={{paddingLeft: '15px', fontWeight: "bold"}}>TrClean</h1>
                    </div>
                </Link>
                <ul className="flex space-x-6">
                    <li><a href="/" className='font-bold'>Hem</a></li>

                    <li className="relative group">
                        <a style={{cursor: "default"}} className="mr-1 font-bold">Produkter</a>
                        <i className="fa-solid fa-chevron-down fa-2xs pt-3"/>
                        <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                            <a href="/produkter/alla">
                                <li className="text-sm hover:bg-slate-100 leading-8">Alla</li>
                            </a>
                            <a href="/produkter/bilvard">
                                <li className="text-sm hover:bg-slate-100 leading-8">Bilvård</li>
                            </a>
                            <a href="/produkter/sanering">
                                <li className="text-sm hover:bg-slate-100 leading-8">Sanering</li>
                            </a>
                            <a href="/produkter/resturang">
                                <li className="text-sm hover:bg-slate-100 leading-8">Restaurang</li>
                            </a>
                            <a href="/produkter/stad">
                                <li className="text-sm hover:bg-slate-100 leading-8">Städ</li>
                            </a>
                            <a href="/produkter/utrustning">
                                <li className="text-sm hover:bg-slate-100 leading-8">Utrustning</li>
                            </a>
                        </ul>
                    </li>
                </ul>
                <a
                    className="text-md font-bold cursor-pointer"
                    onClick={() => setCartOpen(!cartOpen)}
                >
                    Cart ({cartQuantity})
                </a>
                <MiniCart cart={cart}/>
            </div>

        </nav>)
}
