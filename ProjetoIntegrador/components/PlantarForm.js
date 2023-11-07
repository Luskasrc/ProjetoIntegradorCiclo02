import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PlantarForm = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector4@3x.png")}
        />
        <Text style={styles.plantar}>Plantar</Text>
      </View>
      <Image
        style={[styles.icLoginLogoIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ic-login-logo@3x.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    bottom: 49,
    left: 18,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorOlivedrab,
    width: 114,
    height: 52,
    position: "absolute",
  },
  vectorIcon1: {
    width: "22.06%",
    right: "77.94%",
    bottom: 2,
    height: 22,
  },
  plantar: {
    bottom: 0,
    left: 26,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.colorWhitesmoke,
    textAlign: "left",
    position: "absolute",
  },
  vectorParent: {
    width: "63.44%",
    right: "11.63%",
    bottom: 63,
    left: "24.92%",
    height: 24,
    position: "absolute",
  },
  icLoginLogoIcon1: {
    height: "37.62%",
    width: "24.92%",
    top: "62.38%",
    right: "75.08%",
    bottom: "0%",
    maxHeight: "100%",
  },
  rectangleParent: {
    bottom: -22,
    left: 221,
    width: 132,
    height: 101,
    position: "absolute",
  },
});

export default PlantarForm;
