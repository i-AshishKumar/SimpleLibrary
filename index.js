let myLibrary = []

function Book(name, author, pages) {
	this.name = name
	this.author = author
	this.pages = pages
}

function addBookToLibrary() {
	if (
		document.getElementById('name').value === '' ||
		document.getElementById('author').value === '' ||
		document.getElementById('pages').value === ''
	) {
		alert('Enter All Details!')
	} else {
		bName = document.getElementById('name').value
		bAuthor = document.getElementById('author').value
		bPages = document.getElementById('pages').value

		var book = new Book(bName, bAuthor, bPages)
		myLibrary.push(book)

		displayBooks()
	}
}

function displayBooks() {
	var table = document.getElementById('booklist')
	var len = myLibrary.length
	var row = table.insertRow(1)
	var cell1 = row.insertCell()
	var cell2 = row.insertCell()
	var cell3 = row.insertCell()
	cell1.innerHTML = myLibrary[len - 1].name
	cell2.innerHTML = myLibrary[len - 1].author
	cell3.innerHTML = myLibrary[len - 1].pages

	reset()
}

function reset() {
	document.getElementById('name').value = ''
	document.getElementById('author').value = ''
	document.getElementById('pages').value = ''
}
