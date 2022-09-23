import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface user {
  id: number;
  image: string;
  firstname: string;
  lastname: string;
  address: string;
  postalCode: string;
  state: string;
  age: number;
  username: string;
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  Details: { id: number };
  AddData: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
