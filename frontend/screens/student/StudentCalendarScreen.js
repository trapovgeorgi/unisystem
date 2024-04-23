import React, { useCallback, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { useFocusEffect } from "@react-navigation/native";
import { useApi } from "../../api/useApi";

export default function StudentCalendarScreen() {
	const [events, setEvents] = useState();
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
	return <View>{events && <Calendar events={events} height={800} mode="3days" swipeEnabled={false} scrollOffsetMinutes={420} />}</View>;
}
