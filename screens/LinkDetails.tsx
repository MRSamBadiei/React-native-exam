import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
} from "react-native";
import { useAppSelector } from "../features/hook";
import { RootStackScreenProps, user } from "../types";

const LinkDetails = ({
  navigation,
  route,
}: RootStackScreenProps<"Details">) => {
  const userData: user[] = useAppSelector((state) => state.userData);
  const [data, setData] = useState<user>();

  useEffect(() => {
    userData.forEach((element) => {
      if (element.id === route.params.id) {
        setData(element);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <Text>firstname {data?.firstname}</Text>
        <Text>firstname {data?.lastname}</Text>
        <Text>age {data?.age}</Text>
        <Text>Comapny:</Text>
        <Text>address {data?.address}</Text>
        <Text>postal code {data?.postalCode}</Text>
        <Text>state {data?.state}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});

export default LinkDetails;
