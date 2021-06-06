import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import ModalLink from '../../components/ModalLink';
import { getLinksSave, deleteLink } from '../../utils/storeLinks';
import ModalWebView from '../../components/ModalWebView';
import {
  Container,
  Title,
  ListLink,
  ContainerEmpty,
  WarningText,
} from './styles';

function MyLinks() {
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWebViewVisible, setModalWebViewVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadLinks();
  }, [isFocused]);

  async function loadLinks() {
    setLoading(true);
    try {
      const linksStorage = await getLinksSave();
      setLinks(linksStorage);
    } catch (err) {
      console.error('Ocorreu um erro ao tentar recuperar os links', err);
      setLinks([]);
    } finally {
      setLoading(false);
    }
  }

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  async function handleDelete(id) {
    // console.log('DELETE', id);
    const newLinks = await deleteLink(links, id);
    setLinks(newLinks);
  }

  async function handleOpenLink(item) {
    console.log('OpenLink', item.link);
    setData(item);
    setModalVisible(false);
    setModalWebViewVisible(true);
  }

  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Title>Meus Links</Title>

      {loading && (
        <ContainerEmpty>
          <ActivityIndicator color="#fff" size={25} />
        </ContainerEmpty>
      )}

      {!loading && !links.length && (
        <ContainerEmpty>
          <WarningText>Você não possue nenhum link :(</WarningText>
        </ContainerEmpty>
      )}

      <ListLink
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            selectedItem={handleItem}
            deleteItem={handleDelete}
            openLink={handleOpenLink}
          />
        )}
        contentContainerStyle={{ paddingBottom: 22 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink
          onClose={() => setModalVisible(false)}
          data={data}
          onOpenLink={handleOpenLink}
        />
      </Modal>

      <Modal visible={modalWebViewVisible} transparent animationType="slide">
        <ModalWebView
          onClose={() => setModalWebViewVisible(false)}
          uri={data.link}
        />
      </Modal>
    </Container>
  );
}

export default MyLinks;
