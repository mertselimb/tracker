import React from "react";
import { Text, Input, Button } from "react-native-elements";
import { TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
