import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { useFocusEffect } from "@react-navigation/native";
import { useApi } from "../../api/useApi";

export default function StudentEventsScreen() {
	const [events, setEvents] = useState([
		{
			title: "",
			start: new Date(2024, 3, 23, 7, 30),
			end: new Date(2024, 3, 23, 7, 30),
		},
	]);
	const api = useApi();
	async function getEvents() {
		const res = (await api.get("/events")).data;
		for (const ev of res) {
			ev.start = new Date(ev.start);
			ev.end = new Date(ev.end);
		}
		setEvents(res);
	}
	useFocusEffect(
		useCallback(() => {
			getEvents();
		}, [])
	);

	return (
		<View>
			<Calendar events={events} height={800} mode="schedule" />
		</View>
	);
}
