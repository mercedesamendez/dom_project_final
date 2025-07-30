# Bookstore Project
This is a simple and easy to use bookstore inventory web application built using HTML, CSS, and JavaScript. It allows users to enter and display book information such as the title, author, and publisher, and allows the user to manage the list by adding and deleting book entries.
**Link to project:** https://688a8475783c1e0edc9e011c--domprojectfinal.netlify.app/

## Features
* Add books to a table using a form
* Display book entries
* Remove books from the table
* Simple user interface
* Built using vanilla JavaScript

## Technologies Used
* HTML for structure
* CSS for styling
* JavaScript (DOM Manipulation) for logic

## Project Structure
dom_project_final
* index.html # Main HTML file
* app.js # JavaScript file
* styles.css # External stylesheet
* README.md # Project documentation

## Installation
1. Clone the repository:

```git clone https://github.com/mercedesamendez/dom_project_final.git
   cd dom_bookstore_final
```

2. Open the index.html (Live Server)

## How To Use
1. Download this repository
2. Open the file in your browser
3. Fill in the form
4. Click the button to insert the entry into the table below the form
5. To delete a book, click the trash icon at the end of the book row

## Running Tests
This project is simple and doesn't require formal testing, but you can test it manually:

# End-to-End Functionality
Ways I confirmed that the core features of the project work:
* Add a book using the form
* Verify the book added is located in the table
* Clicking the "Delete" icon removes a book from the table
__Example__
1. Enter:
   * Title: _The Summer I Turned Pretty_
   * Author: _Jenny Han_
   * Publisher: _Simon & Schuster Books_
2. Click the "Add Book" button
3. See the book added to the bottom of the table
4. Click the "Delete" icon and see the book row removed
__DOM Behavior__
Manual checks ensure:
   * There is clean separation of HTML, CSS, and JS
   * DOM updates without full-page reload
   * Form resets after submission
   * Buttons respond to the click events 

## Future Ideas to Implement
* Implement a search or filtering functionality
* Add a success message after submitting or deleting a book
* Add the ability to view all the books from the API in a clean and usable manner

## Lessons Learned
Working on this project taught me the power of a well‑organized codebase. Separating HTML, CSS, and JavaScript made everything cleaner, easier to debug, and far less overwhelming. Once the structure was solid, I discovered how much I enjoy the logic layer—making sure each interaction worked perfectly before adding UI flair. Although some moments were tedious (especially when the code didn’t behave), the process deepened my understanding of how JavaScript and HTML elements communicate. Overall, this project turned frustration into clarity and reaffirmed that thoughtful organization is the foundation of enjoyable, maintainable code.

## License
This project is licensed under the MIT License
