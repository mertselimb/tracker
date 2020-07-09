import React, { useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer />
      <Button title="Sign out" onPress={signout} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
