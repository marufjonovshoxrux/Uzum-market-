import { Navigation, Pagination } from 'swiper/modules'
import { Header } from './components/Header.js'
import { reload } from './lib/utils.js'
import { Thing } from './components/Thing.js'
import { ApiCall } from './lib/http.request.js'

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)
const products = await apiCall.getData('/products')
const data = products.slice(0, 10)
const sale_products = products.slice(10,20)
const good_products = products.slice(20,30)


const plus_twenty = document.querySelector('#plus_twenty')
const close_twenty = document.querySelector('#close_twenty')
const sale_thing = document.querySelector('.sale_thing')
const promokod = document.querySelector('#promokod')
const good_price = document.querySelector('#good_price')
const good_thing = document.querySelector('.good_thing')





const header = document.querySelector('header')
const swiperslide_one = document.querySelector('#swiper-slide_one')
const swiperslide_two = document.querySelector('#swiper-slide_two')
const swiperslide_three = document.querySelector('#swiper-slide_three')
const box_thing = document.querySelector('.box_thing')

good_price.onclick = () => {
	location.href = 'https://uzum.uz/ru/category/vygodnaya-rassrochka--545'

}
promokod.onclick = () => {
	location.href = 'https://uzum.uz/ru/category/luchshaya-cena--502'
}
swiperslide_one.onclick = () => {
	location.href =
		'https://uzum.uz/ru/product/motornoe-maslo-shell-helix-ultra-ect-403948?srsltid=AfmBOorQ2h0DiAcD3QN521Q3Apu1MAVCK01cCC1NERTKCKY7iWFwYjkZ'
}

swiperslide_two.onclick = () => {
	location.href =
		'https://uzum.uz/ru/product/muka-pshenichnaya-melek-pervyj-sort-1-829879?srsltid=AfmBOorapPrSJ0OZqYvMZImrsYO1JEK0c21QKlrDAUXTAnID9fYjFQAV'
}

swiperslide_three.onclick = () => {
	location.href =
		'https://uzum.uz/ru/product/smartfon-xiaomi-redmi-900423?srsltid=AfmBOooxHvUcCnANgrCCQ2Zdh3oRy7bBjE4VtaocMMmvhZlbG7Q-3WnC'
}
new Swiper('.swiper', {
	module: [Navigation, Pagination],

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

plus_twenty.onclick = () => {
	reload(products, box_thing, Thing)

	plus_twenty.style.display = 'none'
	close_twenty.style.display = 'block'
}

close_twenty.onclick = () => {
	reload(data, box_thing, Thing)

	close_twenty.style.display = 'none'
	plus_twenty.style.display = 'block'
}

reload(good_products, good_thing, Thing)
reload(sale_products, sale_thing, Thing)
reload(data, box_thing, Thing)
reload([{}], header, Header)
