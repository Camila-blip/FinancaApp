import { StyleSheet, Text, View,FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Moviments";
import Actions from "../../components/Actions";

const list = [
	{
		id: 1,
		label: "Boleto conta luz",
		value: "300,90",
		date: "17/09/2022",
		type: 0 
	},
	{
		id: 2,
		label: "Pix Camila",
		value: "200,90",
		date: "20/09/2022",
		type: 1 
	},
	{
		id: 3,
		label: "Salário",
		value: "7.500,90",
		date: "22/09/2022",
		type: 1 
	},
];

export default function Home() {
	return (
		<View style={styles.container}>
			<Header name="Jhenifer Elisabete"/>
			<Balance saldo="15.000,00" gastos="-390,00"/>
			<Actions />
			<Text style={styles.title}>Últimas movimentações</Text>
			<FlatList 
				style={styles.list} 
				data={list}
				keyExtractor={(item) => String(item.id)} 
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Movements date={item}  />
				)}
			/>  
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fafafa",
		justifyContent: "center",
	},
	title:{
		fontSize: 18,
		fontWeight: "bold",
		margin: 16,
	},
	list:{
		marginStart: 16,
		marginEnd: 16
	}
});
