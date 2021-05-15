import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import colors from "@colors";

import styles from "./DetailScreen.style";

/* eslint-disable @typescript-eslint/no-explicit-any*/
const DetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: colors.light.white }}>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
