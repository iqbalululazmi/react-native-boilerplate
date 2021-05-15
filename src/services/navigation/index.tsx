import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { SCREENS } from "@shared-constants";
import HomeScreen from "@screens/home/HomeScreen";
import AboutScreen from "@screens/about/AboutScreen";
import DetailScreen from "@screens/detail/DetailScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#40B3A2",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={SCREENS.ABOUT}
          component={AboutScreen}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color, size }) => (
              <Icon name="information-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREENS.HOME} component={renderTabNavigation} />
        <Stack.Screen name={SCREENS.DETAIL}>
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
