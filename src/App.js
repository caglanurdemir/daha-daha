import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Pages/main'
import Detail from './Pages/detail'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/campaign" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
