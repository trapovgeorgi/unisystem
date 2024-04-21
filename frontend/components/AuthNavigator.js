import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LogoutScreen from "../screens/LogoutScreen";
import StudentGradesScreen from "../screens/student/StudentGradesScreen";
import TeacherGradesScreen from "../screens/teacher//TeacherGrades/TeacherGradesScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import StudentCalendarScreen from "../screens/student/StudentCalendarScreen";

const Drawer = createDrawerNavigator();
const navStyles = {
    headerStyle: {
        backgroundColor: "#3352A8",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    },
};

export function getAuthNavigator(auth, pushToken){
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