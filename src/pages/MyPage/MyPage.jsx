/** @jsxImportSource @emotion/react */
import ListItem from '../../components/MyPage/ListItem/ListItem';
import PetCard from '../../components/MyPage/PetCard/PetCard';
import TitleBox from '../../components/MyPage/TitleBox/TitleBox';
import { styles } from './MyPage.style';

export default function MyPage() {
  const name = '원정투수';
  const list = [
    { title: '회원 정보 수정', engTitle: 'Profile', link: '/my/edit-info' },
    { title: '주문내역', engTitle: 'Order', link: '/my/order-history' },
    { title: '장바구니', engTitle: 'Cart', link: '/cart' },
  ];
  return (
    <>
      <div css={styles.container}>
        <div css={styles.section}>
          <TitleBox title={name} />
          {list.map((item) => (
            <ListItem
              icon={item.icon}
              title={item.title}
              engTitle={item.engTitle}
              link={item.link}
            />
          ))}
        </div>
        <TitleBox title="MY PETS" plus={true} />

        <PetCard />
      </div>
    </>
  );
}
