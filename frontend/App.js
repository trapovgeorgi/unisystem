import { Button, StyleSheet, View } from "react-native";
import { createContext, useContext, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext, defaultAuthValue } from "./context/AuthContext";

import LoginScreen from "./pages/LoginScreen";
import ProfileScreen from "./pages/ProfileScreen";
import LogoutScreen from "./pages/LogoutScreen";

const Drawer = createDrawerNavigator();

export default function App() {
	const [auth, setAuth] = useState();

	return (
		<AuthContext.Provider value={[auth, setAuth]}>
			<NavigationContainer>
				<Drawer.Navigator>
					{auth ? (
						<>
							<Drawer.Screen name="Profile" component={ProfileScreen} />
							<Drawer.Screen name="Logout" component={LogoutScreen} />
						</>
					) : (
						<>
							<Drawer.Screen name="Login"
								component={LoginScreen}
								options={{
									title: 'Login',
									headerStyle: {
										backgroundColor: '#3352A8',
									},
									headerTintColor: '#fff',
									headerTitleStyle: {
										fontWeight: 'bold',
									},
								
								}}
							/>
						</>
					)}
				</Drawer.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
