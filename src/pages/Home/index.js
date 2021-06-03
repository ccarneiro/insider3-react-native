import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} from 'react-native';
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
import ModalLink from '../../components/ModalLink';
import api from '../../services/api';
import { saveLink } from '../../utils/storeLinks';

function Home() {
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    setLoading(true);
    try {
      const response = await api.post('shorten', {
        long_url: input,
      });
      saveLink(response.data);
      setData(response.data);
      // console.log(response.data);
      setModalVisible(true);
    } catch (err) {
      console.error('Ops parece que algo deu errado!', err.message);
    } finally {
      Keyboard.dismiss();
      setInput('');
      setLoading(false);
    }
    // setModalVisible(true);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
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
              <Input
                placeholder="Cole seu link aqui..."
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(value) => setInput(value)}
              />
            </ContainerInput>
            <ButtonLink onPress={handleShortLink}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )}
            </ButtonLink>
          </ContainerContain>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

export default Home;
