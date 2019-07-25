
const result = document.querySelector('.block2');
const button = document.getElementById('btn')
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
				const div = document.createElement('div');
				div.classList.add('article')
				result.append(div);

				const p1 = document.createElement('p');
				p1.classList.add('author');
				p1.textContent = item.author;

				const p2 = document.createElement('p');
				p2.classList.add('content')
				p2.textContent = item.content;

				const img = document.createElement('img');
				img.src = item.urlToImage;

				div.append(img);
				div.append(p2);
				div.append(p1);
			});
		}
	})

})
