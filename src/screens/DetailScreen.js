import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, sizes, spacing} from '../common/theme';
import Icon from '../common/icon/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TripDetailsCard from '../constrants/card/TripDetailCard';
import * as Animatable from 'react-native-animatable';
import TripDetailsCarousel from '../constrants/card/Detailscarausel';

const DetailScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const {trip} = route.params;
  const slides = [trip.image];
  return (
    <View style={styles.container}>
      <Animatable.View
        style={[styles.backButton, {marginTop: insets.top}]}
        animation="fadeIn"
        delay={500}
        duration={400}
        easing="ease-in-out">
        <Icon
          icon="ArrowLeft"
          style={styles.backIcon}
          onPress={navigation.goBack}
        />
      </Animatable.View>
      <Animatable.View
        style={[styles.favoriteButton, {marginTop: insets.top}]}
        animation="fadeIn"
        delay={500}
        duration={400}
        easing="ease-in-out">
      </Animatable.View>
      <TripDetailsCarousel slides={slides} id={trip.id} />
      <TripDetailsCard trip={trip} />
    </View>
  );
};

DetailScreen.sharedElements = route => {
  const {trip} = route.params;
  return [
    {
      id: `trip.${trip.id}.image`,
    },
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    left: spacing.l,
    zIndex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    right: spacing.l,
    zIndex: 1,
  },
  backIcon: {
    tintColor: colors.white,
  },
});

export default DetailScreen;
