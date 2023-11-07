import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import HarvestDurationContainer from "../components/HarvestDurationContainer";
import RelatedInformationContainer from "../components/RelatedInformationContainer";
import EnvironmentConditionsContainer from "../components/EnvironmentConditionsContainer";
import { useNavigation } from "@react-navigation/native";
import PlantarForm from "../components/PlantarForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PlantDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.plantDetail}>
      <Image
        style={styles.biinfoCircleFillIcon1}
        contentFit="cover"
        source={require("../assets/biinfocirclefill@3x.png")}
      />
      <Text
        style={[styles.informaesRelacionadas, styles.informaesRelacionadasTypo]}
      >
        Informações relacionadas
      </Text>
      <Text
        style={[
          styles.suasCondiesAmbientais1,
          styles.informaesRelacionadasTypo,
        ]}
      >
        Suas condições ambientais
      </Text>
      <HarvestDurationContainer
        harvestDuration="Duração da colheita"
        cropHarvestDuration="90 - 100 Dias"
        cropHarvestImageSize={require("../assets/ic-time1@3x.png")}
      />
      <HarvestDurationContainer
        harvestDuration="Produtores perto de você"
        cropHarvestDuration="21"
        cropHarvestImageSize={require("../assets/ic-person1@3x.png")}
        icTimeIconTop={363}
      />
      <RelatedInformationContainer />
      <EnvironmentConditionsContainer
        ms1="Mês 1"
        aviso="Aviso"
        prop="351"
        icRain={require("../assets/ic-rain@3x.png")}
        c="24°C"
        icTemperature={require("../assets/ic-temperature@3x.png")}
        prop1="83"
        icHumidity={require("../assets/ic-humidity@3x.png")}
      />
      <View style={[styles.person, styles.personLayout]}>
        <View style={[styles.ms2Parent, styles.personLayout]}>
          <Text style={styles.ms2}>Mês 2</Text>
          <Text style={styles.aceitvel}>Aceitável</Text>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text3, styles.cTypo]}>286</Text>
            <Image
              style={[styles.icRainIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ic-rain1@3x.png")}
            />
          </View>
          <View style={[styles.cParent, styles.parentPosition]}>
            <Text style={[styles.c, styles.cFlexBox]}>26°C</Text>
            <Image
              style={[styles.icTemperatureIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ic-temperature@3x.png")}
            />
          </View>
          <View style={[styles.group, styles.parentPosition]}>
            <Text style={[styles.text3, styles.cTypo]}>78</Text>
            <Image
              style={[styles.icHumidityIcon1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/ic-humidity@3x.png")}
            />
          </View>
        </View>
        <View style={[styles.personChild, styles.personLayout]} />
      </View>
      <EnvironmentConditionsContainer
        ms1="Mês 3"
        aviso="Inapropriado"
        prop="120"
        icRain={require("../assets/ic-rain2@3x.png")}
        c="39°C"
        icTemperature={require("../assets/ic-temperature1@3x.png")}
        prop1="50"
        icHumidity={require("../assets/ic-humidity1@3x.png")}
        propTop={670}
        propColor="#d65b32"
        propColor1="#d65b32"
      />
      <Image
        style={[styles.itemImageIcon, styles.itemImageIconPosition]}
        contentFit="cover"
        source={require("../assets/item-image4@3x.png")}
      />
      <Image
        style={[styles.plantDetailChild, styles.itemImageIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-6@3x.png")}
      />
      <View style={styles.vectorParent}>
        <Pressable
          style={[styles.vector, styles.iconLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector3@3x.png")}
          />
        </Pressable>
        <Text style={[styles.milho, styles.milhoClr]}>Milho</Text>
      </View>
      <View style={[styles.ellipseParent, styles.text5Layout]}>
        <Image
          style={[styles.groupChild, styles.text5Layout]}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text5, styles.text5Layout]}>90</Text>
      </View>
      <PlantarForm />
    </View>
  );
};

const styles = StyleSheet.create({
  informaesRelacionadasTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "500",
    left: 30,
    position: "absolute",
  },
  personLayout: {
    width: 315,
    position: "absolute",
  },
  parentPosition: {
    height: 42,
    top: 1,
    position: "absolute",
  },
  cTypo: {
    top: 24,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.colorOlivedrab,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    position: "absolute",
  },
  cFlexBox: {
    textAlign: "center",
    left: 0,
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  itemImageIconPosition: {
    height: 211,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
  },
  milhoClr: {
    color: Color.colorWhitesmoke,
    alignItems: "center",
    display: "flex",
    top: 0,
    fontFamily: FontFamily.poppins,
  },
  text5Layout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  biinfoCircleFillIcon1: {
    top: 508,
    left: 329,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  informaesRelacionadas: {
    top: 260,
    textAlign: "left",
  },
  suasCondiesAmbientais1: {
    top: 504,
    textAlign: "left",
  },
  ms2: {
    fontSize: FontSize.size_sm,
    width: 157,
    alignItems: "center",
    display: "flex",
    color: Color.colorOlivedrab,
    left: 0,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  aceitvel: {
    top: 25,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    width: 157,
    alignItems: "center",
    display: "flex",
    color: Color.colorOlivedrab,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  text3: {
    left: 0,
    textAlign: "left",
  },
  icRainIcon1: {
    width: "81.81%",
    right: "9.1%",
    left: "9.09%",
    maxWidth: "100%",
    overflow: "hidden",
    top: 0,
  },
  parent: {
    left: 209,
    width: 22,
  },
  c: {
    top: 24,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.colorOlivedrab,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  icTemperatureIcon1: {
    width: "62.07%",
    right: "17.24%",
    left: "20.69%",
    maxWidth: "100%",
    overflow: "hidden",
    top: 0,
  },
  cParent: {
    left: 251,
    width: 29,
  },
  icHumidityIcon1: {
    height: "40.42%",
    width: "86.63%",
    top: "0%",
    right: "0%",
    bottom: "59.58%",
    left: "13.37%",
    maxHeight: "100%",
    position: "absolute",
  },
  group: {
    left: 300,
    width: 15,
  },
  ms2Parent: {
    height: 43,
    left: 0,
    top: 0,
  },
  personChild: {
    top: 52,
    backgroundColor: Color.colorGainsboro,
    height: 2,
    left: 0,
  },
  person: {
    top: 607,
    height: 54,
    left: 30,
  },
  itemImageIcon: {
    width: "100.27%",
    right: "-0.27%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  plantDetailChild: {
    width: 375,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    top: 9,
    right: "93.47%",
    width: "6.53%",
    left: "0%",
  },
  milho: {
    left: 39,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    width: 276,
    textAlign: "left",
    position: "absolute",
  },
  vectorParent: {
    width: "84%",
    top: 36,
    right: "8%",
    left: "8%",
    height: 36,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  text5: {
    fontSize: 18,
    justifyContent: "center",
    color: Color.colorWhitesmoke,
    alignItems: "center",
    display: "flex",
    top: 0,
    fontFamily: FontFamily.poppins,
    textAlign: "center",
    left: 0,
    fontWeight: "500",
    width: 50,
  },
  ellipseParent: {
    top: 186,
    left: 30,
  },
  plantDetail: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PlantDetail;
