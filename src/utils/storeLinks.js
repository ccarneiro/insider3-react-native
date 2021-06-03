import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_LINK_LIST = 'listOfLinks';

export async function getLinksSave() {
  const myLinks = await AsyncStorage.getItem(KEY_LINK_LIST);

  return JSON.parse(myLinks) || [];
}

export async function saveLink(newLink) {
  const linksStorage = await getLinksSave(KEY_LINK_LIST);

  const hasLink = linksStorage.some((link) => link.id === newLink.id);
  if (hasLink) {
    console.log('Esse link já existe na lista');
    return;
  }
  linksStorage.push(newLink);
  await AsyncStorage.setItem(KEY_LINK_LIST, JSON.stringify(linksStorage));
}

export async function deleteLink(links, id) {
  const linksStorage = links.filter((link) => link.id != id);
  await AsyncStorage.setItem(KEY_LINK_LIST, JSON.stringify(linksStorage));
  return linksStorage;
}
