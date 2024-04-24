import React, { useCallback, useState } from "react";
import { Button, FlatList, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { useApi } from "../../api/useApi";
import { useFocusEffect } from "@react-navigation/native";
import { primaryColor } from "../../helpers/colors";
import Input from "../../components/form/Input";
import { Picker } from "@react-native-picker/picker";

export default function StudentSportScreen() {
	const [reload, setReload] = useState(true)
	const [selectedSport, setSelectedSport] = useState();
	const [sports, setSports] = useState();
	const [sport, setSport] = useState();

	const api = useApi();
	
	async function getSport() {
		const res = (await api.get("/student/sport")).data;
		setSport(res);
	}

	async function getSports() {
		const res = (await api.get("/sports")).data;
		setSports(res);
		setSelectedSport(res[0]);
	}

	async function handlePress() {
		await api.post("/student/sport", { sport: selectedSport });
		setReload(!reload);
	}

	useFocusEffect(
		useCallback(() => {
			getSports();
			getSport();
		}, [reload])
	);

	return (
		<View>
			{sport ? (
				<View style={{ padding: 20, gap: 8 }}>
					<Text>Вече сте записан на спорт: {sport.name} с ръководител: {sport.teacher.name}</Text>
				</View>
			) : (
				<View style={{ padding: 20, gap: 8 }}>
					<Text>Избери Спорт</Text>
					<View>
						<Picker selectedValue={selectedSport} onValueChange={(itemValue, itemIndex) => setSelectedSport(itemValue)}>
							{sports?.map((msport, index) => (
								<Picker.Item key={`sport-${index}`} label={`${msport.name}`} value={msport} />
							))}
						</Picker>
					</View>
					<Button color={primaryColor} title="Избери" onPress={handlePress}></Button>
				</View>
			)}
		</View>
	);
}
