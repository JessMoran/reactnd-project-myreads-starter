import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  Book  from './Book'


class Search extends React.Component{
    state ={
        query: '',
        searchedBooks: []
    }

    updateSearch = (inputValue) => {
        this.props.search(inputValue)
        .then((booksList) => {
            this.setState({
                searchedBooks: booksList
            })
        })

        this.setState({
            query: inputValue
        })
        
    }

    render(){
        return (
            <div className="search-books">
                {/* Link that redirects to a new URL */}
                <div className="search-books-bar">
                    <Link
                        className = "close-search"
                        to = "/">
                            Close
                    </Link>
                <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input value={this.state.query} onChange={(event) => {
                    this.updateSearch(event.target.value)
                }} type="text" placeholder="Search by title or author"/>

                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Book
                            books={this.state.searchedBooks}
                            update={}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search

