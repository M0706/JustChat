import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATA } from "../types";
import { STORAGE_KEYS } from "../../constants/index";

export const getData = (onSuccess = () => {}, onError = () => {}) => {
  return async (dispatch) => {
    try {
      const dataRes = await AsyncStorage.getItem(STORAGE_KEYS.data);
      const data = dataRes ? JSON.parse(dataRes) : {};

      dispatch({
        type: DATA,
        payload: data,
      });
      onSuccess();
    } catch (err) {
      console.log(err);
      onError();
    }
  };
};
