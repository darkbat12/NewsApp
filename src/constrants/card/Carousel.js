import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {sizes, spacing} from '../../common/theme';

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2)
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;
const Carousel = ({renderItem, items = []}) => {
  
  const[detHot, setDetHot] = useState([])
  
  useEffect(()=>{
    deHot()
  },[])
  function deHot(){
    axios.get('http://192.168.99.59:80/hilchin/server/hotel.json',{
      method: 'POST',
      headers: {
        'Content-Type':'application.json'
      },
      body: JSON.stringify(detHot)
    })
    .then(function(response){
      setDetHot(response.data.HOTELS)
      console.log(" ------> ",response.data.HOTELS)
    })
    .catch(function(error){
      console.log(error)
    })
  }
  const ItemDivider = () => {
    return(
      <View style={styles.separator}/>
    )
  }
  return (
    <FlatList
      data={items}
      paddingVertical
      style={styles.container}
      snapToInterval={CARD_WIDTH_SPACING}
      ItemSeparatorComponent={ItemDivider}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
    ///Заасан индекс дээр өгөгдсөн зүйлийн өвөрмөц түлхүүрийг задлахад ашигладаг. Түлхүүрийг кэш хийх, дахин захиалгыг хянах хариу үйлдэл хийх түлхүүр болгон ашигладаг. Өгөгдмөл олборлогч нь item.key-г шалгаад дараа нь React шиг индексийг ашиглахад буцдаг.
      renderItem={({item, index}) => {
        if (renderItem) {
          return renderItem({
            item,
            index,
            style: {
              width: CARD_WIDTH,
              marginLeft: spacing.l,
              marginRight: index === items.length - 1 ? spacing.l : 0,
            },
          });
        }
        return null;
      }}
    />
  //   <View style={styles.container}>
  //   <FlatList 
  //   data={items}
  //   decelerationRate="fast"
  //   showsHorizontalScrollIndicator={false}
  //   renderItem={({item, index}) =>{
  //     if(renderItem){
  //       return renderItem({
  //         item, index, style: {
  //           width: CARD_WIDTH,
  //           marginLeft: spacing.l,
  //           marginRight: index === items.length - 1 ? spacing.l : 0,
  //         },
          
  //       })
  //     }
  //     return null;
  //   }} 
  //   keyExtractor={i => i.id}
  //   ItemSeparatorComponent={ItemDivider}
  //   />
  // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.l,
    
  },
  separator:{
    height: 1,
    width: '100%',
    backgroundColor: 'black'
},
});

export default Carousel;
