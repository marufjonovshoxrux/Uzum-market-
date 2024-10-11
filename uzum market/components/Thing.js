export function Thing(item) {
	const shop_thing = document.createElement('div')
	const img_thing = document.createElement('div')
	const text_thing = document.createElement('div')

	const img_like = document.createElement('img')
	const img_photo = document.createElement('img')
	const div_for_img = document.createElement('div')

	const name_thing = document.createElement('span')
	const rassrochka_thing = document.createElement('span')
	const price_fake = document.createElement('span')
	const one_line = document.createElement('div')
	const really_price = document.createElement('span')
	const img_basket = document.createElement('img')

	shop_thing.classList.add('shop_thing')
	img_thing.classList.add('img_thing')
	text_thing.classList.add('text_thing')
	one_line.classList.add('one_line')
	name_thing.classList.add('name_thing')
	rassrochka_thing.classList.add('rassrochka_thing')
	price_fake.classList.add('price_fake')
	really_price.classList.add('really_price')
	img_basket.classList.add('basket')
	img_like.classList.add('like')
	img_photo.classList.add('photo')
	div_for_img.classList.add('div_for_img')

	img_like.src = '/like.svg'
	img_like.alt = 'like'
	img_like.id = 'like'

	img_photo.src = item.thumbnail
	img_photo.alt = item.title

	img_basket.src = '/basket.svg'
	img_basket.alt = 'basket'

	name_thing.innerHTML = item.title
	rassrochka_thing.innerHTML = 'Rating ' + item.rating
	price_fake.innerHTML = item.discountPercentage + '$'
	really_price.innerHTML = item.price + '$'

	shop_thing.append(img_thing, text_thing)
	img_thing.append(img_like, div_for_img)
	div_for_img.append(img_photo)

	text_thing.append(name_thing, rassrochka_thing, price_fake, one_line)
	one_line.append(really_price, img_basket)

	img_photo.onclick = () => {
		location.assign(`/pages/product/?id=` + item.id)

	}
	text_thing.onclick = () => {
		// location.href = '/pages/product/?id=' 
		location.assign(`/pages/product/?id=` + item.id)

	}

	
	img_basket.onmouseover = () => {
		img_basket.style.backgroundColor = '#acacac'
		img_basket.style.borderRadius = '50%'
	}

	img_basket.onmouseout = () => {
		img_basket.style.backgroundColor = 'white'
	}

	img_like.onclick = () => {
		img_like.src = '/likeonclick.svg'
	}

	return shop_thing
}
