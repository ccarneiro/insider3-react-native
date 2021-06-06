import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export const ContainerModal = styled.View`
  flex: 1;
  background-color: #132742;
  margin-top: ${Platform.OS === 'ios'
    ? StatusBar.currentHeight + 40 + 'px'
    : 13 + 'px'};
`;

export const ToolBar = styled.View`
  flex-direction: row;
  padding: 0 10px;
`;

export const CustomWebView = styled(WebView)`
  flex: 1;
`;

export const IconButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: #fff;
  color: #132742;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin: 7px 5px;
`;
