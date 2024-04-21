import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";

export default function StudentCalendarScreen() {
	const [calendarHeight, setCalendarHeight] = useState(0);
	const [scheduleHeight, setScheduleHeight] = useState(0);
	const [layoutChanged, setLayoutChanged] = useState(false);
	function handleLayout(e){
		if (layoutChanged) {
			return
		}
		const { width, height } = e.nativeEvent.layout;
		console.log(height);
		setCalendarHeight(70/100*height)
		setScheduleHeight(20/100*height)
		setLayoutChanged(true)
	}
	const events = [
		{
			title: "ПМУ Защита",
			start: new Date(2024, 3, 23, 7, 30),
			end: new Date(2024, 3, 23, 18, 30),
		},
		{
			title: "Обявяване на стипендии",
			start: new Date(2024, 3, 25, 8, 30),
		},
		{
			title: "ПМУ Защита",
			start: new Date(2024, 3, 26, 7, 30),
		},
		{
			title: "Обявяване на стипендии",
			start: new Date(2024, 3, 27, 8, 30),
		},
		{
			title: "Обявяване на стипендии",
			start: new Date(2024, 3, 28, 8, 30),
		},
		{
			title: "Обявяване на стипендии",
			start: new Date(2024, 3, 29, 8, 30),
		},
	];
	return (
		<View onLayout={handleLayout}>
			<Calendar events={events} height={calendarHeight} mode="3days" swipeEnabled={false} scrollOffsetMinutes={420} />
			<Calendar events={events} height={scheduleHeight} mode="schedule" />
		</View>
	);
}
