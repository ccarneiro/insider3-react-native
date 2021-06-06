import React, { useRef } from 'react';
import { ContainerModal, ToolBar, CustomWebView, IconButton } from './styles';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

function ModalWebView({ uri, onClose }) {
  const webViewRef = useRef(null);

  function goBack() {
    webViewRef.current.goBack();
  }

  function goForward() {
    webViewRef.current.goForward();
  }

  function reload() {
    webViewRef.current.reload();
  }

  return (
    <ContainerModal>
      <ToolBar>
        <IconButton onPress={goBack}>
          <Feather name="arrow-left" size={24} />
        </IconButton>
        <IconButton onPress={goForward}>
          <Feather name="arrow-right" size={24} />
        </IconButton>
        <IconButton onPress={reload}>
          <Feather name="refresh-ccw" size={24} />
        </IconButton>
        <View style={{ flex: 1 }} />
        <IconButton onPress={() => onClose && onClose()}>
          <Feather name="x" size={24} />
        </IconButton>
      </ToolBar>
      <CustomWebView ref={webViewRef} source={{ uri }} />
    </ContainerModal>
  );
}

export default ModalWebView;
