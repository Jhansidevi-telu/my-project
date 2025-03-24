import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';


const OtpScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (value, index) => {
    const newOtp = [...otp];

    if (value.length <= 1) {
      newOtp[index] = value;

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    setOtp(newOtp);
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp !== "123456") {
      Alert.alert("Error", "Invalid OTP. Please try again.");
      return;
    }

    const isUserExists = Math.random() < 0.5;
    if (isUserExists) {
      navigation.replace("AppTabs");
    } else {
      navigation.replace("RegistrationScreen", { phoneNumber });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: null })}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.heading}>Verify with OTP sent to</Text>
      <Text style={styles.phone}>{phoneNumber}</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.otpInput, digit !== "" ? styles.otpFilled : null]}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            keyboardType="number-pad"
            maxLength={1}
            ref={(input) => (inputRefs.current[index] = input)}
          />
        ))}
      </View>

      <Text style={styles.statusText}>
        OTP found • Retry in 0:{timer < 10 ? "0" + timer : timer}
      </Text>

      <TouchableOpacity style={styles.continueBtn} onPress={handleVerifyOtp}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Didn't receive it?{" "}
        <Text
          onPress={() => {
            setTimer(30);
            console.log("Resend OTP");
          }}
          style={styles.resendLink}
        >
          Retry
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    justifyContent: "flex-start", 
    paddingTop: 60, 
  },
  heading: {
    fontSize: 26,
    fontWeight: "600",
    color: "#000",
    marginLeft: 12,
    marginBottom: 6,
    marginTop:15,
  },
  phone: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,

    marginLeft: 12,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 25,
  },
  otpInput: {
    width: 50,
    height: 55,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#f9f9f9",
  },
  otpFilled: {
    borderColor: "green",
  },
  statusText: {
    marginLeft: 12,
    color: "green",
    fontSize: 14,
    marginBottom: 20,
    fontWeight: "500",
  },
  continueBtn: {
    backgroundColor: "#fc8019",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 10,
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resendText: {
    marginTop: 16,
    marginLeft: 12,
    fontSize: 14,
    color: "#666",
  },
  resendLink: {
    color: "#fc8019",
    fontWeight: "bold",
  },
});

export default OtpScreen;
