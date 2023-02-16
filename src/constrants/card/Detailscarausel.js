import React from 'react';
import { FlatList, View, StyleSheet, Image } from 'react-native'
import { sizes } from '../../common/theme';

const Detailcarausel = ({slides, id}) => {
    console.log(slides)
    return (
        <FlatList 
        data={slides} 
        horizontal 
        pagingEnabled 
        bounces={false} 
        renderItem = {({item: image, index}) => {
            if(!index) {
                return (
                    <View style={styles.slide}>
                        <Image source={{uri: image}} style={styles.image}/>
                    </View>
                );

            }
            return <View style={styles.slide}>
                <Image source={image} style={styles.image}/>
            </View>
        }} />
        )
}
const styles = StyleSheet.create({
    slide: {
        width: sizes.width,
        height: sizes.height,
    },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover'
  }
});
export default Detailcarausel;