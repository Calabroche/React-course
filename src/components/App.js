import Banner from './Banner'
import logo from '../Assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'
import { useState } from 'react' //ici j'ai importé useState depuis cart.js afin de pouvoir le reutiliser hors local//

function App() {
    const [cart, updateCart] = useState([])
    
    return (
        <div>
            
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>


            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>

            <Footer />

        </div>
    )
}

export default App
