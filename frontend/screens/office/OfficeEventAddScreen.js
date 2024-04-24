import React, { useCallback, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Input from "../../components/form/Input";
import { primaryColor } from "../../helpers/colors";
import { useApi } from "../../api/useApi";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function OfficeEventAddScreen() {
	const [date, setDate] = useState(new Date());
	const [timeStart, setTimeStart] = useState(new Date());
	const [timeEnd, setTimeEnd] = useState(new Date());
	const [eventName, setEventName] = useState("");
	const [events, setEvents] = useState([]);

	const api = useApi();
	const navigation = useNavigation();

	async function getData() {
		const res = (await api.get("/events")).data;
		setEvents(res);
	}

	async function removeEvent(id) {
		await api.delete(`/office/event/${id}`);
		navigation.navigate("Profile");
	}

	function handleText(t) {
		setEventName(t);
	}

	async function handleAdd() {
		if (!(eventName.length > 0)) return;
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();

		const sh = timeStart.getHours();
		const sm = timeStart.getMinutes();
		const ss = timeStart.getSeconds();

		const eh = timeEnd.getHours();
		const em = timeEnd.getMinutes();
		const es = timeEnd.getSeconds();

		api.post("/office/event", { eventName, year, month, day, sh, sm, ss, eh, em, es });
		navigation.navigate("Profile");
	}

	function show(type) {
		if (type == "date") {
			DateTimePickerAndroid.open({
				value: date,
				onChange: (e, d) => {
					setDate(d);
				},
			});
		} else if (type == "timeStart") {
			DateTimePickerAndroid.open({
				value: timeStart,
				mode: "time",
				onChange: (e, d) => {
					setTimeStart(d);
				},
			});
		} else if (type == "timeEnd") {
			DateTimePickerAndroid.open({
				value: timeEnd,
				mode: "time",
				onChange: (e, d) => {
					setTimeEnd(d);
				},
			});
		}
	}

	useFocusEffect(
		useCallback(() => {
			getData();
		}, [])
	);

	return (
		<ScrollView>
			<View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
				<Text>
					{date.toLocaleDateString()} {timeStart.toLocaleTimeString()} - {timeEnd.toLocaleTimeString()}
				</Text>
				<Input title="Име на Събитие" onChangeText={handleText} />
				<View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
					<Button onPress={() => show("date")} title="Дата" />
					<Button onPress={() => show("timeStart")} title="Начало" />
					<Button onPress={() => show("timeEnd")} title="Край" />
				</View>
				<Button color={primaryColor} onPress={handleAdd} title="Добави" />
				<View style={{ marginTop: 40, display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
					{events?.map((ev, index) => (
						<View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, flexDirection: "row" }}>
							<View key={`event-${index}`} style={{ width: 140, height: 50, backgroundColor: primaryColor, padding: 4 }}>
								<Text style={{ color: "#fff", textAlign: "center", textAlignVertical: "center" }}>{ev.title}</Text>
							</View>
							<Pressable onPress={() => removeEvent(ev.id)}>
								<View style={{ width: 50, height: 50, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f55" }}>
									<Text style={{ color: "#fff", textAlign: "center", textAlignVertical: "center" }}>X</Text>
								</View>
							</Pressable>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	);
}
