export function Header(item) {
	const head = document.createElement('div')
	const nav_left = document.createElement('nav')
	const nav_middle = document.createElement('nav')
	const nav_right = document.createElement('nav')
	const img_logo = document.createElement('img')
	const btn_catalog = document.createElement('button')
	const form = document.createElement('form')
	const inp_search = document.createElement('input')
	const search_ico_div = document.createElement('div')
	const img_search = document.createElement('img')
	const div_userbox = document.createElement('div')
	const div_savebox = document.createElement('div')
	const div_binbox = document.createElement('div')

	const user_box_img = document.createElement('img')
	const span_enter = document.createElement('span')
	const save_box_img = document.createElement('img')
	const span_save_box = document.createElement('span')
	const bin_box_img = document.createElement('img')
	const span_bin_box = document.createElement('span')

	head.classList.add('head')
	nav_left.classList.add('left')
	nav_middle.classList.add('middle')
	nav_right.classList.add('right')
	btn_catalog.classList.add('catalog')
	search_ico_div.id = 'search_ico'

	inp_search.type = 'text'
	inp_search.placeholder = 'Искать товары'
	inp_search.name = 'search'
	inp_search.id = 'search'

	img_logo.src = '/logo.svg'
	img_logo.alt = 'logo'

	img_search.src = '/search.svg'
	img_search.alt = 'search'

	btn_catalog.innerHTML = 'Каталог'

	div_userbox.classList.add('user_box')
	div_savebox.classList.add('save_box')
	div_binbox.classList.add('bin_box')

	span_enter.classList.add('enter')
	span_save_box.classList.add('save')
	span_bin_box.classList.add('bin')

	user_box_img.src = '/user.svg'
	user_box_img.alt = 'user'

	save_box_img.src = '/save.svg'
	save_box_img.alt = 'save'

	bin_box_img.src = '/bin.svg'
	bin_box_img.alt = 'bin'

	span_enter.innerHTML = 'Войти'
	span_save_box.innerHTML = 'Избранное'
	span_bin_box.innerHTML = 'Корзина'

	head.append(nav_left, nav_middle, nav_right)
	nav_left.append(img_logo, btn_catalog)
	nav_middle.append(form)
	form.append(inp_search, search_ico_div)
	search_ico_div.append(img_search)
	nav_right.append(div_userbox, div_savebox, div_binbox)
	div_userbox.append(user_box_img, span_enter)
	div_savebox.append(save_box_img, span_save_box)
	div_binbox.append(bin_box_img, span_bin_box)

	div_savebox.onclick = () => {
		location.href = '/pages/selected/'
	}
	div_binbox.onclick = () => {
		location.href = '/pages/korzina/'
	}

	
	

	return head
}
