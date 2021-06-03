import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ContainerButton, Item } from './styles';

function ListItem({ data }) {
  return (
    <View>
      <ContainerButton activeOpacity={0.9} onPress={() => {}}>
        <Feather name="link" color="#FFF" size={24} />
        <Item numbersOfLine={1}>{data.link}</Item>
      </ContainerButton>
    </View>
  );
}

export default ListItem;
