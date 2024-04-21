import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LogoutScreen(props) {
	const [auth, setAuth] = useContext(AuthContext);
	useEffect(() => {
		AsyncStorage.clear();
		setAuth(null);
	}, []);
	return <View></View>;
}
