import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SCREENS } from "@shared-constants";

import styles from "./HomeScreen.style";

/* eslint-disable @typescript-eslint/no-explicit-any*/
const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text> HomeScreen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate(SCREENS.DETAIL)}
      >
        <Text style={{ color: "white" }}>Go To Detail Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
