import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native-root-toast";

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { eventName } = route.params || {};

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const events = await AsyncStorage.multiGet(keys);

        const filteredEvents = events.map(([key, value]) => JSON.parse(value));
        
        filteredEvents.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));

        setEventDetails(filteredEvents);
      } catch (e) {
        console.error('Error fetching event details:', e);
        showToast('Failed to fetch event details.');
      }
    };

    fetchEventDetails();
  }, []);

  const showToast = (message = "Something went wrong") => {
    Toast.show(message, 3000);
  };

  return (
    <View style={styles.eventDetailsPage}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Event Details</Text>
        </View>
        {eventDetails.length === 0 ? (
          <Text style={styles.errorText}>No events booked yet.</Text>
        ) : (
          eventDetails.map((event, index) => (
            <View key={index} style={styles.eventContainer}>
              <View style={styles.detailGroup}>
                <Text style={styles.detailLabel}>Event Type:</Text>
                <Text style={styles.detailValue}>{event.eventType}</Text>
              </View>
              <View style={styles.detailGroup}>
                <Text style={styles.detailLabel}>Event Name:</Text>
                <Text style={styles.detailValue}>{event.eventName}</Text>
              </View>
              <View style={styles.detailGroup}>
                <Text style={styles.detailLabel}>Event Date:</Text>
                <Text style={styles.detailValue}>{event.eventDate}</Text>
              </View>
              <View style={styles.detailGroup}>
                <Text style={styles.detailLabel}>Venue Location:</Text>
                <Text style={styles.detailValue}>{event.eventLocation}</Text>
              </View>
              <View style={styles.detailGroup}>
                <Text style={styles.detailLabel}>Description:</Text>
                <Text style={styles.detailValue}>{event.description}</Text>
              </View>
              <View style={styles.detailGroup}>
                <Text style={styles.detailLabel}>Budget:</Text>
                <Text style={styles.detailValue}>{`${event.budget[0]} - ${event.budget[1]}`}</Text>
              </View>
              <View style={styles.detailGroup}>
                <Text style={styles.detailLabel}>Invitation Message:</Text>
                <Text style={styles.detailValue}>{event.invitationMessage}</Text>
              </View>
              <View style={styles.detailGroup}>
                <Text style={styles.detailLabel}>People to Invite:</Text>
                <Text style={styles.detailValue}>{event.peopleToInvite}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  eventDetailsPage: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 10,
  },
  goBackButton: {
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 8,
  },
  headerText: {
    color: '#e6b800',
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailGroup: {
    marginBottom: 10,
  },
  detailLabel: {
    color: '#e6b800',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailValue: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default EventDetails;
