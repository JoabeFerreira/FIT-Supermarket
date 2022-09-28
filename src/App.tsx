import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import FoodList from './pages/FoodList/FoodList';
import BeverageList from './pages/BeverageList/BeverageList';
import HygieneList from './pages/HygieneList/HygieneList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="product-list/food" element={<FoodList />} />
          <Route path="product-list/beverages" element={<BeverageList />} />
          <Route path="product-list/hygiene" element={<HygieneList />} />
          <Route path="*" element={<h1>404 - Page Not</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
