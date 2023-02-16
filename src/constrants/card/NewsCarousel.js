import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, sizes, spacing} from '../../common/theme';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const NewsCarousel = ({hotels}) => {
  const navigation = useNavigation()
 
  return (
    <Carousel
      items={hotels}
      renderItem={({item, index}) => {
        return(
          <TouchableOpacity 
          style={styles.render}
          onPress={()=> {  navigation.navigate('detail_card', {trip: item});

        }}>
      <Image style={styles.image}
      source={{uri: item.image}} />
      <View style={styles.rows}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.location}</Text>
      </View>
    </TouchableOpacity>
          // <Card style={[styles.card, style]}>
          //   <Image source={item.image} style={styles.image}/>
          //   <View style={styles.row}>
          //   <Text style={styles.title}>{item.title}</Text>
          //   </View>
          //     <CardContent style={styles.content}>
          //     <View style={styles.titleBox}>
          //       <Text style={styles.title}>{item.title}</Text>
          //       <View style={styles.locationBox}>
          //         <Text style={styles.location}>{item.location}</Text>
          //         <Icon icon="Location" size={18} style={styles.locationIcon} />
          //       </View>
          //     </View>
          //     <View style={styles.priceBox}>
          //       <Text style={styles.price}>{item.pricePeerDay}</Text>
          //       <Text style={styles.priceCaption}>peer day</Text>
          //     </View>
          //   </CardContent>
          // </Card>
        )
      }}
      
      
      />
  );
};

const styles = StyleSheet.create({
  render: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 3
},
  image: {
    width: 100,
    height: 100,
    margin: 5
  },
  author: {
    fontSize: 16,
    color: 'red'
  },
  row: {
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    height: 88,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: colors.gray,
    marginBottom:15
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 2,
  },
  location: {
    fontSize: sizes.caption,
    color: colors.lightGray,
  },
  locationIcon: {
    tintColor: colors.gray,
  },
  priceBox: {
    alignItems: 'flex-end',
    flexShrink: 0,
  },
  price: {
    fontSize: sizes.body,
    fontWeight: 'bold',
    color: colors.primary,
  },
  priceCaption: {
    fontSize: sizes.caption,
    color: colors.lightGray,
    marginTop: 2,
  },
});

export default NewsCarousel;
