import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  BackHandler,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TransitionPresets } from "react-navigation-stack";
import axios from "axios"

class RegisterScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButton.bind(this)
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButton.bind(this)
    );
  }

  handleBackButton = () => {
    this.props.navigation.pop();
    return true;
  };

  state = {
    fullName: "",
    password: "",
    emailAddress: "",
    PhoneNumber:"",
    username:"",
    address:""
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={{ flex: 1 }}>
          {this.backArrow()}
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.appLogo()}
            {this.registerText()}
            {this.fullNameTextField()}
            {this.userNameTextField()}
            {this.emailAddressTextField()}
            {this.phoneNumberTextField()}
            {this.passwordTextField()}
            {this.addressTextField()}
            {this.continueButton()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  backArrow() {
    return (
      <MaterialIcons
        name="arrow-back"
        size={24}
        color="black"
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding * 2.0,
        }}
        onPress={() => this.props.navigation.pop()}
      />
    );
  }

  phoneNumberTextField() {
    return (
      <TextInput
        placeholder="Phone Number "
        placeholderTextColor={Colors.primaryColor}
        value={this.state.PhoneNumber}
        onChangeText={(text) => this.setState({ PhoneNumber: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }

  emailAddressTextField() {
    return (
      <TextInput
        placeholder="Email Address"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.emailAddress}
        onChangeText={(text) => this.setState({ emailAddress: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }

  passwordTextField() {
    return (
      <TextInput
        placeholder="Password"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.password}
        onChangeText={(text) => this.setState({ password: text })}
        secureTextEntry={true}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }

  fullNameTextField() {
    return (
      <TextInput
        placeholder="Full Name"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.fullName}
        onChangeText={(text) => this.setState({ fullName: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }
  userNameTextField() {
    return (
      <TextInput
        placeholder="username"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.username}
        onChangeText={(text) => this.setState({ username: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }
  addressTextField() {
    return (
      <TextInput
        placeholder="address"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.address}
        onChangeText={(text) => this.setState({ address: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }

  registerText() {
    return (
      <Text
        style={{
          marginBottom: Sizes.fixPadding + 10.0,
          ...Fonts.primaryColor18Medium,
          textAlign: "center",
        }}
      >
        join our family
      </Text>
    );
  }
  // signup() {
  //   var data = {
  //     name : this.fullName,
  //     email:this.emailAddress,
  //     username: this.username,
  //     password : this.password,
  //     phoneNumber:this.PhoneNumber,
  //     address:this.adress
  //     } 
  //   axios.post("/register" , data )
  //   .then(() => {
  //     console.log(data);
  //     this.props.navigation.push("login")
  //   })
  //   .catch( (error)=> console.log(error.message))
  // }
  continueButton() {
    return (
      <TouchableOpacity
        onPress={() =>{ this.props.navigation.push("login")}}
        activeOpacity={0.9}
        style={styles.continueButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor19Medium }}>Sign Up</Text>
      </TouchableOpacity>
    );
  }

  appLogo() {
    return (
      <Image
        source={require("../assets/images/transparent-icon.png")}
        style={styles.appLogoStyle}
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  continueButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryColor,
    paddingVertical: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding,
    borderRadius:20,
    marginTop: Sizes.fixPadding * 4.0,
  },
  appLogoStyle: {
    width: 200.0,
    height: 200.0,
    alignSelf: "center",
    marginBottom: Sizes.fixPadding,
    marginTop: Sizes.fixPadding * 3.0,
  },
  textFieldStyle: {
    borderColor: "rgba(0, 150, 136, 0.3)",
    borderWidth: 1.0,
    borderRadius: 20,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    height: 55.0,
    ...Fonts.primaryColor18Medium,
    marginHorizontal: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    marginTop: Sizes.fixPadding * 2.0,
  },
});

RegisterScreen.navigationOptions = () => {
  return {
    header: () => null,
    ...TransitionPresets.SlideFromRightIOS,
  };
};

export default withNavigation(RegisterScreen);