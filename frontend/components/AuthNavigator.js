import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LogoutScreen from "../screens/LogoutScreen";
import StudentGradesScreen from "../screens/student/StudentGradesScreen";
import StudentInsuranceScreen from "../screens/student/StudentInsuranceScreen";
import StudentDormsScreen from "../screens/student/StudentDormsScreen";
import StudentGrantScreen from "../screens/student/StudentGrantScreen";
import StudentSportScreen from "../screens/student/StudentSportScreen";

import TeacherGradesScreen from "../screens/teacher/TeacherGrades/TeacherGradesScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import StudentCalendarScreen from "../screens/student/StudentCalendarScreen";
import StudentEventsScreen from "../screens/student/StudentEventsScreen";

import { primaryColor } from "../helpers/colors";
import TeacherSportScreen from "../screens/teacher/TeacherSportScreen";
import OfficeEventAddScreen from "../screens/office/OfficeEventAddScreen";

const Drawer = createDrawerNavigator();
const navStyles = {
	headerStyle: {
		backgroundColor: primaryColor,
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold",
	},
};

export function getAuthNavigator(auth, pushToken) {
	if (!auth) {
		return (
			<>
				<Drawer.Screen
					name="Login"
					component={LoginScreen}
					options={{
						title: "Вход",
						...navStyles,
					}}
					initialParams={{ pushToken }}
				/>
			</>
		);
	}
	if (auth) {
		if (auth.role == "student") {
			return (
				<>
					<Drawer.Screen
						name="Profile"
						component={ProfileScreen}
						options={{
							title: "Профил",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Grades"
						component={StudentGradesScreen}
						options={{
							title: "Оценки",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Calendar"
						component={StudentCalendarScreen}
						options={{
							title: "Календар",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Events"
						component={StudentEventsScreen}
						options={{
							title: "Събития",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Insurance"
						component={StudentInsuranceScreen}
						options={{
							title: "Здравно осигуряване",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Grant"
						component={StudentGrantScreen}
						options={{
							title: "Стипендии",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Dorms"
						component={StudentDormsScreen}
						options={{
							title: "Общежития",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Sport"
						component={StudentSportScreen}
						options={{
							title: "Спорт",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Logout"
						component={LogoutScreen}
						options={{
							title: "Изход",
							...navStyles,
						}}
					/>
				</>
			);
		}
		if (auth.role == "teacher") {
			return (
				<>
					<Drawer.Screen
						name="Profile"
						component={ProfileScreen}
						options={{
							title: "Профил",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Grades"
						component={TeacherGradesScreen}
						options={{
							title: "Оценки",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Sport"
						component={TeacherSportScreen}
						options={{
							title: "Спорт",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Logout"
						component={LogoutScreen}
						options={{
							title: "Изход",
							...navStyles,
						}}
					/>
				</>
			);
		}
		if (auth.role == "office") {
			return (
				<>
					<Drawer.Screen
						name="Profile"
						component={ProfileScreen}
						options={{
							title: "Профил",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Events"
						component={StudentEventsScreen}
						options={{
							title: "Събития",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="AddEvent"
						component={OfficeEventAddScreen}
						options={{
							title: "Добави Събитие",
							...navStyles,
						}}
					/>
					<Drawer.Screen
						name="Logout"
						component={LogoutScreen}
						options={{
							title: "Изход",
							...navStyles,
						}}
					/>
				</>
			);
		}
	}
}
