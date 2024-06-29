import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
    screenOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        tabBarActiveTintColor: 'green',
        labelStyle: {fontSize: 30},
        headerShown: false,
        tabBarShowLabel: false,
    }} initialRouteName='TelaB'>

        <Tab.Screen name="TelaA"
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                tabBarBadge: 2,
              }}
            component={TelaA} />
        <Tab.Screen name="TelaB"
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
            }}
            component={TelaB} />
        <Tab.Screen name="TelaC"
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size }) => (
                    <MaterialCommunityIcons name="account-plus" color={color} size={size} />
                ),
            }}
            component={TelaC} />

    </Tab.Navigator>
)