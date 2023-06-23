import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import NotasScreen from '../screens/NotasScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
export default function NavigationTab() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => <Icon name='home' size={25} />,
				}}
			/>

			<Tab.Screen
				name='Notas'
				component={NotasScreen}
				options={{
					tabBarLabel: 'Notas',
					tabBarIcon: () => <MaterialIcons name='notes' size={25} />,
				}}
			/>
		</Tab.Navigator>
	);
}
