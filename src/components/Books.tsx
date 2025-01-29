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
            title: 'Intermezzo',
            author: 'Sally Rooney',
            pages: 454,
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
            title: 'A Little Life',
            author: 'Hanya Yanagihara',
            pages: 720,
            read: true
        },
        {
            title: 'Cloud Atlas',
            author: 'David Mitchell',
            pages: 509,
            read: false
        },
        {
            title: 'A Wild Sheep Chase',
            author: 'Haruki Murakami',
            pages: 353,
            read: true
        },
        {
            title: 'The Tea Girl of Hummingbird Lane',
            author: 'Lisa See',
            pages: 384,
            read: false
        },
        {
            title: 'Hamnet',
            author: 'Maggie O\'Farrell',
            pages: 372,
            read: true
        },
        {
            title: 'Homegoing',
            author: 'Yaa Gyasi',
            pages: 305,
            read: true
        }       
    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '2em'}}>
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