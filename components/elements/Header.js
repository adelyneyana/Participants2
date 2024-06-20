import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const navigation = useNavigation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <SafeAreaView>
       <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../pictures/eventwise.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      <TouchableOpacity style={styles.sidebarButton} onPress={toggleSidebar}>
        <Icon name="person-circle" size={30} color="white" />
      </TouchableOpacity>

      {isSidebarOpen && (
        <View style={styles.sidebar}>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate("Profile");
              closeSidebar();
            }}
          >
            <Text style={styles.sidebarText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate("InboxView");
              closeSidebar();
            }}
          >
            <Text style={styles.sidebarText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate("EventDetails");
              closeSidebar();
            }}
          >
            <Text style={styles.sidebarText}>Event Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate("Budget");
              closeSidebar();
            }}
          >
            <Text style={styles.sidebarText}>Budgeting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate("EventPortfolio");
              closeSidebar();
            }}
          >
            <Text style={styles.sidebarText}>Event Portfolio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => {
              navigation.navigate("Settings");
              closeSidebar();
            }}
          >
            <Text style={styles.sidebarText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logout}
            onPress={() => {
              navigation.navigate("LoginScreen");
              closeSidebar();
            }}
          >
            <FontAwesome name="sign-out" size={24} color="white" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    top: 5,
    height: 45,
    width: 120,
  },
  sidebarButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 8,
    zIndex: 1,
  },
  sidebar: {
    position: "absolute",
    top: 50,
    right: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    paddingBottom: 10,
  },
  sidebarText: {
    color: "white",
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutText: {
    color: "white",
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",  },
});

export default Header;
