import React, { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useApi } from "../../api/useApi";
import { useFocusEffect } from "@react-navigation/native";

export default function StudentGradesScreen() {
	const [semesters, setSemesters] = useState([]);
	const [averageGrade, setAverageGrade] = useState(0);

	const api = useApi();
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
		setSemesters(data);
	}
	useFocusEffect(useCallback(() => {
		getGrades();
	}, []));
	return (
		<ScrollView>
			<View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 100 }}>
				<Text style={{ backgroundColor: "#50C878", borderStyle: "solid", borderRadius: 100, paddingHorizontal: 10, paddingVertical: 2, color: "#fff" }}>Среден успех (за всички години): {averageGrade}</Text>
			</View>
			{semesters?.map((grades, semesterIndex) => (
				<View style={{ backgroundColor: semesterIndex % 2 == 0 ? "#fff" : "#eee" }} key={`semester-${semesterIndex}`}>
					<Text style={styles.semesterText}>Семестър: {semesterIndex + 1}</Text>
					<View style={styles.grades}>
						{grades?.map((grade, gradeIndex) => (
							<View style={styles.info} key={`grade-${gradeIndex}`}>
								<View style={styles.infoBall}></View>

								<View>
									<Text>Дисциплина: {grade.discipline.name}</Text>
									<Text>Оценка: {grade.grade}</Text>
									<Text>Нанесена от: {grade.teacher.name}</Text>
									<Text style={{ color: grade.verified ? "green" : "red" }}>{grade.verified ? "Заверен" : "Незаверен"}</Text>
								</View>
							</View>
						))}
					</View>
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	grades: {
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		width: "200",
		padding: 10,
	},
	semesterText: {
		borderStyle: "solid",
		borderWidth: 1,
		borderLeftColor: "#fff",
		borderTopColor: "#fff",
		borderRightColor: "#fff",
		borderBottomColor: "#000",
		fontSize: 18,
	},
	info: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		gap: 8,
		marginBottom: 10,
	},
	infoBall: {
		backgroundColor: "#3352A8",
		borderColor: "#3352A8",
		height: 20,
		width: 20,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 100,
	},
	infoText: {
		paddingHorizontal: 4,
		paddingVertical: 4,
		textAlign: "center",
		backgroundColor: "#fff",
		width: 300,
	},
});
