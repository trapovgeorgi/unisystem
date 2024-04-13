import { useContext } from "react";
import { Image, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen() {
	const [auth, setAuth] = useContext(AuthContext);

	return (
		<View>
			<Text>{auth}</Text>
			<Image 
				style={{
					width: 66,
					height: 58,
				}}
				source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4KhpibH4AV0m8rOVog8YexsZhczYZ38CavwR9ecvjQ&s" }}
			/>
		</View>
	);
}
