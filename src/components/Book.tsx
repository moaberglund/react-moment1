import './Book.scss';

interface BookProps {
    title: string;
    author: string;
    pages: number;
    read: boolean;
}

function Book({ title, author, pages, read }: BookProps) {
    return (
        <div className="book">
            <h2>{title}</h2>
            <p>by {author}</p>
            <p>{pages} pages</p>
            <p>{read ? 'Read' : 'Not read'}</p>
        </div>
    );
}

export default Book;