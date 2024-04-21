import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TeacherGradesHomeScreen from "./TeacherGradesHomeScreen";
import TeacherGradesDisciplineScreen from "./TeacherGradesDisciplineScreen";

const Stack = createNativeStackNavigator();
export default function TeacherGradesScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={TeacherGradesHomeScreen} options={{ title: "Дисциплини" }} />
			<Stack.Screen name="Discipline" component={TeacherGradesDisciplineScreen} options={{ title: "Дисциплина" }} />
		</Stack.Navigator>
	);
}
