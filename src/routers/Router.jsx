import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/\bHome';
import LoginPage from '../pages/LoginPage/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
