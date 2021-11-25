import monstera from '../Assets/monstera.jpg' //ok
import basil from '../Assets/basil.jpg' //ok
import cactus from '../Assets/cactus.jpg'//ok
import calathea from '../Assets/calathea.jpg'//ok
import lyrata from '../Assets/lyrata.jpg' //ok
import mint from '../Assets/mint.jpg'//ok
import olivier from '../Assets/olivier.jpg' //ok
import succulent from '../Assets/succulent.jpg' //ok
import pothos from '../Assets/pothos.jpg' //ok


export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',//ok
		light: 1,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata', //ok
		category: 'classique',
		id: '2ab',
		light: 2,
		water: 2,
		cover: lyrata,
		price: 30
	},
	{
		name: 'pothos argenté',//ok
		category: 'classique',
		id: '3sd',
		light: 3,
		water: 2,
		isSpecialOffer: true,
		cover: pothos,
		price: 10
	},
	{
		name: 'Cactus',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: cactus,//ok
		price: 17
	},
	{
		name: 'olivier', //ok
		category: 'extérieur',
		id: '5pl',
		light: 1,
		water: 2,
		cover: olivier,
		price: 13
	},
	{
		name: 'Menthe',
		category: 'extérieur',
		id: '6uo',
		light: 3,
		water: 3,
		cover: mint,
		price: 24,
	},
	{
		name: 'basilique',//ok
		category: 'extérieur',
		id: '7ie',
		light: 1,
		water: 1,
		isSpecialOffer: true,
		cover: basil,
		price: 12,
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 3,
		water: 2,
		isSpecialOffer: true,
		cover: calathea,//ok
		price: 19
	},
	{
		name: 'succulente',//ok
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 10
	}
]