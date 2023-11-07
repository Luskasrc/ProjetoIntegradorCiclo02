import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormContainer from "../components/FormContainer";
import ItemStory from "../components/ItemStory";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const HomeListV2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeListV21}>
      <Text style={[styles.olUsurio, styles.olUsurioLayout]}>
        Olá, Usuário!
      </Text>
      <Text style={[styles.precisaDeAlgum1, styles.informaesTypo]}>
        Precisa de algum serviço?
      </Text>
      <View style={[styles.location, styles.locationLayout4]}>
        <Image
          style={[styles.icLocationIcon1, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/ic-location@3x.png")}
        />
        <Text style={[styles.pisCidade, styles.homeClr]}>Páis, cidade.</Text>
      </View>
      <View style={[styles.itemImageParent, styles.itemPosition]}>
        <Image
          style={[styles.itemImageIcon, styles.itemIconLayout]}
          contentFit="cover"
          source={require("../assets/item-image@3x.png")}
        />
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["rgba(58, 63, 71, 0.09)", "#3a3f47"]}
        />
        <View style={[styles.locationParent, styles.locationPosition]}>
          <View style={[styles.location1, styles.locationLayout4]}>
            <Text style={styles.capinarLote}>Capinar Lote</Text>
            <Image
              style={[styles.vectorIcon4, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector@3x.png")}
            />
          </View>
          <View style={[styles.locationGroup, styles.locationPosition]}>
            <View style={[styles.location2, styles.locationLayout2]}>
              <Text style={[styles.text6, styles.textTypo]}>90 %</Text>
              <Image
                style={[styles.icHappyIcon3, styles.happyIconPosition]}
                contentFit="cover"
                source={require("../assets/ic-happy@3x.png")}
              />
            </View>
            <View style={[styles.person, styles.personLayout]}>
              <Text style={[styles.text7, styles.textTypo]}>20</Text>
              <Image
                style={[styles.icPersonIcon4, styles.timeIconPosition]}
                contentFit="cover"
                source={require("../assets/ic-person@3x.png")}
              />
            </View>
            <View style={styles.location3}>
              <Text style={[styles.text7, styles.textTypo]}>
                4 - 5 Horas/Dia
              </Text>
              <Image
                style={[styles.icTimeIcon3, styles.timeIconPosition]}
                contentFit="cover"
                source={require("../assets/ic-time@3x.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.itemImageIcon1, styles.itemIconLayout]}
        contentFit="cover"
        source={require("../assets/item-image@3x.png")}
      />
      <LinearGradient
        style={[styles.homeListV2Child, styles.groupChildLayout]}
        locations={[0, 1]}
        colors={["rgba(58, 63, 71, 0.09)", "#3a3f47"]}
      />
      <View style={[styles.groupView, styles.locationLayout1]}>
        <Image
          style={[styles.locationIcon1, styles.locationIconLayout]}
          contentFit="cover"
          source={require("../assets/vector@3x.png")}
        />
        <View style={[styles.locationParent1, styles.locationLayout1]}>
          <View style={[styles.location4, styles.locationLayout1]}>
            <Text style={[styles.text8, styles.text8Position]}>90 %</Text>
            <Image
              style={[styles.icHappyIcon4, styles.happyIconPosition]}
              contentFit="cover"
              source={require("../assets/ic-happy1@3x.png")}
            />
          </View>
          <View style={[styles.person1, styles.text8Position]}>
            <Text style={[styles.text7, styles.textTypo]}>20</Text>
            <Image
              style={[styles.icPersonIcon4, styles.timeIconPosition]}
              contentFit="cover"
              source={require("../assets/ic-person@3x.png")}
            />
          </View>
          <View style={[styles.location5, styles.locationLayout]}>
            <Text style={[styles.text7, styles.textTypo]}>4 - 5 Bulan</Text>
            <Image
              style={[styles.icTimeIcon4, styles.timeIconPosition]}
              contentFit="cover"
              source={require("../assets/ic-time@3x.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.itemImageGroup, styles.itemPosition]}>
        <Image
          style={[styles.itemImageIcon2, styles.itemIconLayout]}
          contentFit="cover"
          source={require("../assets/item-image@3x.png")}
        />
        <LinearGradient
          style={[styles.groupItem, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["rgba(58, 63, 71, 0.09)", "#3a3f47"]}
        />
        <View style={[styles.locationParent2, styles.locationParentPosition]}>
          <View style={[styles.location6, styles.locationLayout4]}>
            <Text style={styles.capinarLote}>Cabai</Text>
            <Image
              style={[styles.vectorIcon5, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector@3x.png")}
            />
          </View>
          <View style={[styles.locationParent3, styles.locationParentPosition]}>
            <View style={[styles.location7, styles.locationParentPosition]}>
              <Text style={[styles.text10, styles.text10Position]}>90 %</Text>
              <Image
                style={[styles.icHappyIcon5, styles.happyIconPosition]}
                contentFit="cover"
                source={require("../assets/ic-happy2@3x.png")}
              />
            </View>
            <View style={[styles.person2, styles.text10Position]}>
              <Text style={[styles.text7, styles.textTypo]}>20</Text>
              <Image
                style={[styles.icPersonIcon4, styles.timeIconPosition]}
                contentFit="cover"
                source={require("../assets/ic-person@3x.png")}
              />
            </View>
            <View style={[styles.location8, styles.text10Position]}>
              <Text style={[styles.text7, styles.textTypo]}>4 - 5 Bulan</Text>
              <Image
                style={[styles.icTimeIcon4, styles.timeIconPosition]}
                contentFit="cover"
                source={require("../assets/ic-time@3x.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.encontreServiosAqui1, styles.groupInnerLayout]}>
          Encontre serviços aqui...
        </Text>
        <Image
          style={[styles.icSearchIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ic-search@3x.png")}
        />
      </View>
      <FormContainer />
      <ItemStory
        itemImage={require("../assets/item-image2@3x.png")}
        padi="Milho"
        itemStoryPosition="absolute"
        itemStoryWidth={120}
        itemStoryTop={170}
        itemStoryLeft={168}
        itemStoryHeight={160}
        onItemStoryPress={() => navigation.navigate("PlantDetail")}
      />
      <ItemStory
        itemImage={require("../assets/item-image3@3x.png")}
        padi="Trigo"
        itemStoryPosition="absolute"
        itemStoryWidth={102}
        itemStoryTop={170}
        itemStoryLeft={306}
        itemStoryHeight={160}
      />
      <Text style={[styles.informaes, styles.informaesTypo]}>Informações</Text>
      <View style={styles.homeListV2Item} />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon6, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1@3x.png")}
          />
          <Text style={[styles.home, styles.textTypo]}>Home</Text>
        </View>
        <View style={[styles.icPersonParent, styles.groupParentLayout]}>
          <Image
            style={[styles.icPersonIcon7, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/ic-person1@3x.png")}
          />
          <Text style={[styles.perfil, styles.perfilTypo]}>Perfil</Text>
        </View>
        <View style={[styles.vectorGroup, styles.groupParentLayout]}>
          <Image
            style={[styles.vectorIcon7, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector2@3x.png")}
          />
          <Text style={styles.perfilTypo}>Serviços</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  olUsurioLayout: {
    width: 315,
    left: 30,
  },
  informaesTypo: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    width: 315,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
    left: 30,
    position: "absolute",
  },
  locationLayout4: {
    height: 21,
    position: "absolute",
  },
  locationIconLayout: {
    height: 14,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeClr: {
    color: Color.colorOlivedrab,
    position: "absolute",
  },
  itemPosition: {
    left: "8%",
    right: "8%",
    width: "84%",
  },
  itemIconLayout: {
    height: 177,
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    backgroundColor: "transparent",
    height: 171,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  locationPosition: {
    height: 235,
    top: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 4,
    height: 14,
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  locationLayout2: {
    width: 52,
    left: 57,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  happyIconPosition: {
    maxHeight: "100%",
    right: "76.92%",
    top: "0%",
    width: "23.08%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  personLayout: {
    width: 39,
    height: 18,
    left: 0,
  },
  timeIconPosition: {
    height: 12,
    maxWidth: "100%",
    left: "0%",
    top: 3,
    position: "absolute",
    overflow: "hidden",
  },
  locationLayout1: {
    height: 309,
    position: "absolute",
  },
  text8Position: {
    top: 291,
    position: "absolute",
  },
  locationLayout: {
    width: 90,
    left: 127,
    height: 18,
  },
  locationParentPosition: {
    height: 383,
    top: 0,
    position: "absolute",
  },
  text10Position: {
    top: 365,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 52,
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 38,
    position: "absolute",
  },
  iconPosition: {
    bottom: 20,
    height: 18,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  perfilTypo: {
    fontWeight: "300",
    bottom: 0,
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  olUsurio: {
    top: 55,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppins,
    width: 315,
    left: 30,
    position: "absolute",
  },
  precisaDeAlgum1: {
    fontWeight: "500",
    top: 332,
  },
  icLocationIcon1: {
    width: "3.46%",
    right: "96.54%",
    left: "0%",
    top: 3,
    height: 14,
  },
  pisCidade: {
    left: 23,
    width: 292,
    fontSize: FontSize.size_sm,
    top: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  location: {
    top: 103,
    left: "8%",
    right: "8%",
    width: "84%",
  },
  itemImageIcon: {
    top: 85,
    right: "0%",
    left: "0%",
    width: "100%",
    height: 177,
  },
  groupChild: {
    top: 88,
    left: "0.95%",
    right: "0.95%",
    width: "98.1%",
    height: 171,
  },
  capinarLote: {
    left: 19,
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_sm,
    top: 0,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  vectorIcon4: {
    width: "10.76%",
    right: "89.24%",
  },
  location1: {
    top: 180,
    left: 44,
    width: 110,
  },
  text6: {
    left: 24,
    fontSize: FontSize.size_xs,
    color: Color.colorWhitesmoke,
    top: 217,
    position: "absolute",
  },
  icHappyIcon3: {
    height: "3.14%",
    bottom: "96.86%",
  },
  location2: {
    height: 235,
    top: 0,
    position: "absolute",
  },
  text7: {
    left: 24,
    fontSize: FontSize.size_xs,
    color: Color.colorWhitesmoke,
    top: 0,
    position: "absolute",
  },
  icPersonIcon4: {
    width: "30.77%",
    right: "69.23%",
  },
  person: {
    height: 18,
    top: 217,
    position: "absolute",
  },
  icTimeIcon3: {
    width: "10.34%",
    right: "89.66%",
  },
  location3: {
    width: 116,
    left: 127,
    height: 18,
    top: 217,
    position: "absolute",
  },
  locationGroup: {
    left: 0,
    width: 243,
    height: 235,
  },
  locationParent: {
    width: 243,
    height: 235,
    left: 49,
  },
  itemImageParent: {
    top: 355,
    height: 262,
    position: "absolute",
  },
  itemImageIcon1: {
    top: 633,
    left: "8%",
    right: "8%",
    width: "84%",
  },
  homeListV2Child: {
    width: "82.4%",
    top: 636,
    right: "8.8%",
    left: "8.8%",
  },
  locationIcon1: {
    width: "5.43%",
    top: 262,
    right: "58.62%",
    left: "35.94%",
  },
  text8: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: 24,
    color: Color.colorWhitesmoke,
  },
  icHappyIcon4: {
    height: "2.39%",
    bottom: "97.61%",
  },
  location4: {
    width: 52,
    left: 57,
    top: 0,
  },
  person1: {
    height: 18,
    width: 39,
    left: 0,
  },
  icTimeIcon4: {
    width: "13.33%",
    right: "86.67%",
  },
  location5: {
    top: 291,
    position: "absolute",
  },
  locationParent1: {
    width: 217,
    left: 0,
    top: 0,
  },
  groupView: {
    width: "57.87%",
    top: 474,
    right: "21.07%",
    left: "21.07%",
  },
  itemImageIcon2: {
    top: 826,
    right: "-9.52%",
    left: "9.52%",
    width: "100%",
    height: 177,
  },
  groupItem: {
    top: 236,
    left: "0.95%",
    right: "0.95%",
    width: "98.1%",
    height: 171,
  },
  vectorIcon5: {
    width: "19.16%",
    right: "80.84%",
  },
  location6: {
    left: 78,
    width: 62,
    top: 332,
  },
  text10: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: 24,
    color: Color.colorWhitesmoke,
  },
  icHappyIcon5: {
    height: "1.93%",
    bottom: "98.07%",
  },
  location7: {
    width: 52,
    left: 57,
  },
  person2: {
    height: 18,
    width: 39,
    left: 0,
  },
  location8: {
    width: 90,
    left: 127,
    height: 18,
  },
  locationParent3: {
    width: 217,
    left: 0,
  },
  locationParent2: {
    width: 217,
    left: 49,
  },
  itemImageGroup: {
    top: 593,
    height: 410,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorGainsboro,
    left: 0,
    borderRadius: Border.br_5xs,
    height: 52,
    top: 0,
    width: 315,
  },
  encontreServiosAqui1: {
    left: 56,
    color: Color.colorCadetblue,
    width: 240,
    fontSize: FontSize.size_sm,
    top: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  icSearchIcon1: {
    width: "5.71%",
    top: 17,
    right: "87.94%",
    left: "6.35%",
    height: 18,
  },
  rectangleParent: {
    top: 372,
    width: 315,
    left: 30,
    height: 52,
  },
  informaes: {
    top: 128,
    fontWeight: "500",
  },
  homeListV2Item: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 375,
    height: 60,
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke,
  },
  vectorIcon6: {
    width: "50.04%",
    right: "24.96%",
    bottom: 19,
    left: "25%",
    height: 18,
  },
  home: {
    bottom: 0,
    left: 0,
    color: Color.colorOlivedrab,
    position: "absolute",
  },
  vectorParent: {
    width: "12.16%",
    right: "87.84%",
    bottom: 1,
    height: 37,
    left: "0%",
    position: "absolute",
  },
  icPersonIcon7: {
    width: "62.07%",
    right: "17.24%",
    left: "20.69%",
  },
  perfil: {
    width: 29,
    alignItems: "center",
    display: "flex",
  },
  icPersonParent: {
    width: "9.8%",
    left: "90.2%",
    bottom: 0,
    right: "0%",
  },
  vectorIcon7: {
    width: "30.32%",
    right: "41.68%",
    left: "28%",
  },
  vectorGroup: {
    width: "16.89%",
    right: "37.84%",
    left: "45.27%",
    bottom: 0,
  },
  groupParent: {
    width: "78.93%",
    right: "9.33%",
    bottom: 11,
    left: "11.73%",
  },
  homeListV21: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default HomeListV2;
