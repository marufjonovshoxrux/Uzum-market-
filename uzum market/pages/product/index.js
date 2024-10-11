import { Comment } from '../../components/Comment.js'
import { Header } from '../../components/Header.js'
import { Thing } from '../../components/Thing.js'
import { ApiCall } from '../../lib/http.request.js'
import { reload } from '../../lib/utils.js'

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)

const products = await apiCall.getData('/products')
const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id')

const header = document.querySelector('header')
const title = document.querySelector('title')
const name_product = document.querySelector('.name-product')
const product_image = document.querySelector('.product_img')
const people_band = document.querySelector('.people_band')
const lenght_comment = document.querySelector('.lenght_comment')
const product_comment = document.querySelector('.product-comment')
const price = document.querySelector('.price')
const rassrochka = document.querySelector('.rassrochka_span')
const info_product = document.querySelector('.info_product')
const img_1 = document.querySelector('.img-1')
const img_2 = document.querySelector('.img-2')
const img_3 = document.querySelector('.img-3')
const min_img_1 = document.querySelector('.min-img-1')
const min_img_2 = document.querySelector('.min-img-2')
const min_img_3 = document.querySelector('.min-img-3')
const see_comments = document.querySelector('.see_comments')
const not_see_comments = document.querySelector('.not_see_comments')
const product_type = document.querySelector('.product_type')
const thumbnails = document.querySelector('.thumbnails')
const save_two = document.querySelector('.save_two')
const beauty = document.querySelector('.beauty')
const furniture = document.querySelector('.furniture')
const groceries = document.querySelector('.groceries')
const fragrances = document.querySelector('.fragrances')

save_two.onclick = () => {
	save_two.innerHTML =
		'<svg data-v-04a70945="" width="20" height="20" viewBox="0 0 19 16" fill="none"xmlns="http://www.w3.org/2000/svg" alt="like" class="ui-icon "><path d="M5.45 0.169434C8.01792 0.169434 9.5 2.32178 9.5 2.32178C9.5 2.32178 10.985 0.169434 13.55 0.169434C16.205 0.169434 18.5 2.23943 18.5 5.11943C18.5 9.34995 12.0604 13.7892 9.86509 15.7297C9.65819 15.9126 9.34179 15.9126 9.13488 15.7297C6.94056 13.7903 0.5 9.34976 0.5 5.11943C0.5 2.23943 2.795 0.169434 5.45 0.169434Z" fill="#8967F0"></path></svg>'
}
if (productId) {
	await apiCall.getData(`/products/${productId}/`).then(product => {
		console.log(product)
		title.innerHTML = product.title
		name_product.innerHTML = product.title

		img_1.src = product.images[0]
		img_2.src = product.images[1]

		min_img_1.src = product.images[0]
		min_img_2.src = product.images[1]
		min_img_3.src = product.images[2]

		const rating = product.rating
		const starContainer = document.querySelector('.stars')
		starContainer.style.width = `${(rating / 5) * 100}%`
		people_band.innerHTML = rating
		lenght_comment.innerHTML = product.reviews.length + ' отзывов'
		info_product.innerHTML = product.description
		price.innerHTML = product.price + '$'
		rassrochka.innerHTML = 'от ' + product.discountPercentage + ' $/месяц'

		const comment = product.reviews
		const data = comment.slice(0, 1)
		const data_two = comment.slice(0, 2)

		if (product.images.length < 2) {
			console.log('hello world')
			thumbnails.remove()
			img_1.style.marginLeft = '200px'
		}
		min_img_1.onclick = () => {
			img_1.src = product.images[0]
			img_2.style.display = 'none'
			img_1.style.marginLeft = '200px'
		}

		min_img_2.onclick = () => {
			img_1.src = product.images[1]

			img_2.style.display = 'none'
			img_1.style.marginLeft = '200px'
		}
		min_img_3.onclick = () => {
			img_1.src = product.images[2]

			img_2.style.display = 'none'
			img_1.style.marginLeft = '200px'
		}

		see_comments.onclick = () => {
			const data_three = comment
			reload(data_three, product_comment, Comment)
			see_comments.style.display = 'none'
			not_see_comments.style.display = 'block'
		}

		not_see_comments.onclick = () => {
			reload(data, product_comment, Comment)
			reload(data_two, product_comment, Comment)

			see_comments.style.display = 'block'
			not_see_comments.style.display = 'none'
		}

		apiCall.getData(`/products?category=${product.category}`).then(res => {
			const product_categoriy = res.slice(0, 10)
			reload(product_categoriy, product_type, Thing)
			console.log(res)
		})

		reload(data, product_comment, Comment)
		reload(data_two, product_comment, Comment)
	})
}


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
