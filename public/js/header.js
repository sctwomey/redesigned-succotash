console.log('header script')

/** 
 * @typedef {Object} Book
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {string} publisher
 * @property {string} description
 * @property {string} isbn_10
 * @property {string} genre
 * @property {string} series
 * @property {string} price
 * @property {string} quantity
 * @property {string} condition_new
 * @property {string} user_id
 * @property {string} createdAt
 * @property {string} updatedAt
*/

/** @type {HTMLInputElement} */
const searchInput = document.querySelector('#searchinput')//get a reference to the seach input
searchInput.addEventListener('change', ($event) => doSearch($event.target.value))


function performSearch() {
    doSearch(document.querySelector('#searchinput').value)
}

function doSearch(value) {
    const searchValue = value
    console.log({ searchValue })//print the values of the search box

    // call the search api/endpoint with book name or author
    fetch('/api/books/search?q=' + searchValue)
        .then(res => res.json())
        //get the results
        .then((/** @type {Book[]}*/ res) => {
            //show the results in a drop down that can be clicked
            console.log(res)

            // remove any books in search-result-container
            document.querySelector('.search-result-container').innerHTML = ''

            const renderCards = res.map(makeBookCard)
            const cardsAsHtmlString = renderCards.join('');

            //inject the cards in the dom in search-result-container
            document.querySelector('.search-result-container').innerHTML = cardsAsHtmlString

            registerAddToCartClickListener()

            // hideHomePageDeck()

        })
        .catch(error => console.error(error))
}

function hideHomePageDeck() {
    document.querySelector('#homepageDeck').setAttribute('style', 'display:none')
}

function makeBookCard( /** @type {Book} */ book) {
    return `
    <div class="product-card w-100">
        <h4>${book.title}</h4>
        <p><a href="/author/${book.author}">${book.author}</a></p>
        $${book.price}

        <button class="addToCart" data-id="${book.id}" data-name="${book.title}" data-price="${book.price}">Add to Cart</button>
    </div>`
}