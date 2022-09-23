import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { useAppDispatch } from "../features/hook";
import { add } from "../features/user/userData";
import AddData from "../screens/AddData";
import LinkDetails from "../screens/LinkDetails";

import RootScreen from "../screens/RootScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

const BASE_URL = "https://dummyjson.com/users";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const dispatch = useAppDispatch();

  const fetchUser = () => {
    axios({
      method: "get",
      url: BASE_URL,
    }).then((res) => {
      const arr = res.data.users;
      arr.forEach((el: any) => {
        dispatch(
          add({
            id: el.id,
            image: el.image,
            username: el.username,
            age: el.age,
            firstname: el.firstName,
            lastname: el.lastName,
            address: el.address.address,
            postalCode: el.address.postalCode,
            state: el.address.state,
          })
        );
      });
    });
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={RootScreen} />
      <Stack.Screen name="Details" component={LinkDetails} />
      <Stack.Screen name="AddData" component={AddData} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
