/** @jsxImportSource @emotion/react */
import ListItem from '@components/MyPage/ListItem/ListItem';
import PetCard from '@components/MyPage/PetCard/PetCard';
import TitleBox from '@components/MyPage/TitleBox/TitleBox';
import Button from '@components/Global/Button/Button';
import { styles } from './MyPage.style';
import { myDatas } from './MyPageData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { decodeToken, getCookie } from '@util/configCookie';

export default function MyPage() {
  const { list } = myDatas;

  const [myPets, setMyPets] = useState([]);

  const token = getCookie('token');
  const userInfo = decodeToken(token);

  const name = userInfo.name;

  useEffect(() => {
    const baseURL = import.meta.env.VITE_API_URL;
    const userId = userInfo.userId;

    async function getMyPets() {
      const myPetsResponse = await axios
        .get(`${baseURL}/canidae/list?user-id=${userId}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));

      myPetsResponse && setMyPets([...myPetsResponse.data]);
    }

    getMyPets();
  }, []);

  const deletePet = (petId, newPrimaryCanidae) => {
    const updatedPets = myPets.filter((pet) => pet.canidae.id !== petId);

    const updatedPetsWithPrimary = updatedPets.map((pet) => {
      if (pet.canidae.id === newPrimaryCanidae) {
        return { ...pet, canidae: { ...pet.canidae, isPrimary: true } };
      }

      return pet;
    });

    setMyPets(updatedPetsWithPrimary);
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
              padding="6px 2px"
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
