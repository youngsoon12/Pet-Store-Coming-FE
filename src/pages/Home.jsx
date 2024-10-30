import React from 'react';
import Header from '../components/global/header';
import TabBar from '../components/global/TabBar/TabBar';
import ContentsWrapper from '../components/global/ContentsWrapper/ContentsWrapper';

export default function Home() {
  return (
    <>
      <Header type={1} />
      <ContentsWrapper>
        <div>내부 컨텐츠</div>
      </ContentsWrapper>
      <TabBar />
    </>
  );
}
