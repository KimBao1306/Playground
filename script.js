const header = document.querySelector('.header');
const headerInner = document.querySelector('.header__inner');
const menuList = document.querySelector('.header__menu-list');
const menuBtn = document.querySelector('.menu-bars');

menuBtn.addEventListener('click', () => {
	if (!menuBtn.classList.contains('move')) {
		header.classList.add('res');
		headerInner.classList.add('res__inner');
		menuList.classList.add('res__menu-list');
		menuBtn.classList.add('move');
	} else {
		header.classList.remove('res');
		headerInner.classList.remove('res__inner');
		menuList.classList.remove('res__menu-list');
		menuBtn.classList.remove('move');
	}
});
