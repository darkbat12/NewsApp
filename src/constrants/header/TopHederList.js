import { useNavigation } from "@react-navigation/native";
import React, {Component} from "react";
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import { SharedElement } from "react-native-shared-element";
import { colors, shadow, sizes, spacing } from "../../common/theme";
const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

export default class TopHederList extends Component {
    
  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoading: true
    };
  }
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity 
      style={{
        marginLeft: spacing.l,
        marginRight: index === item.length - 1 ? spacing.l : 0,
      }}
      onPress={()=>   this.props.navigation.navigate('detailscreen', {trip: item})}>
              <View style={[styles.card, shadow.dark]}>
              <SharedElement id={`trip.${item.id}.image`}>
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              </SharedElement>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                
              </View>
            </View>
        <View style={styles.rows}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.authors}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderSeparator = () => {
    return(
        <View
            style={styles.separator}>

        </View>
    )
  }
  componentDidMount() {
    const url = "http://192.168.1.3:80/hilchin/server/top.json";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.topplacesdata,
          isLoading: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
     
      <View style={styles.container}>
       <FlatList
        data={this.state.dataSource}
        horizontal
        snapToInterval={CARD_WIDTH_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderItem}
        keyExtractor={i => i.id}
        ItemSeparatorComponent={this.renderSeparator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      marginVertical: 10,
      backgroundColor: colors.white,
      borderRadius: sizes.radius
    },
    favorite: {
      position: 'absolute',
      top: spacing.m,
      right: spacing.m,
      zIndex: 1,
    },
    imageBox: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      borderRadius: sizes.radius,
      overflow: 'hidden',
    },
    image: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      resizeMode: 'cover',
    },
    titleBox: {
      position: 'absolute',
      top: CARD_HEIGHT - 80,
      left: 16,
    },
    title: {
      fontSize: sizes.h2,
      fontWeight: 'bold',
      color: colors.white,
    },
    location: {
      fontSize: sizes.h3,
      color: colors.white,
    },
  });
