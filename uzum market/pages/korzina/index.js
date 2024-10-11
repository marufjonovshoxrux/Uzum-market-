import { Header } from '../../components/Header.js'
import { ApiCall } from '../../lib/http.request.js'
import { reload } from '../../lib/utils.js'

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)
const products = await apiCall.getData('/products')

const header = document.querySelector('header')

const beauty = document.querySelector('.beauty')
const furniture = document.querySelector('.furniture')
const groceries = document.querySelector('.groceries')
const fragrances = document.querySelector('.fragrances')

beauty.onclick = () => {
	const beauty = products.slice(0, 5)
	localStorage.setItem('beauty', JSON.stringify(beauty))

	location.assign('/pages/products/')
}

fragrances.onclick = () => {
	const fragrance = products.slice(6, 11)
	localStorage.setItem('fragrances', JSON.stringify(fragrance))
	location.assign('/pages/products/')
}

furniture.onclick = () => {
	const furniture = products.slice(10, 15)
	localStorage.setItem('furniture', JSON.stringify(furniture))
	location.assign('/pages/products/')
}

groceries.onclick = () => {
	const groceries = products.slice(16, 30)
	localStorage.setItem('groceries', JSON.stringify(groceries))
	location.assign('/pages/products/')
}
reload([{}], header, Header)
