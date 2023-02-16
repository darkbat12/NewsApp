import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import Icon from "../common/icon/Icon";
import { colors, sizes, spacing } from "../common/theme";
import SectionHeader from "../constrants/header/SectionHeader";
const Detail_card = ({route }) => {
  const { trip } = route.params;
  console.log("----->", trip);
  return (
   <View style={styles.header}>
    <Image source={{uri: trip.image}} style={styles.image}/>
    <SectionHeader
    title={trip.title}
    containerStyle={styles.sectionHeader}
    titleStyle={styles.sectionTitle}/>
    <Text>{trip.description}</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: colors.gray,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    left: spacing.l,
    zIndex: 1,
  },
  backIcon: {
    tintColor: colors.white,
  },
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
    marginTop: 50,
  },
  sectionHeader: {
    marginTop: spacing.m,
  },
  sectionTitle: {
    color: colors.lightGray,
    fontWeight: "normal",
  },
});
export default Detail_card;
