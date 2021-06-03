import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Share,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';

import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,
} from './styles';

function ModalLink({ onClose, data }) {
  function copyLink() {
    Clipboard.setString(data?.link);
    alert('Link copiado com sucesso!');
  }

  async function handleShare() {
    try {
      //'http://seulink.com.br'
      const result = await Share.share({
        message: `Link: ${data?.link}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('ActivityType');
        } else {
          console.log('Compartilhado com sucesso!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Cancelou o Compartilhamento');
      }
    } catch (err) {
      console.error('Erro ao tentar compartilhar o link', err.message);
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          onClose && onClose();
        }}
      >
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity
            onPress={() => {
              onClose && onClose();
            }}
          >
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>{data?.long_url}</LongUrl>
          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>{data?.link}</ShortLinkUrl>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" color="#FFF" size={30} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}

export default ModalLink;
