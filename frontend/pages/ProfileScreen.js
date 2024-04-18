import { useContext, useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useApi } from "../api/useApi";

export default function ProfileScreen() {
	const [auth, setAuth] = useContext(AuthContext);
	const [student, setStudent] = useState(null);
	const api = useApi();

	async function getData() {
		try {
			const data = await (await api.get("/profile")).data;
			setStudent(data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<View>
			<ScrollView>
				<View style={styles.imageContainer}>
					<Text>{student?.name}</Text>
					<Image style={styles.profileImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4KhpibH4AV0m8rOVog8YexsZhczYZ38CavwR9ecvjQ&s" }} />
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.info}> ОКС: {student?.eqd}</Text>
					<Text style={styles.info}>Факултетен номер: {student?.facnum}</Text>
					<Text style={styles.info}> Факултет: {student?.group.specialty.faculty.name}</Text>
					<Text style={styles.info}>Специалност: {student?.group.specialty.name}</Text>
					<Text style={styles.info}>Вид обучение: {student?.eqd_type}</Text>
					<Text style={styles.info}>Група: {student?.group.id}</Text>
					<Text style={styles.info}>Състояние: {student?.state}</Text>
					<Text style={styles.info}>Записан семестър: {student?.semester}</Text>
					<Text style={styles.info}> E-mail: {student?.mail}</Text>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	infoContainer: {
		width: "100%",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 50,
		rowGap: 30,
	},
	text: {
		color: "white",
	},
	imageContainer: {
		height: 250,
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	profileImage: {
		width: 70,
		height: 60,
	},
	info: {
		width: "100%",
		gap: 30,
		paddingTop: 30,
		textAlign: "center",
		alignSelf: "stretch",
		borderColor: "#fff",
		borderBottomColor: "gray",
		borderWidth: 3,
		backgroundColor: "#fff",
		paddingHorizontal: 0,
		backgroundColor: "#EEE",
	},
});
