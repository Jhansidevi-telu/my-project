import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // For tab icons and header icons
import HomeScreen from "../screens/HomeScreens";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/Authentication/LoginScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import OtpScreen from "../screens/Authentication/OtpScreen";
import RegistrationScreen from "../screens/Authentication/RegistrationScreen";
import LocationPermissionScreen from "../screens/Authentication/LocationPermissionScreen";
import ManualLocationScreen from "../screens/Authentication/ManualLocationScreen ";
import NotificationScreen from "../screens/Authentication/NotificationScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // Bottom Tab Navigator for Home, Menu, Cart, Profile
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#007BFF",
          tabBarInactiveTintColor: "#888",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            headerRight: () => (
              <Ionicons
                name="cart"
                size={24}
                color="#000"
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate("Cart")} // Navigate to Cart screen
              />
            ),
          })}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
            headerRight: () => (
              <Ionicons
                name="cart"
                size={24}
                color="#000"
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate("Cart")} // Navigate to Cart screen
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            headerRight: () => (
              <Ionicons
                name="cart"
                size={24}
                color="#000"
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate("Cart")} // Navigate to Cart screen
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LocationPermissionScreen">
        <Stack.Screen
          name="Onboard"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP Verification"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocationPermissionScreen"
          component={LocationPermissionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManualLocationScreen"
          component={ManualLocationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AppTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
