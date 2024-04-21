import React, { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useApi } from "../../../api/useApi";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function TeacherGradesDisciplineScreen(props) {
	const api = useApi();
	const [auth, setAuth] = useContext(AuthContext);
	const [students, setStudents] = useState([]);

	const navigation = useNavigation();

	async function getStudents() {
		const data = (await api.get("/teacher/students")).data;
		setStudents(data);
	}

	async function handleAdd(student) {
		await api.post("/teacher/grade", {
			grade: student.grade,
			verified: true,
			student_id: student.id,
			discipline_id: student.discipline.id,
		});
	}

	async function handleChange(text, student) {
		student.grade = text;
		student.discipline = props.route.params.discipline;
	}

	useEffect(() => {
		getStudents();
	}, []);

	return (
		<View style={{ padding: 10, display: "flex", gap: 10 }}>
			{students?.map((student, index) => (
				<View key={`student-${index}`} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4 }}>
					<Text>{student.name}</Text>
					<Text>Оценка: </Text>
					<TextInput style={{ width: 70, height: 50, backgroundColor: "#fff" }} keyboardType="numeric" onChangeText={(text) => handleChange(text, student)} />
					<Button key={`student-${index}`} title={"Добави"} onPress={(text) => handleAdd(student)}></Button>
				</View>
			))}
		</View>
	);
}
