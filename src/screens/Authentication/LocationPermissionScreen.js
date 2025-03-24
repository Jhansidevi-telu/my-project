import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LocationPermissionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/location.jpg')} // Replace with your location image
        style={styles.image}
      />
      <Text style={styles.title}>What's your location?</Text>
      <Text style={styles.subtitle}>
        We need your location to show available restaurants & products
      </Text>

      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('ManualLocationScreen')}>
        <Text style={styles.primaryButtonText}>Allow location access</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ManualLocationScreen')}>
        <Text style={styles.secondaryText}>Enter location manually</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 24 },
  image: { width: 200, height: 200, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 10 },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#666', marginBottom: 30 },
  primaryButton: {
    backgroundColor: '#fc8019',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 12,
  },
  primaryButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  secondaryText: { color: '#fc8019', fontWeight: 'bold' },
});

export default LocationPermissionScreen;
