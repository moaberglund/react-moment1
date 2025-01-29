# React - Moment 1
An introductory web application to React created by Moa berglund

### SPA with listed books

Components for:
* Header with specific SCSS-file
* Footer with specific SCSS-file
* Book: Structure for one book with specific SCSS-file
* Books: Printing out all books from Array with .map, styled with in-line CSS

-------

### Interface for book
```
interface BookProps {
    title: string;
    author: string;
    pages: number;
    read: boolean;
}
```