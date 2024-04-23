import React, { useCallback, useState } from "react";
import { Button, FlatList, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { Picker } from "@react-native-picker/picker";
import { primaryColor } from "../../helpers/colors";
import { useApi } from "../../api/useApi";
import { useFocusEffect } from "@react-navigation/native";

export default function StudentGrantScreen() {
	const [point, setPoint] = useState(3);
	const [averageGrade, setAverageGrade] = useState(0);
	const [grant, setGrant] = useState();

	const api = useApi();
	async function getGrant() {
		const res = (await api.get("/student/grant")).data;
		console.log("ALE");
		console.log(res);
		setGrant(res);
	}

	async function getGrades() {
		const data = (await api.get("student/grades")).data;

		let gradeSum = 0;
		let gradeNum = 0;

		for (const semester of data) {
			for (const grade of semester) {
				gradeSum += grade.grade;
				gradeNum++;
			}
		}

		setAverageGrade((gradeSum / gradeNum).toFixed(2));
	}

	async function handlePress() {
		api.post("/student/grant", {
			point,
		});
		setGrant({ point });
	}

	useFocusEffect(
		useCallback(() => {
			getGrant();
			getGrades();
		}, [])
	);
	return (
		<View>
			<View style={{ padding: 20 }}>
				{grant ? (
					<>
						<Text>Вече сте кандидатствали по точка: {grant.point}</Text>
					</>
				) : (
					<>
						<Text>Кандидатстване за стипендия: {point}</Text>
						<View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 100 }}>
							<Text style={{ backgroundColor: "#50C878", borderStyle: "solid", borderRadius: 100, paddingHorizontal: 10, paddingVertical: 2, color: "#fff" }}>Среден успех (за всички години): {averageGrade}</Text>
						</View>
						<Picker selectedValue={point} onValueChange={(itemValue, itemIndex) => setPoint(itemValue)}>
							<Picker.Item label="Точка 3" value="3" />
						</Picker>
						<Button color={primaryColor} title="Кандидатствай" onPress={handlePress}></Button>
					</>
				)}
			</View>
		</View>
	);
}
