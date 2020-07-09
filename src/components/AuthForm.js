import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => {
          setEmail(newEmail);
        }}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={(newPassword) => {
          setPassword(newPassword);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          onPress={() => {
            onSubmit({ email, password });
          }}
          title={submitButtonText}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
    marginTop: 100,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
