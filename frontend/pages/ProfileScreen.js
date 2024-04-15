import { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
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
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<View>
			<View
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text>{student?.name}</Text>
				<Image
					style={{
						width: 66,
						height: 58,
					}}
					source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4KhpibH4AV0m8rOVog8YexsZhczYZ38CavwR9ecvjQ&s" }}
				/>
			</View>

			<Text>ОКС: {student?.eqd}</Text>
			<Text>Факултетен номер: {student?.facnum}</Text>
			<Text>Факултет: {student?.group.specialty.faculty.name}</Text>
			<Text>Специалност: {student?.group.specialty.name}</Text>
			<Text>Вид обучение: {student?.eqd_type}</Text>
			<Text>Група: {student?.group.id}</Text>
			<Text>Състояние: {student?.state}</Text>
			<Text>Записан семестър: {student?.semester}</Text>
			<Text>E-mail: {student?.mail}</Text>
		</View>
	);
}
