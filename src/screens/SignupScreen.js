import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button onPress={() => navigation.navigate("Signin")} title="Signin" />
      <Button
        onPress={() => navigation.navigate("mainFlow")}
        title="Go to mainFlow"
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
