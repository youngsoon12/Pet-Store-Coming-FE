/** @jsxImportSource @emotion/react */
import ListItem from '../../components/MyPage/ListItem/ListItem';
import PetCard from '../../components/MyPage/PetCard/PetCard';
import TitleBox from '../../components/MyPage/TitleBox/TitleBox';
import Button from '../../components/global/Button/Button';
import { styles } from './MyPage.style';
import { myDatas } from './MyPageData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyPage() {
  // const { name, list, myPets } = myDatas;
  const { name, list } = myDatas;

  const [myPets, setMyPets] = useState([]);
  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_URL;
    const userId = '22ef481b-11e6-487c-b5e1-257efb4895a2';
    async function getMyPets() {
      const myPetsResponse = await axios
        .get(`${baseURL}/canidae/list?user-id=${userId}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
      myPetsResponse && setMyPets([...myPetsResponse.data]);
    }
    getMyPets();
    console.log(myPets);
  }, []);

  const deletePet = (petId) => {
    const updatedPets = myPets.filter((pet) => pet.id !== petId);
    setMyPets(updatedPets); // 상태를 업데이트하여 화면에 반영
  };

  const navigate = useNavigate();
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

        {myPets?.length > 0 ? (
          myPets.map((petInfo, index) => (
            <PetCard key={index} petInfo={petInfo} deletePet={deletePet} />
          ))
        ) : (
          <div css={styles.noPets}>
            <div>등록된 반려견이 없습니다</div>
            <Button
              text={'우리아이 등록 >'}
              fontSize={'14'}
              fontWeight={'bold'}
              width={'130'}
              onClick={() => {
                navigate('/petprofile');
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
