import React from 'react';
import { Text, View } from 'react-native';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import { Container, Title, ListLink } from './styles';

function MyLinks() {
  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Title>Pagina MyLinks</Title>

      <ListLink
        data={[
          { id: 1, link: 'test.com' },
          { id: 2, link: 'test.com.br' },
        ]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 22 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default MyLinks;
