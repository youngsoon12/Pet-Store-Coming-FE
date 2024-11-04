/** @jsxImportSource @emotion/react */
import ListItem from '../../components/MyPage/ListItem/ListItem';
import PetCard from '../../components/MyPage/PetCard/PetCard';
import TitleBox from '../../components/MyPage/TitleBox/TitleBox';
import { styles } from './MyPage.style';
import { myDatas } from './MyPageData';

export default function MyPage() {
  const { name, list, myPets } = myDatas;
  return (
    <>
      <div css={styles.container}>
        <div css={styles.section}>
          <TitleBox title={name} />
          {list.map((item, index) => (
            <ListItem
              key={index}
              icon={item.icon}
              title={item.title}
              engTitle={item.engTitle}
              link={item.link}
            />
          ))}
        </div>
        <TitleBox title="MY PETS" plus={true} />

        {myPets.map((petInfo, index) => (
          <PetCard key={index} petInfo={petInfo} />
        ))}
      </div>
    </>
  );
}
