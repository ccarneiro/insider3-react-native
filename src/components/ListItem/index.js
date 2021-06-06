import React from 'react';
import { View, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { ContainerButton, Item, ActionContainer } from './styles';

function ListItem({ data, selectedItem, deleteItem, openLink }) {
  function RightActions() {
    return (
      <ActionContainer onPress={() => deleteItem && deleteItem(data.id)}>
        <Feather name="trash" color="#fff" size={24} />
      </ActionContainer>
    );
  }

  function LeftActions() {
    return (
      <ActionContainer onPress={() => openLink && openLink(data)}>
        <Feather name="compass" color="#fff" size={24} />
      </ActionContainer>
    );
  }

  return (
    <View>
      <Swipeable
        renderRightActions={RightActions}
        renderLeftActions={LeftActions}
      >
        <ContainerButton
          activeOpacity={0.9}
          onPress={() => selectedItem && selectedItem(data)}
        >
          <Feather name="link" color="#FFF" size={24} />
          <Item numbersOfLine={1}>{data.long_url}</Item>
        </ContainerButton>
      </Swipeable>
    </View>
  );
}

export default ListItem;
