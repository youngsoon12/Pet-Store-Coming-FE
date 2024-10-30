import React from 'react';
import Button from '../components/global/button';
import GlobalTitle from '@components/global/globaltitle/index';
import Header from '../components/global/header';
import TabBar from '../components/global/TabBar/TabBar';

const Home = () => {
  return (
    <>
      <Header type={1} />
      <div
        style={{
          maxHeight: 'calc(100vh - 52px)',
          overflowY: 'scroll',
          // marginTop: '52px',
        }}
      >
        <div
          style={{
            backgroundColor: 'black',
            height: '600px',
            width: '100%',
            // overflowY: 'scroll',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
            height: '600px',
            width: '100%',
            // overflowY: 'scroll',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'red',
            height: '10px',
            width: '100%',
            // overflowY: 'scroll',
          }}
        ></div>
        {/* <TabBar /> */}
      </div>
      <TabBar />
    </>
  );
};

export default Home;
