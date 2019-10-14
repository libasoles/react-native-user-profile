import { AsyncStorage } from 'react-native';

class Storage {
  static setItem(key, value) {
    return AsyncStorage.setItem(key, value);
  }

  static getItem(key) {
    return AsyncStorage.getItem(key);
  }

  static removeItem(key) {
    return AsyncStorage.removeItem(key);
  }
}

export default Storage;
