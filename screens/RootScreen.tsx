import React from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  ListRenderItem,
  StyleSheet,
  Platform,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../features/hook";
import { RootStackScreenProps, user } from "../types";

const RootScreen = ({ navigation }: RootStackScreenProps<"Root">) => {
  const userData: user[] = useAppSelector((state) => state.userData);

  const ShowUser: ListRenderItem<user> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", {
            id: item.id,
          });
        }}
      >
        <ImageBackground source={{ uri: item.image }} style={styles.img}>
          <Text style={{ fontWeight: "bold" }}>
            {item.username}, {item.age}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.main}>
        <FlatList
          data={userData}
          renderItem={ShowUser}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddData");
          }}
          style={{
            position: "absolute",
            bottom: 10,
            backgroundColor: "red",
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        >
          <Text style={{ textAlign: "center" }}>Add data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  main: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  img: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 150,
    height: 150,
  },
});

export default RootScreen;
