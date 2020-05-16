import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
  <View>
    <Text style={styles.text}>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate("Components")}
      title="Go to componenets Demo"
    />
    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate("List")}
    />
    <Button
      title="Go to Image Screen"
      onPress={() => navigation.navigate("Image")}
    />
    <Button
      title="Go to Counter"
      onPress={() => navigation.navigate("Counter")}
    />
    <Button
      title="Go to Color Demo"
      onPress={() => navigation.navigate("Color")}
    />
    <Button
      title="Go to Square Demo"
      onPress={() => navigation.navigate("Square")}
    />
    <Button
      title="Go to Text Demo"
      onPress={() => navigation.navigate("Text")}
    />
    <Button
      title="Go to Box Demo"
      onPress={() => navigation.navigate("Box")}
    />
  </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

