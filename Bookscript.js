document.addEventListener('DOMContentLoaded', function () {
    const inventory = []; // store book data's

    const addBookForm = document.getElementById('addBookForm');
    const updateBookPriceForm = document.getElementById('updateBookPriceForm');
    const updateBookQuantityForm = document.getElementById('updateBookQuantityForm');
   
    const BookTableBody = document.getElementById('BookTableBody');
    const updateTitleSelect = document.getElementById('updateTitle');
    const updateQuantityTitleSelect = document.getElementById('updateQuantityTitle');

    addBookForm.addEventListener('submit', function (event) {
        event.preventDefault(); //prevent form submission for details

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const price = parseFloat(document.getElementById('price').value);
        const quantity = parseInt(document.getElementById('quantity').value);

        addBook(title, author, price, quantity);
        displayInventory();
        updateTitleOptions();
        addBookForm.reset(); // reset the form after adding books
    });

    updateBookPriceForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const selectedTitle = updateTitleSelect.value;
        const newPrice = parseFloat(document.getElementById('newPrice').value);

        updateBookPrice(selectedTitle, newPrice);
        displayInventory();
        updateTitleOptions();
        updateBookPriceForm.reset(); // reset the form after update the price
    });

    updateBookQuantityForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const selectedTitle = updateQuantityTitleSelect.value;
        const newQuantity = parseInt(document.getElementById('newQuantity').value);

        updateBookQuantity(selectedTitle, newQuantity);
        displayInventory();
        updateTitleOptions();
        updateBookQuantityForm.reset(); // reset the form after update the quantity
    });

    function addBook(title, author, price, quantity) {
        const book = {
            title: title,
            author: author,
            price: price,
            quantity: quantity
        };
        inventory.push(book);
    }

    function updateBookPrice(title, newPrice) {
        const bookToUpdate = inventory.find(book => book.title === title);
        if (bookToUpdate) {
            bookToUpdate.price = newPrice;
        }
    }

    function updateBookQuantity(title, newQuantity) {
        const bookToUpdate = inventory.find(book => book.title === title);
        if (bookToUpdate) {
            bookToUpdate.quantity = newQuantity;
        }
    }

    function displayInventory() {
        BookTableBody.innerHTML = ''; //this is table body format using html 
        inventory.forEach(function (book) {
            const row = `
                <tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>$${book.price.toFixed(2)}</td>
                    <td>${book.quantity}</td>
                </tr>
            `;
            BookTableBody.innerHTML += row;
        });
    }

    function updateTitleOptions() {
        updateTitleSelect.innerHTML = '<option value="" disabled selected>Select Title</option>';
        updateQuantityTitleSelect.innerHTML = '<option value="" disabled selected>Select Title</option>';
        inventory.forEach(function (book) {
            const option = `<option value="${book.title}">${book.title}</option>`;
            updateTitleSelect.innerHTML += option;
            updateQuantityTitleSelect.innerHTML += option;
        });
    }

    displayInventory();
    updateTitleOptions();
});
