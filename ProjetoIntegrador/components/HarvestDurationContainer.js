import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HarvestDurationContainer = ({
  harvestDuration,
  cropHarvestDuration,
  cropHarvestImageSize,
  icTimeIconTop,
}) => {
  const personStyle = useMemo(() => {
    return {
      ...getStyleValue("top", icTimeIconTop),
    };
  }, [icTimeIconTop]);

  return (
    <View style={[styles.person, personStyle]}>
      <View style={styles.duraoDaColheitaParent}>
        <Text style={[styles.duraoDaColheita1, styles.diasFlexBox]}>
          {harvestDuration}
        </Text>
        <Text style={[styles.dias, styles.diasFlexBox]}>
          {cropHarvestDuration}
        </Text>
      </View>
      <Image
        style={styles.icTimeIcon1}
        contentFit="cover"
        source={cropHarvestImageSize}
      />
      <View style={styles.personChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  diasFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
    left: 0,
    width: 279,
    position: "absolute",
  },
  duraoDaColheita1: {
    fontSize: FontSize.size_sm,
    top: 0,
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
  },
  dias: {
    top: 25,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
  },
  duraoDaColheitaParent: {
    left: 36,
    height: 43,
    width: 279,
    top: 0,
    position: "absolute",
  },
  icTimeIcon1: {
    width: "5.71%",
    top: 12,
    right: "94.29%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 18,
    position: "absolute",
  },
  personChild: {
    top: 52,
    backgroundColor: Color.colorGainsboro,
    height: 2,
    left: 0,
    width: 315,
    position: "absolute",
  },
  person: {
    top: 426,
    left: 30,
    height: 54,
    width: 315,
    position: "absolute",
  },
});

export default HarvestDurationContainer;
