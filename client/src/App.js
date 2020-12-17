import AddBook from './AddBook'
import './css/app.scss';
import './App.css';
import { getAllBooks } from './services/api-method'

function App() {

  getAllBooks().then((data) => {
    console.log(data)
  }).catch(() => {
    
  })

  
  return (
    <div className="App">
      <AddBook />
      <div className="books-container">
        {/* {bookList} */}
      </div>
    </div>
  );
}

export default App;
