import React, { useCallback, useState } from "react";
import { Button, FlatList, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { primaryColor } from "../../helpers/colors";
import Input from "../../components/form/Input";
import { useFocusEffect } from "@react-navigation/native";
import { useApi } from "../../api/useApi";

export default function TeacherSportScreen() {
	const [added, setAdded] = useState(0);
	const [sportName, setSportName] = useState("");
	const [sports, setSports] = useState();

	const api = useApi();

	async function handlePress() {
		await api.post("/teacher/sport", { name: sportName });
		setAdded(added + 1);
	}

	async function getSports() {
		const res = (await api.get("/sports")).data;
		setSports(res);
	}
	useFocusEffect(
		useCallback(() => {
			getSports();
		}, [])
	);
	useFocusEffect(
		useCallback(() => {
			getSports();
		}, [added])
	);

	useFocusEffect(useCallback(() => {}, [added]));
	return (
		<View>
			<View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
				<Text>Добави Спорт</Text>
				<Input onChangeText={(text) => setSportName(text)} />
				<Button color={primaryColor} title="Добави" onPress={handlePress}></Button>
			</View>
			<View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, margin: 20 }}>
				{sports?.map((sport, index) => (
					<Text style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: primaryColor, color: "white", width: 160, height: 40, textAlign: "center", textAlignVertical: "center" }} key={`sport-${index}`}>
						{sport.name}
					</Text>
				))}
			</View>
		</View>
	);
}
