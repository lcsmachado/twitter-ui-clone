import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Lucas Carvalho</h1>
        <h2>@lcsmachado</h2>
        <p>Web Developer, focused on Ruby on Rails, React and React Native.</p>
        <ul>
          <li>
            <LocationIcon />
            Uibaí, Bahia
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 7 de abril de 1998
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
