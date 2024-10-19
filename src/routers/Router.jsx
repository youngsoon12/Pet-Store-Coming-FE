import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/\bHome';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
