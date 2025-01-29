import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import Book from "./components/Book"

function App() {


  return (
    <>
    <AppHeader sitetitle="Home Page" />

    <Book title="The Great Gatsby" author="F. Scott Fitzgerald" pages={180} read={true} />
      

    <AppFooter />
    </>
  )
}

export default App
