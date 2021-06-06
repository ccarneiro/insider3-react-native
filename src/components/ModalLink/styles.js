import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: #1ccbae;
`;

export const LongUrl = styled.Text`
  font-size: 17px;
  color: #a7a7a7;
  margin-bottom: 30px;
`;

export const ShortLinkArea = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: #172742;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const ShortLinkUrl = styled.Text`
  width: 90%;
  color: #fff;
  font-size: 16px;
`;

export const OpenLinkButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const OpenLinkButton = styled.TouchableOpacity`
  margin-top: 35px;
  background-color: #1ccbae;
  color: #fff;
  border-radius: 7px;
  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0% 15px;
`;

export const OpenLinkButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  margin-left: 5px;
`;
