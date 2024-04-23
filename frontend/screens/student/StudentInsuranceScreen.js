import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { useApi } from "../../api/useApi";

export default function StudentInsuranceScreen() {
	const [insurances, setInsurances] = useState([]);
	const api = useApi();
	async function getInsurances() {
		const res = (await api.get("/insurances")).data;
		setInsurances(res);
	}
	useFocusEffect(
		useCallback(() => {
			getInsurances();
		}, [])
	);

	return (
		<ScrollView>
			<DataTable>
				<DataTable.Header>
					<DataTable.Title>Година</DataTable.Title>
					<DataTable.Title>Месец</DataTable.Title>
					<DataTable.Title numeric>Осиг. сума</DataTable.Title>
					<DataTable.Title numeric>Осигуровка</DataTable.Title>
				</DataTable.Header>
				{insurances?.map((insurance, index) => (
					<DataTable.Row key={`insurance-${index}`}>
						<DataTable.Cell>{insurance.year}</DataTable.Cell>
						<DataTable.Cell>{insurance.month}</DataTable.Cell>
						<DataTable.Cell numeric>{insurance.insurance_sum}</DataTable.Cell>
						<DataTable.Cell numeric>{insurance.insurance}</DataTable.Cell>
					</DataTable.Row>
				))}
			</DataTable>
		</ScrollView>
	);
}
