import React from 'react';
import Book from './Book';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext }from '../contexts/ThemeContext';
import './BookList.css';

class BookList extends React.Component {

    render() {
        return (
            <ThemeContext.Consumer>{(contextTheme) => (
                <BookContext.Consumer>
                    {contextBook => {

                        const { books } = contextBook;
                        const { changeTheme, isDarkTheme, dark, light } = contextTheme;
                        const theme = isDarkTheme ? dark : light;

                        return (
                            <section className="page-section" style={{background: theme.bg, color:theme.txt}} id="portfolio">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="section-heading text-uppercase">Bookfolio</h2>
                                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                        <button type='button' className='btn btn-info' style={{marginTop:'-50px',backgroundColor:theme.bbg, color:theme.txt}}
                                        onClick={changeTheme}>Change Theme</button>
                                    </div>
                                    <div className="row">

                                        {books.map((book, i) => {
                                            return <Book book={book}
                                                key={i}
                                            />
                                        })}

                                    </div>
                                </div>
                            </section>
                        )
                    }}
                </BookContext.Consumer>
            )}
            </ThemeContext.Consumer>
        )
    }

}


export default BookList




