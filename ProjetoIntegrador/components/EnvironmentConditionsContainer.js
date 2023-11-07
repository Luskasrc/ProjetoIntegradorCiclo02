import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EnvironmentConditionsContainer = ({
  ms1,
  aviso,
  prop,
  icRain,
  c,
  icTemperature,
  prop1,
  icHumidity,
  propTop,
  propColor,
  propColor1,
}) => {
  const person1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const cStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  return (
    <View style={[styles.person, person1Style]}>
      <View style={[styles.ms1Parent, styles.ms1ParentPosition]}>
        <Text style={styles.ms1}>{ms1}</Text>
        <Text style={styles.aviso}>{aviso}</Text>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={styles.text2}>{prop}</Text>
          <Image
            style={[styles.icRainIcon1, styles.iconLayout]}
            contentFit="cover"
            source={icRain}
          />
        </View>
        <View style={[styles.cParent, styles.parentPosition]}>
          <Text style={[styles.c, styles.cPosition, cStyle]}>{c}</Text>
          <Image
            style={[styles.icTemperatureIcon1, styles.iconLayout]}
            contentFit="cover"
            source={icTemperature}
          />
        </View>
        <View style={[styles.group, styles.parentPosition]}>
          <Text style={[styles.text3, styles.cPosition, textStyle]}>
            {prop1}
          </Text>
          <Image
            style={styles.icHumidityIcon1}
            contentFit="cover"
            source={icHumidity}
          />
        </View>
      </View>
      <View style={[styles.personChild, styles.ms1ParentPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  ms1ParentPosition: {
    left: 0,
    width: 315,
    position: "absolute",
  },
  parentPosition: {
    height: 42,
    top: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    overflow: "hidden",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
  },
  cPosition: {
    color: Color.colorOlivedrab,
    top: 24,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  ms1: {
    fontSize: FontSize.size_sm,
    width: 157,
    alignItems: "center",
    display: "flex",
    color: Color.colorCoral,
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  aviso: {
    top: 25,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    width: 157,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorCoral,
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  text2: {
    top: 24,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorCoral,
    fontFamily: FontFamily.poppins,
    left: 0,
    position: "absolute",
  },
  icRainIcon1: {
    width: "90%",
    right: "0%",
    left: "10%",
  },
  parent: {
    left: 209,
    width: 20,
  },
  c: {
    textAlign: "center",
  },
  icTemperatureIcon1: {
    width: "62.07%",
    right: "17.24%",
    left: "20.69%",
  },
  cParent: {
    left: 251,
    width: 29,
  },
  text3: {
    textAlign: "left",
    color: Color.colorOlivedrab,
  },
  icHumidityIcon1: {
    height: "40.42%",
    width: "86.4%",
    top: "0%",
    right: "0.27%",
    bottom: "59.58%",
    left: "13.33%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  group: {
    left: 300,
    width: 15,
  },
  ms1Parent: {
    height: 43,
    top: 0,
    left: 0,
  },
  personChild: {
    top: 52,
    backgroundColor: Color.colorGainsboro,
    height: 2,
  },
  person: {
    top: 544,
    left: 30,
    height: 54,
    width: 315,
    position: "absolute",
  },
});

export default EnvironmentConditionsContainer;
