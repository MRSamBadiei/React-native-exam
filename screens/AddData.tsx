import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import { useAppDispatch } from "../features/hook";
import { add } from "../features/user/userData";
import { RootStackScreenProps, user } from "../types";

const AddData = ({ navigation, route }: RootStackScreenProps<"AddData">) => {
  const [url, setUrl] = useState("");
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <TextInput
          defaultValue={url}
          onChangeText={(e) => setUrl(e)}
          placeholder="Image url"
        />
        <Button
          onPress={() => {
            dispatch(
              add({
                id: 0,
                image: url,
                firstname: "",
                lastname: "",

                address: "",
                postalCode: "",
                state: "",

                age: 0,
                username: "",
              })
            );
          }}
          title="Add"
        />
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

export default AddData;
