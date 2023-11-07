import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ItemStory = ({
  itemImage,
  padi,
  itemStoryPosition,
  itemStoryWidth,
  itemStoryTop,
  itemStoryLeft,
  itemStoryHeight,
  onItemStoryPress,
}) => {
  const itemStoryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", itemStoryPosition),
      ...getStyleValue("width", itemStoryWidth),
      ...getStyleValue("top", itemStoryTop),
      ...getStyleValue("left", itemStoryLeft),
      ...getStyleValue("height", itemStoryHeight),
    };
  }, [
    itemStoryPosition,
    itemStoryWidth,
    itemStoryTop,
    itemStoryLeft,
    itemStoryHeight,
  ]);

  return (
    <View style={[styles.itemStory, itemStoryStyle]} onPress={onItemStoryPress}>
      <Image
        style={[styles.itemImageIcon, styles.itemLayout]}
        contentFit="cover"
        source={itemImage}
      />
      <LinearGradient
        style={[styles.itemStoryChild, styles.itemLayout]}
        locations={[0, 1]}
        colors={["rgba(58, 63, 71, 0.3)", "#3a3f47"]}
      />
      <Text style={styles.padi}>{padi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
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
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  itemStoryChild: {
    height: "96.25%",
    width: "95%",
    top: "1.88%",
    right: "2.5%",
    bottom: "1.88%",
    left: "2.5%",
    opacity: 0.6,
    backgroundColor: "transparent",
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
    width: 120,
    height: 160,
  },
});

export default ItemStory;
