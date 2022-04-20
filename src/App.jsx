import './App.css';
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import ComicList from "./components/comics/ComicList";
import ComicForm from "./components/comics/ComicForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/comics" element={ <ComicList />} />
        <Route path="/comics/new" element={ <ComicForm />} />
      </Routes>
    </Router>
  );
}

export default App;
