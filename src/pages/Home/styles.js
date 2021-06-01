import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? 35 + 'px' : 15 + 'px'};
`;

export const Logo = styled.Image.attrs({ resizeMode: 'contain' })`
  height: 150px;
  width: 150px;
`;

export const ContainerContain = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 25 + '%' : 15 + '%'};
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
`;
export const SubTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10%;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-radius: 7px;
  margin: 15px 0px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgba(255, 255, 255, 0.15);
`;
export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 55px;
`;
export const Input = styled.TextInput.attrs({ placeholderTextColor: '#FFF' })`
  width: 90%;
  font-size: 17px;
  color: #fff;
`;

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 54px;
  background-color: #fff;
  width: 100%;
  border-radius: 7px;
  margin-bottom: 15px;
`;

export const ButtonLinkText = styled.Text`
  font-size: 18px;
`;
