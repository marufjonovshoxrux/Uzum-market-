import { Navigation, Pagination } from 'swiper/modules'
import { Header } from './components/Header.js'
import { reload } from './lib/utils.js'

const header = document.querySelector('header')
const swiperslide_one = document.querySelector('#swiper-slide_one')
const swiperslide_two = document.querySelector('#swiper-slide_two')
const swiperslide_three = document.querySelector('#swiper-slide_three')

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

reload([{}], header, Header)
