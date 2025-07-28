const createBookForm = document.querySelector("#book-form"); // getting the form from HTML
const bookContainer = document.querySelector("#book-list-container"); // gets the todos container from HTML
const apiUrl = 'https://bookstore-api-six.vercel.app/api/books'; // API 
const headers = {
    "Content-Type": "application/json", // expected data type being exchanged
}

async function createBook(event){ //submit function to create a new book and add it to the HTML
    try {
        event.preventDefault(); // prevents defualt behavior of form submission
        const payload = { // data being sent to API
            title: event.target.title.value, // value of target input
            author: event.target.author.value,
            publisher: event.target.publisher.value,
        };
        const response = await fetch(apiUrl, { // creating a new TODO with this method
            method: "POST", // HTTP type
            body: JSON.stringify(payload), // converting our data to JSON
            headers
        });
        const data = await response.json(); // need to convert the response to JSON
        const newElement = document.createElement("section"); // create new element to add with our JSON data
        newElement.classList.add("book-row");
        newElement.innerHTML = `
        <section class="table-item">${data.title}</section>
        <section class="table-item">${data.author}</section>
        <section class="table-item">${data.publisher}</section>
        <i id="${data.id}" class="fas fa-trash delete-book" title="Delete"></i>
        `;
        bookContainer.appendChild(newElement);
        event.target.reset();
    } catch (error) {
        console.log(error.message);
    }
}
createBookForm.addEventListener("submit", createBook);

// Deleting the book
async function deleteBook(id){ // Function to delete book from server
    try {
        const response = await fetch(`${api}/${id}`, { // sending delete request
            method: "DELETE", // using DELETE HTTP method
            headers, // setting the headers
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
document.addEventListener("click", async function (event) { // using event delegation for click events on delete button
    if (event.target.classList.contains("delete-book")){ //checking if the event.target is the delete button
        await deleteBook(event.target.id); // mocking deleting the book from the server
        event.target.parentElement.remove(); // removing the element from the DOM
    }
});
// Loading the books from the API
async function fetchBook() {
    try {
        const response = await fetch(apiUrl); // gets books from API
        const data = await response.json(); // converts response to JSON
        const filteredData = data.filter((_, idx) => idx < 5); // limiting the books to first 5 from API
        for (const item of filteredData) { // iterate through book list to create new element
            const newElement = document.createElement("section"); // create new element to add with our JSON data
            newElement.classList.add("book-row");
            newElement.innerHTML = `
            <section class="table-item">${item.title}</section>
            <section class="table-item">${item.author}</section>
            <section class="table-item">${item.publisher}</section>
            <i id="${item.id}" class="fas fa-trash delete-book" title="Delete"></i>
            `;
            bookContainer.appendChild(newElement);
        }
    } catch (error) {
        console.log(error);
    }
}
fetchBook();