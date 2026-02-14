import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes} from "react-router-dom";
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
