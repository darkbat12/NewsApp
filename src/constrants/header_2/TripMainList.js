import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors, shadow, sizes, spacing } from "../../common/theme";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-native-shared-element";
import routes from "../routes";
const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;

const TripMainList = ({ list }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.cardContainer}
            key={item.id}
            onPress={() => {
              navigation.navigate(routes.DETAIL, { trip: item });
            }}
          >
            <View style={[styles.card, shadow.light]}>
              <SharedElement id={`trip.${item.id}.image`}>
                <View style={styles.imageBox}>
                  <Image style={styles.image} source={{uri: item.image}} />
                </View>
              </SharedElement>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
  },
  location: {
    fontSize: 10,
    color: colors.lightGray,
  },
});
export default TripMainList;
