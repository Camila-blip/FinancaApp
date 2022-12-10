import { View, Text, StyleSheet } from "react-native";
import {Colors} from "../Colors";
import { MotiView } from "moti"; 

export default function Balance({saldo, gastos}){
	return(
		<MotiView
			from={{
				rotateX: "-100deg",
				opacity: 0
			}}
			animate={{
				rotateX: "0deg",
				opacity: 1
			}}
			transition={{
				type: "timing",
				duration: 900,
				delay: 300
			}}
			style={styles.container}>
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
		</MotiView>
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
