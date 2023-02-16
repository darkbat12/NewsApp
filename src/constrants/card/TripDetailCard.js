import React, {useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {colors, sizes, spacing} from '../../common/theme';
import * as Animatable from 'react-native-animatable';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';
import CustomBackground from './CustomBackground';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Icon from '../../common/icon/Icon';
import Divider from '../../common/Divider';
import SectionHeader from '../../constrants/header/SectionHeader';
import HotelsCarousel from './NewsCarousel';
import NewsCarousel from './NewsCarousel';
import Carousel from './Carousel';
import axios from 'axios';

const AnimatedDivider = Animated.createAnimatedComponent(Divider);

const TripDetailsCard = ({trip}) => {
  // const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ['80%', '80%'], []);
  const[news, setNews] = useState([])
  const[news2, setNews2] = useState([])
  useEffect(()=>{
    topPlace()
    palace()
  },[])
  function topPlace(){
    axios.get('http://192.168.99.59:80/hilchin/server/top.json',{
      method: 'POST',
      headers: {
        'Content-Type':'application.json'
      },
      body: JSON.stringify(news)
    })
    .then(function(response){
      setNews(response.data.top)
      // console.log(" ------> ",response.data.top)
    })
    .catch(function(error){
      console.log(error)
    })
  }
  function palace(){
    axios.get('http://192.168.99.59:80/hilchin/server/places.json',{
      method: 'POST',
      headers: {
        'Content-Type':'application.json'
      },
      body: JSON.stringify(news2)
    })
    .then(function(response){
      setNews2(response.data.places)
      // console.log(" ------> ",response.data.places)
    })
    .catch(function(error){
      console.log(error)
    })
  }

 
  if(!news){
    return null;
  }
if(!news2){
  return null;
}
  return (
    <BottomSheet 
        index={0}
        backgroundComponent={CustomBackground}
        snapPoints={snapPoints} 
        handleComponent={CustomHandler}>
              <Animatable.View 
            style={styles.header} 
            animation="fadeInUp" 
            easing="ease-in-out"
            delay={500} 
            duration={400}>
                <Text style={styles.title}>{trip.title}</Text>
                <Text style={styles.location}>{trip.location}</Text>
               
            </Animatable.View>
            <View>
            <SectionHeader
            title="Үндсэн агуулга"
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
          />
           <View style={styles.summary}>
            <Text style={styles.summaryText}>{trip.description}</Text>
          </View>
          <SectionHeader
            title="Сэдвүүд"
            containerStyle={styles.sectionHeader}
            titleStyle={styles.sectionTitle}
            onPress={() => {}}
            buttonTitle="See All"
          />
            <NewsCarousel hotels={trip.hotels} />
            </View>
        </BottomSheet>
    // <BottomSheet
    //   index={0}
    //   animatedIndex={animatedIndex}
    //   snapPoints={snapPoints}
    //   backgroundComponent={CustomBackground}
    //   handleComponent={CustomHandler}>
    //   <Animatable.View
    //     style={styles.header}
    //     animation="fadeInUp"
    //     delay={500}
    //     easing="ease-in-out"
    //     duration={400}>
    //     <Animated.Text style={[styles.title, titleStyle]}>
    //       {trip.title}
    //     </Animated.Text>
    //     <View style={styles.location}>
    //       <Animated.Text style={[styles.locationText, locationStyle]}>
    //         {trip.location}
    //       </Animated.Text>
    //       <Animated.View style={locationIonStyle}>
    //         <Icon icon="Location" size={20} style={styles.locationIcon} />
    //       </Animated.View>
    //     </View>
    //   </Animatable.View>
    //   <AnimatedDivider style={contentStyle} />
    //     <Animated.View style={contentStyle}>
    //        <SectionHeader
    //         title="Summary"
    //         containerStyle={styles.sectionHeader}
    //         titleStyle={styles.sectionTitle}
    //       />
    //        <View style={styles.summary}>
    //         <Text style={styles.summaryText}>{trip.description}</Text>
    //       </View>
    //       <SectionHeader
    //         title="Hotels"
    //         containerStyle={styles.sectionHeader}
    //         titleStyle={styles.sectionTitle}
    //         onPress={() => {}}
    //         buttonTitle="See All"
    //       />
    //         <NewsCarousel hotels={trip.hotels} />
    //     </Animated.View>
    // </BottomSheet>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: colors.black,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationText: {
    fontSize: sizes.title,
    color: colors.white,
  },
  locationIcon: {
    tintColor: colors.gray,
  },
  scrollBox: {
    marginTop: spacing.s,
    marginBottom: spacing.m,
  },
  sectionHeader: {
    marginTop: spacing.m,
  },
  sectionTitle: {
    color: colors.lightGray,
    fontWeight: 'normal',
  },
  summary: {
    marginHorizontal: spacing.l,
  },
  summaryText: {
    color: colors.primary,
  },
});

export default TripDetailsCard;
