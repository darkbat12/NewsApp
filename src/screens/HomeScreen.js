import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../common/icon/Icon';
import { sizes, spacing } from '../common/theme';
import SectionHeader from '../constrants/header/SectionHeader';
import TopHeaderList from '../constrants/header/TopHeaderList';
import TripMainList from '../constrants/header_2/TripMainList';
import axios from 'axios';
import TopHederList from '../constrants/header/TopHederList';
import Login from './LoginScreen';
const Home = ({navigation}) => {
    const insets = useSafeAreaInsets();
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
    return(
        <View style={styles.container}>
           <View style={[styles.container1, {marginTop: insets.top}]}>
                <Icon icon="Hamburger" onPress={() => navigation.toggleDrawer()} />
                <Text style={styles.title}>Цахим сургалтын программ</Text>
                <Icon icon="Notification" onPress={() => {}} />
           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
            <TopHeaderList list={news} />
            <SectionHeader
            title="Хууль, эрхзүй"
          />
          
           <TripMainList list={news2} />
                    <SectionHeader
            title="Мэдээ, мэдээлэл"
          />
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.l,
    },
    title: {
      fontSize: sizes.h3,
      fontWeight: 'bold',
    },
})
export default Home;