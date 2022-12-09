import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
import { Colors } from "../Colors";

export default function Movements({label, date, value, type}){
	return(
		<TouchableOpacity style={styles.container}>
			<Text style={styles.date}>{date}</Text> 
			<View style={styles.content}>
				<Text style={styles.label}>{label}</Text> 

				<Text style={type === 1 ? styles.value : styles.expenses}>{type === 1 ? `R$: ${value}` : `R$: -${value}`} </Text> 
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginBottom: 24,
		borderBottomWidth: 0.5,
		borderBottomColor: Colors.gray,
	},
	content:{
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 2,
		marginBottom: 8,
	},
	date:{
		color: Colors.gray,
		fontWeight: "bold",
	},
	label:{
		fontWeight:"bold",
		fontSize: 16,
	},
	value:{
		fontSize: 16,
		color: Colors.green,
		fontWeight: "bold"
	},
	expenses:{
		fontSize: 16,
		color: Colors.orange,
		fontWeight: "bold"
	}
});