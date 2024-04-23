import React, { useCallback, useState } from "react";
import { Button, FlatList, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { primaryColor } from "../../helpers/colors";
import Input from "../../components/form/Input";
import { useFocusEffect } from "@react-navigation/native";
import { useApi } from "../../api/useApi";

export default function TeacherSportScreen() {
	const [sports, setSports] = useState();

	const api = useApi();
	async function getSports() {
		const res = (await api.get("/sports")).data
		console.log(res);
		setSports(res)
	}
	useFocusEffect(
		useCallback(() => {
			getSports();
		}, [])
	);
	return (
		<View>
			<View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Text>Добави Спорт</Text>
				<Input />
				<Button color={primaryColor} title="Добави"></Button>
			</View>
			<View></View>
		</View>
	);
}
