# MyReads Tracking App

## About

This bookshelf app allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application. There are two pages. The Homepage displays the three bookshelves, currently reading, want to read, and read. Users are able to move the books between shelves. The search page allows users to search for new books to add to their shelves. When a book is categorized on the search page and the user navigates to the homepage, it also appears on that shelf in the homepage.

## Prerequisites

To run this application, you will need the following:

* Node.js
* The command line
* NPM

## Getting Started

1. run git clone https://github.com/junyan59/myreads-tracking-app.git to clone this repository
2. `cd myreads-tracking-app` then run `npm install`
3. `npm start` to start the app then navigate to http://localhost:3000/ on your local machine

## BooksAPI Overview

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
