import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import { globalStyle } from '@styles/global';
// import Layout from '../components/global/Layout';
import Header from '@components/global/header';
import Footer from '../components/global/footer';
// import GlobalTitle from '../components/global/globaltitle/GlobalTitle';

/*

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

*/

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <MainContainer>
        {/* <Layout> */}
        <Global styles={globalStyle} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="global" element={<GlobalTitle />} /> */}
        </Routes>
        {/* </Layout> */}
        {/* Footer */}
      </MainContainer>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
