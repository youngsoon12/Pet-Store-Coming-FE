import Header from '../../components/global/header';
import TabBar from '../../components/global/TabBar/TabBar';

export default function MyPage() {
  return (
    <>
      <Header type={1} />
      <div
        style={{
          minHeight: 'calc(100vh - 52px)',
          maxHeight: 'calc(100vh - 52px)',
          overflowY: 'scroll',
        }}
      ></div>
      <TabBar />
    </>
  );
}
