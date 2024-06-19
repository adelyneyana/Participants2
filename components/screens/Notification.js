import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Notification = ({ route }) => {
  const navigation = useNavigation();
  const { notificationMessage } = route.params || {};

  return (
    <View style={styles.notificationPage}>
      <TouchableOpacity style={styles.goBackButton} 
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-left" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notification</Text>
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>{notificationMessage || "No new notifications"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationPage: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 10,
  },
  goBackButton: {
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    color: '#e6b800',
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationContainer: {
    backgroundColor: '#2e2e2e',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  notificationText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Notification;
