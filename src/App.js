import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from './Pages/main'
import Detail from './Pages/detail'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/campaign" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
