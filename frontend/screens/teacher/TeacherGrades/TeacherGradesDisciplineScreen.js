import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useApi } from "../../../api/useApi";
import TeacherGradesDisciplineStudent from "./TeacherGradesDisciplineStudent";
import { useFocusEffect } from "@react-navigation/native";

export default function TeacherGradesDisciplineScreen(props) {
	const api = useApi();
	const [students, setStudents] = useState([]);

	async function getStudents() {
		const data = (await api.get("/teacher/students")).data;
		setStudents(data);
	}

	useFocusEffect(
		useCallback(() => {
			getStudents();
		}, [])
	);

	return (
		<View style={{ padding: 10, display: "flex", gap: 10 }}>
			{students?.map((student, index) => (
				<TeacherGradesDisciplineStudent key={`student-${props.index}`} student={student} discipline={props.route.params.discipline} />
			))}
		</View>
	);
}
