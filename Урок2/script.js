
const result = document.querySelector('.article-section');
const button = document.querySelector('.request-section__btn')
button.addEventListener('click', () => {
	const date = new Date();
	const formattedDate = date.toLocaleDateString('en-GB', {
		day: 'numeric', month: 'numeric', year: 'numeric'
	}).split('/').reverse().join('-')
	console.log(formattedDate);
	let URL = `https://newsapi.org/v2/everything?q=bitcoin&from=${formattedDate}&sortBy=publishedAt&apiKey=018a8d8963b14086b414bea6d274fa0c`

	fetch(URL, { method: 'GET' }).then(response => response.json()).then(data => {
		const item = data.articles;
		console.log(item)
		if (!item.length) {
			result.innerHTML = '<p>Nothing</p>';
		} else {
			result.innerHTML = '';
			item.map((item) => {
				const a = document.createElement('a');
				a.href = item.url;
				a.target = '_blank';
				result.append(a);

				const div = document.createElement('article');
				div.classList.add('article')
				a.append(div);

				const p1 = document.createElement('p');
				p1.classList.add('article__author');
				p1.innerHTML = item.author;

				const p2 = document.createElement('p');
				p2.classList.add('article__content')
				p2.innerHTML = item.content;

				const p3 = document.createElement('p');
				p3.classList.add('article__title')
				p3.innerHTML = item.title;

				const img = document.createElement('img');
				img.classList.add('article__img')
				img.src = item.urlToImage;

				div.append(img);
				div.append(p3);
				div.append(p2);
				div.append(p1);
			});
		}
	})

})
