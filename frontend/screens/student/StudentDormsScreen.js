import React, { useCallback, useState } from "react";
import { Button, FlatList, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { Picker } from "@react-native-picker/picker";
import { primaryColor } from "../../helpers/colors";

import { useApi } from "../../api/useApi";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function StudentDormsScreen() {
	const [reload, setReload] = useState(true)
	const [selectedDorm, setSelectedDorm] = useState();
	const [dorms, setDorms] = useState();
	const [dorm, setDorm] = useState();

	const api = useApi();
	const navigation = useNavigation();


	async function getDorm() {
		const res = (await api.get("/student/dorm")).data;
		setDorm(res);
	}

	async function getDorms() {
		const res = (await api.get("/student/dorms")).data;
		setSelectedDorm(res[0])
		setDorms(res);
	}

	async function handlePress() {
		api.post("/student/dorm", {
			dorm_id: selectedDorm,
		});
		setReload(!reload);
		navigation.navigate("Profile")
	}

	useFocusEffect(
		useCallback(() => {
			getDorm();
			getDorms();
		}, [reload])
	);

	return (
		<View>
			<View style={{ padding: 20 }}>
				{dorm ? (
					<>
						<Text>Вече сте кандидатствали за общежитие: {dorm.number}</Text>
					</>
				) : (
					<>
						<Text>Кандидатстване за общежитие: {selectedDorm?.number}</Text>
						<Picker selectedValue={selectedDorm} onValueChange={(itemValue, itemIndex) => setSelectedDorm(itemValue)}>
							{dorms?.map((mdorm, index) => (
								<Picker.Item key={`dorm-${index}`} label={`Блок: ${mdorm.block} Стая: ${mdorm.number}`} value={mdorm} />
							))}
						</Picker>
						<Button color={primaryColor} title="Кандидатствай" onPress={handlePress}></Button>
					</>
				)}
			</View>
		</View>
	);
}
