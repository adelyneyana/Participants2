import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import Header from "../elements/Header";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.background}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}></ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate("BookEvent")}>
          <Text style={styles.logoutButtonText}>Book Event</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  background: {
    backgroundColor: "black",
    flexGrow: 1,
  },
  logoutButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 500,
    margin: 100,
    position: "relative",
  },
  logoutButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
