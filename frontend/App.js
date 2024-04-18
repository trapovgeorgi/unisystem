import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context/AuthContext";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

import LoginScreen from "./pages/LoginScreen";
import ProfileScreen from "./pages/ProfileScreen";
import LogoutScreen from "./pages/LogoutScreen";
import { Platform } from "react-native";

const Drawer = createDrawerNavigator();

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

async function sendPushNotification(expoPushToken: string) {
	const message = {
		to: expoPushToken,
		sound: "default",
		title: "Original Title",
		body: "And here is the body!",
		data: { someData: "goes here" },
	};

	await fetch("https://exp.host/--/api/v2/push/send", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Accept-encoding": "gzip, deflate",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(message),
	});
}

function handleRegistrationError(errorMessage: string) {
	alert(errorMessage);
	throw new Error(errorMessage);
}

async function registerForPushNotificationsAsync() {
	if (Platform.OS === "android") {
		Notifications.setNotificationChannelAsync("default", {
			name: "default",
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: "#FF231F7C",
		});
	}

	if (Device.isDevice) {
		const { status: existingStatus } = await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== "granted") {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== "granted") {
			handleRegistrationError("Permission not granted to get push token for push notification!");
			return;
		}
		const projectId = "61ba0916-0449-4289-83c7-7d0a5a11a681"
		if (!projectId) {
			handleRegistrationError("Project ID not found");
		}
		try {
			const pushTokenString = (
				await Notifications.getExpoPushTokenAsync({
					projectId,
				})
			).data;
			console.log(pushTokenString);
			return pushTokenString;
		} catch (e) {
			handleRegistrationError(`${e}`);
		}
	} else {
		handleRegistrationError("Must use physical device for push notifications");
	}
}

export default function App() {
	const [auth, setAuth] = useState();


	useEffect(() => {
		registerForPushNotificationsAsync();
	}, []);

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
							<Drawer.Screen
								name="Login"
								component={LoginScreen}
								options={{
									title: "Login",
									headerStyle: {
										backgroundColor: "#3352A8",
									},
									headerTintColor: "#fff",
									headerTitleStyle: {
										fontWeight: "bold",
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
