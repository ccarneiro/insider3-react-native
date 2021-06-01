import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import {
  BoxIcon,
  ButtonLink,
  ButtonLinkText,
  ContainerContain,
  ContainerInput,
  ContainerLogo,
  Input,
  Logo,
  SubTitle,
  Title,
} from './styles';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

function Home() {
  return (
    <LinearGradient
      colors={['#1ddbb9', '#132742']}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <StatusBarPage backgroundColor="#1ddbb9" barStyle="light-content" />
      <Menu />
      <ContainerLogo>
        <Logo source={require('../../assets/Logo.png')} />
      </ContainerLogo>
      <ContainerContain>
        <Title>SujeitoLink</Title>
        <SubTitle>Cole seu link para encurtar</SubTitle>
        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="#FFF" />
          </BoxIcon>
          <Input placeholder="Cole seu link aqui..." />
        </ContainerInput>
        <ButtonLink>
          <ButtonLinkText>Gerar Link</ButtonLinkText>
        </ButtonLink>
      </ContainerContain>
    </LinearGradient>
  );
}

export default Home;
