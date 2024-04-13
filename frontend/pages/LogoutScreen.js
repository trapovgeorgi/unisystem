import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LogoutScreen(props) {
	const [auth, setAuth] = useContext(AuthContext);
	useEffect(() => {
		setAuth(null);
	}, []);
	return <View></View>;
}
