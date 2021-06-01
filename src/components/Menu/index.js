import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonMenu } from './styles';
import { Feather } from '@expo/vector-icons';

function Menu(props) {
  const navigation = useNavigation();
  return (
    <ButtonMenu onPress={() => navigation.openDrawer()}>
      <Feather name="menu" size={40} color="#FFF" />
    </ButtonMenu>
  );
}

export default Menu;
