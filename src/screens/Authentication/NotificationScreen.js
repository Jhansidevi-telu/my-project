import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/notification.jpg')} // Replace with your notification image
        style={styles.image}
      />
      <Text style={styles.title}>Get updates on your order status</Text>
      <Text style={styles.subtitle}>
        Allow push notifications to get real-time updates on your order status.
      </Text>

      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.replace('AppTabs')}>
        <Text style={styles.primaryButtonText}>Turn on Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace('AppTabs')}>
        <Text style={styles.secondaryText}>Not Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 24 },
  image: { width: 200, height: 200, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 30 },
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

export default NotificationScreen;
