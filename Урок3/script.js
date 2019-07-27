const  goods = [
{title: 'Royal Canin',
img: './img/royal.jpg',
description: 'Для котят от 4 до 12 мес.',
price: '1300',
oldPrice: '1499',
availability: true
},
{title: 'Almo Nature',
img: './img/almo.jpg',
description: 'Сухой корм для котят с курицей',
price: '1100',
oldPrice: '1299',
availability: true
},
{title: 'Felix',
img: './img/felix.jpg',
description: 'Для красоты шерсти и здоровья кожи, с лососем',
price: '1750',
oldPrice: '1900',
availability: false
},
{title: 'Whiskas',
img: './img/whiskas.jpg',
description: 'Для взрослых кошек',
price: '999',
oldPrice: '1300',
availability: true
},
{title: 'Almo Nature',
img: './img/almo.jpg',
description: 'Для поддержания органов чувств для взрослых кошек, с лососем',
price: '1800',
oldPrice: '',
availability: false
},
{title: 'Felix',
img: './img/felix.jpg',
description: 'Для взрослых кошек',
price: '750',
oldPrice: '800',
availability: true
},
{title: 'Royal Canin',
img: './img/royal.jpg',
description: 'Для длинношерстных кошек (1-7 лет)',
price: '1299',
oldPrice: '',
availability: true
},
{title: 'Whiskas',
img: './img/whiskas.jpg',
description: 'Для взрослых кошек "Идеальный вес" с курицей',
price: '1750',
oldPrice: '1900',
availability: false
},
{title: 'Felix',
img: './img/felix.jpg',
description: 'Для поддержания органов чувств для взрослых кошек, с лососем',
price: '1499',
oldPrice: '1300',
availability: true
},
{title: 'Royal Canin',
img: './img/royal.jpg',
description: 'Для домашних кошек',
price: '1400',
oldPrice: '1500',
availability: true
},
{title: 'Almo Nature',
img: './img/almo.jpg',
description: 'Для красоты шерсти и здоровья кожи, с лососем',
price: '1299',
oldPrice: '',
availability: true
},
{title: 'Felix',
img: './img/felix.jpg',
description: 'Для взрослых кошек, c курицей',
price: '1700',
oldPrice: '1900',
availability: false
},
{title: 'Royal Canin',
img: './img/royal.jpg',
description: 'Для красоты шерсти и здоровья кожи, с лососем',
price: '1200',
oldPrice: '1100',
availability: true
},
{title: 'Whiskas',
img: './img/whiskas.jpg',
description: 'Для взрослых кошек "Идеальный вес" с курицей',
price: '1399',
oldPrice: '1500',
availability: true
},
{title: 'Felix',
img: './img/felix.jpg',
description: 'Для поддержания органов чувств для взрослых кошек, с лососем',
price: '1899',
oldPrice: '2000',
availability: true
},
{title: 'Whiskas',
img: './img/whiskas.jpg',
description: 'Для взрослых кошек',
price: '1599',
oldPrice: '',
availability: true
}
]

const result = document.querySelector('.catalog-list');
const make = () => {
	goods.map (item => {
		const card = document.createElement('div');
		card.classList.add('product-item');
		result.append(card);

		const img = document.createElement('img');
		img.classList.add('product-item__img');
		img.src = item.img;
		card.append(img);

		const content = document.createElement('div');
		content.classList.add('product-item_content');
		card.append(content);

		const title = document.createElement('p');
		title.classList.add('product-item__title');
		title.textContent = item.title;
		content.append(title);

		const description = document.createElement('p');
		description.classList.add('product-item__description');
		description.textContent = item.description;
		content.append(description);

		const price = document.createElement('div');
		price.classList.add('product-item__price');
		content.append(price);

		const newPrice = document.createElement('p');
		newPrice.classList.add('product-item__price__new');
		newPrice.textContent = item.price + ' РУБ';
		price.append(newPrice);

		const oldPrice = document.createElement('del');
		oldPrice.classList.add('product-item__price__old');
		oldPrice.textContent = item.oldPrice + ' РУБ';
		price.append(oldPrice);

		const availability = document.createElement('p')
		const btn = document.createElement('button')
		if (item.availability) {
			availability.classList.add('product-item__available')
			availability.textContent = 'Есть в наличии';
			content.append(availability);

			btn.classList.add('product-item__btn');
			btn.textContent='В корзину';
			content.append(btn);
		} else {
			availability.classList.add('product-item__notAvailable')
			availability.textContent = 'Нет в наличии';
			content.append(availability);
		}
		
		



	})
}
make();