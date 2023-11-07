import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.itemStory}>
      <Image
        style={[styles.itemImageIcon, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/item-image1@3x.png")}
      />
      <Image
        style={[styles.itemStoryChild, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4@3x.png")}
      />
      <Text style={styles.padi}>Soja</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  itemImageIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  itemStoryChild: {
    height: "96.25%",
    width: "95%",
    top: "1.88%",
    right: "2.5%",
    bottom: "1.88%",
    left: "2.5%",
    opacity: 0.6,
  },
  padi: {
    top: 100,
    left: 3,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.colorWhitesmoke,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 114,
    height: 57,
    position: "absolute",
  },
  itemStory: {
    top: 168,
    left: 30,
    width: 120,
    height: 160,
    position: "absolute",
  },
});

export default FormContainer;
