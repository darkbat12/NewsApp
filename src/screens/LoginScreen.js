import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import pattern from "../../assets/background.jpg";
import logo from "../../assets/logo.png";
import { button1 } from "../common/button";
import {
  errormessage,
  formgroup,
  head1,
  head2,
  input,
  label,
  link,
  link2,
} from "../common/formcss";
import { version } from "../../package.json";
import routes from "../constrants/routes";
const Login = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    username: "",
    password: "",
  });
  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = async () => {
    // console.log(fdata);
    try {
      if (fdata.username == "" || fdata.password == "") {
        setErrormsg("Аль нэг талбар хоосон байна");
        return;
      } else {
        var url = "http://192.168.99.59:80/hilchin/server/login.php";
        var headers = {
          "Content-Type": "application.json",
        };
        fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(fdata),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response[0].Message == "Амжилттай") {
              console.log("true");
              navigation.navigate("home");
            } else {
              console.log("false");
              alert(response[0].Message);
            }
          })
          .catch((error) => {
            alert("Error" + error);
          });
      }
    } catch (error) {
      alert("Сүлжээгүй байна" + error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />

      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
          <Text
            style={styles.h1}
            onPress={() => navigation.navigate("welcome")}
          >
            Цахим сургалтын программ
          </Text>
          <Text style={styles.small1}>сургалт, судалгаа</Text>
        </View>
        <View style={styles.s2}>
          <Text style={head1}>Нэвтрэх</Text>
          {errormsg ? <Text style={errormessage}>{errormsg}</Text> : null}
          <View style={formgroup}>
            <Text style={label}>Нэр</Text>
            <TextInput
              style={input}
              placeholder="Нэрээ оруулна уу"
              onPressIn={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, username: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder="Нууц үгээ оруулна уу"
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
              onPressIn={() => setErrormsg(null)}
            />
          </View>
          <View style={styles.fp}>
            <Text style={link2}>
              &nbsp;
              <Text
                style={link}
                onPress={() => navigation.navigate(routes.SIGNUP)}
              >
                Шинэ бүртгэл үүсгэх
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            //  onPress={() => navigation.navigate(routes.HOME)}
            onPress={() => Sendtobackend()}
          >
            <Text style={button1}>Нэвтрэх</Text>
          </TouchableOpacity>
          <Text style={styles.version}>Хувилбар :{version}</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  s1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  small1: {
    color: "#030303",
    fontSize: 17,
  },
  h1: {
    fontSize: 30,
    color: "#030303",
    textAlign: "center",
  },
  s2: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  formgroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginVertical: 10,
  },
  label: {
    fontSize: 17,
    color: "#000",
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#03030303",
    borderRadius: 20,
    padding: 10,
  },
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  version: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  logo: {
    height: 150,
    resizeMode: "contain",
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
});
