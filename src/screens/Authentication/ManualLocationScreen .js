import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ManualLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    if (location.trim()) {
      navigation.navigate('NotificationScreen'); // move to next screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter location manually</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your location"
        value={location}
        onChangeText={setLocation}
      />
      <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit}>
        <Text style={styles.primaryButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#000', textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    marginBottom: 20,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: '#fc8019',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8,
  },
  primaryButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default ManualLocationScreen;
