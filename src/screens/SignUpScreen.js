import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import pattern from '../../assets/pattern.png'
import logo from '../../assets/mainlogo.png'
import { button1 } from '../common/button'
import { errormessage, formgroup, head1, head2, input, input1, label, link, link2 } from '../common/formcss'
const Signup = ({
    navigation
}) => {

    const [fdata, setFdata] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const [errormsg, setErrormsg] = useState(null);

    const Sendtobackend = () => {
        // console.log(fdata);
        if (fdata.username == '' ||
            fdata.email == '' ||
            fdata.password == '' ||
            fdata.cpassword == '' ) {
            setErrormsg('All fields are required');
            return;
        }
        else {
            if (fdata.password != fdata.cpassword) {
                setErrormsg('Password and Confirm Password must be same');
                return;
            }
            else {
                var url = 'http://192.168.99.59:80/hilchin/server/signUp.php';
                var headers={
                 
                    'Content-Type':'application.json'
                };
               
                fetch(url,
                    {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(fdata)
                    })
                    .then((response)=>response.json())
                    .then((response)=>
                    {
                        alert(response[0].Message);
                    })
                    .catch((error)=>
                    {
                        alert("Error" + error);
                    })
                
            }
        }

    }
    const changeLogin = () => {
        navigation.navigate('login')
      }
    return (
        <View style={styles.container}>
            <Image style={styles.patternbg} source={pattern} />

            <View style={styles.container1}>
                <View style={styles.s1}>

                </View>
                <ScrollView style={styles.s2}>
                    <Text style={head1}>Шинэ хэрэглэгч</Text>
                    <Text style={link2}>Бүртгэл үүссэн бол&nbsp;
                        <Text style={link}
                            onPress={() => navigation.navigate('login')}
                        >
                            Нэвтрэх
                        </Text>
                    </Text>
                    {
                        errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
                    }
                    <View style={formgroup}>
                        <Text style={label}>Нэр</Text>
                        <TextInput style={input} placeholder="Нэрээ оруулна уу"
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, username: text })}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Цахим хаяг</Text>
                        <TextInput style={input} placeholder="Цахим хаягаа оруулна уу"
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, email: text })}
                        />
                    </View>
                    {/* <View style={formgroup}>
                        <Text style={label}>DOB</Text>
                        <TextInput style={input} placeholder="Enter your Date of Birth"
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, dob: text })}
                        />
                    </View> */}
                    <View style={formgroup}>
                        <Text style={label}>Нууц үг</Text>
                        <TextInput style={input} placeholder="Нууц үгээ оруулна уу"
                            onPressIn={() => setErrormsg(null)}
                            secureTextEntry={true}
                            onChangeText={(text) => setFdata({ ...fdata, password: text })}
                        />
                    </View>

                    <View style={formgroup}>
                        <Text style={label}>Нууц үг</Text>
                        <TextInput style={input} placeholder="Нууц үгээ дахин оруулна уу"
                            onPressIn={() => setErrormsg(null)}
                            secureTextEntry={true}
                            onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
                        />
                    </View>
                    {/* <View style={formgroup}>
                        <Text style={label}>Address</Text>
                        <TextInput style={input1} placeholder="Enter your Address"
                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, address: text })}
                        />
                    </View> */}

                    <TouchableOpacity
                        onPress={() => {
                            Sendtobackend();
                        }}
                    >
                        <Text style={button1}

                        >Бүртгүүлэх</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('login')}
                    >
                        <Text style={button1}

                        >Гарах</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',

    },
    patternbg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    s1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
    },
    small1: {
        color: '#fff',
        fontSize: 17,
    }
    ,
    h1: {
        fontSize: 30,
        color: '#fff',
    },
    s2: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,

    },
    formgroup: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginVertical: 10,
    },
    label: {
        fontSize: 17,
        color: '#000',
        marginLeft: 10,
        marginBottom: 5,
    },
    input: {
        backgroundColor: "#FFB0CC",
        borderRadius: 20,
        padding: 10,
    },
    fp: {
        display: 'flex',
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 5,
    }
})