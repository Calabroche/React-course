import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true) 

	const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price,0) //dans le panier le total se fait en faisant l'acc(umulation) de la quantite $ prix//


	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])


	useEffect(() => {
		alert('Bienvenue dans La maison jungle')
	}, [])

	useEffect(() => {
		alert(`J'aurai ${total}€ à payer 💸`)
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>

			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>

			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>

					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div>
								{name} {price}€ x {amount}  {/*ici on aura dans le panier le nom avec le prix X la quantité*/}
							</div>
						))}
					</ul>

					<h3>Total :{total}€</h3>

					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (<div>Votre panier est vide</div>)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button className='lmj-cart-toggle-button'onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
		</div>
	)

}

export default Cart