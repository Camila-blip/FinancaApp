import { View, Text, StyleSheet } from "react-native";
import {Colors} from "../Colors";

export default function Balance({saldo, gastos}){
	return(
		<View style={styles.container}>
			<View style={styles.item}>
				<Text style={styles.itemTitle}>Saldo</Text>
				<View style={styles.content}>
					<Text style={styles.currencySymbol}>R$:</Text>
					<Text style={styles.balance}>{saldo}</Text>
				</View>
			</View>	
			<View style={styles.item}>
				<Text style={styles.itemTitle}>Gastos</Text>
				<View style={styles.content}>
					<Text style={styles.currencySymbol}>R$:</Text>
					<Text style={styles.expenses}>{gastos}</Text>
				</View>
			</View>	
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingStart: 16,
		paddingEnd: 16,
		marginTop: -24,
		marginStart: 14,
		marginEnd: 14,
		borderRadius: 4,
		paddingTop: 22,
		paddingBottom: 22,
		zIndex: 10,
	},
	currencySymbol:{
		color: Colors.gray,
		marginRight: 6,
	},
	expenses:{
		fontSize: 22,
		color: Colors.orange,
	},
	content:{
		flexDirection: "row",
		alignItems: "center",
	},
	itemTitle:{
		fontSize: 20,
		color: Colors.gray,
	},
	balance:{
		fontSize: 22,
		color: Colors.green,
	},
	item:{
		flexDirection: "column",
	}
});
