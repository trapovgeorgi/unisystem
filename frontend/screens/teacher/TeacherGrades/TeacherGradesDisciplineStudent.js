import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useApi } from "../../../api/useApi";
import { primaryColor } from "../../../helpers/colors";
import { useNavigation } from "@react-navigation/native";

export default function TeacherGradesDisciplineStudent(props) {
	const [grade, setGrade] = useState("");
	const api = useApi();
	const navigation = useNavigation();

	async function handleAdd(student) {
		await api.post("/teacher/grade", {
			grade: student.grade,
			verified: true,
			student_id: student.id,
			discipline_id: student.discipline.id,
		});
		navigation.goBack();
	}

	async function handleChange(text, student) {
		if (Number(text) < 2 || Number(text) > 6 || text == "") {
			setGrade("");
		} else if (!Number(text)) {
			setGrade("");
		} else {
			setGrade(text);
		}
		student.grade = text;
		student.discipline = props.discipline;
	}

	return (
		<View>
			<View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4 }}>
				<Text>{props.student.name}</Text>
				<Text>Оценка: </Text>
				<TextInput style={{ width: 70, height: 50, backgroundColor: "#fff" }} inputMode="numeric" onChangeText={(text) => handleChange(text, props.student)} value={grade} />
				<Button color={primaryColor} title={"Добави"} onPress={(text) => handleAdd(props.student)}></Button>
			</View>
		</View>
	);
}
