import '../styles/Categories.css'

// Ci-dessous se trouve mon travail

// function Categories({ setActiveCategory, categories, activeCategory }) {


//     return(
    
//     <div className='lmj-cate'>

//         <select>
//           <option value="classique">classique</option>
//           <option value="extérieur">extérieur</option>
//           <option selected value="plante grasse">plante grasse</option>
//         </select>

//         <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
//     </div>
// )  
     
// }
// export default Categories

// si dessous se trouve la correction

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories