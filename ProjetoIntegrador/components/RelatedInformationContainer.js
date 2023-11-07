import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RelatedInformationContainer = () => {
  return (
    <View style={styles.person}>
      <View style={styles.suaLocalizaoCliqueAquiPParent}>
        <Text
          style={[
            styles.suaLocalizaoCliqueContainer,
            styles.rioVerdeGois1FlexBox,
          ]}
        >
          <Text style={styles.suaLocalizaoCliqueContainer1}>
            <Text style={styles.suaLocalizao}>{`Sua Localização `}</Text>
            <Text style={[styles.cliqueAquiPara, styles.rioVerdeGois1Typo]}>
              (clique aqui para alterar)
            </Text>
          </Text>
        </Text>
        <Text style={[styles.rioVerdeGois1, styles.rioVerdeGois1Typo]}>
          Rio Verde, Goiás, Brasil
        </Text>
      </View>
      <View style={styles.personChild} />
      <Image
        style={styles.icLocationIcon1}
        contentFit="cover"
        source={require("../assets/ic-location1@3x.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rioVerdeGois1FlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    width: 279,
    position: "absolute",
  },
  rioVerdeGois1Typo: {
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppins,
  },
  suaLocalizao: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
  },
  cliqueAquiPara: {
    color: Color.colorCadetblue,
  },
  suaLocalizaoCliqueContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  suaLocalizaoCliqueContainer: {
    top: 0,
    display: "flex",
    textAlign: "left",
  },
  rioVerdeGois1: {
    top: 25,
    color: Color.colorDarkslategray,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    width: 279,
    position: "absolute",
  },
  suaLocalizaoCliqueAquiPParent: {
    left: 36,
    height: 43,
    width: 279,
    top: 0,
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
  icLocationIcon1: {
    width: "4.44%",
    top: 12,
    right: "94.92%",
    left: "0.63%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 18,
    position: "absolute",
  },
  person: {
    top: 300,
    left: 30,
    height: 54,
    width: 315,
    position: "absolute",
  },
});

export default RelatedInformationContainer;
