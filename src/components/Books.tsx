import Book from "./Book";


function Books() {

    const myBookArray = [
        {
            title: 'Take My Hand',
            author: 'Dolen Perkins-Valdez',
            pages: 359,
            read: true
        },
        {
            title: 'Circe',
            author: 'Madeline Miller',
            pages: 393,
            read: false
        },
        {
            title: 'The Lion Women of Tehran',
            author: 'Marjan Kamali',
            pages: 327,
            read: false
        },
        {
            title: 'Lessons in Chemistry',
            author: 'Bonnie Garmus',
            pages: 404,
            read: true
        },
        {
            title: 'Remarkably bright Creatures',
            author: 'Shelby Van Pelt',
            pages: 368,
            read: false
        },
        {
            title: 'A little Life',
            author: 'Hanya Yanagihara',
            pages: 720,
            read: true
        }
    ]

    return (
        <div className="display-books">
            {myBookArray.map((book, index) => {
                return (
                    <Book
                        key={index}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        read={book.read}
                    />
                )
            })}
        </div>
    )
}

export default Books;