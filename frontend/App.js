import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context/AuthContext";
import { PushContext } from "./context/PushContext";

import * as Notifications from "expo-notifications";

import { getAuthNavigator } from "./components/AuthNavigator";
import { registerForPushNotificationsAsync } from "./api/notifications";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

export default function App() {
	const [auth, setAuth] = useState();
	const [pushToken, setPushToken] = useState();

	const Drawer = createDrawerNavigator();

	async function getToken() {
		const token = await registerForPushNotificationsAsync();
		setPushToken(token);
	}
	useEffect(() => {
		getToken();
	}, []);

	return (
		<PushContext.Provider value={[pushToken, setPushToken]}>
			<AuthContext.Provider value={[auth, setAuth]}>
				<NavigationContainer>
					<Drawer.Navigator>{getAuthNavigator(auth, pushToken)}</Drawer.Navigator>
				</NavigationContainer>
			</AuthContext.Provider>
		</PushContext.Provider>
	);
}
