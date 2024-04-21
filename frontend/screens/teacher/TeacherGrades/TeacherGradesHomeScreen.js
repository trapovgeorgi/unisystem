import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { useApi } from "../../../api/useApi";
import { useNavigation } from "@react-navigation/native";

export default function TeacherGradesHomeScreen() {
	const api = useApi();
	const [disciplines, setDisciplines] = useState([]);

	const navigation = useNavigation();

	async function getDisciplines() {
		const data = (await api.get("/disciplines")).data;
		setDisciplines(data);
	}

	function routeToDiscipline(discipline) {
		navigation.navigate("Discipline", { discipline });
	}

	useEffect(() => {
		getDisciplines();
	}, []);

	return (
		<View style={{ padding: 10, display: "flex", gap: 10 }}>
			{disciplines?.map((discipline, index) => (
				<Button key={`discipline-${index}`} title={discipline.name} onPress={() => routeToDiscipline(discipline)}></Button>
			))}
		</View>
	);
}
