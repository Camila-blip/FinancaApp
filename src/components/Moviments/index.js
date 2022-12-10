import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
import { Colors } from "../Colors";
import { MotiView, AnimatePresence, MotiText } from "moti"; 

export default function Movements({date}){
	const [showValue, setShowValue] = useState(false);

	return(
		<TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue)}>
			<Text style={styles.date}>{date.date}</Text> 
			<View style={styles.content}>
				<Text style={styles.label}>{date.label}</Text> 
				{ showValue ? (
					<AnimatePresence exitBeforeEnter>
						<MotiText 
							style={date.type === 1 ? styles.value : styles.expenses}
							from={{
								translateX: 100
							}}
							animate={{
								translateX: 0
							}}
							transition={{
								type: "timing",
								duration: 500
							}}
						>
							{date.type === 1 ? `R$: ${date.value}` : `R$: -${date.value}`} 
						</MotiText> 
					</AnimatePresence>
					
				) : (
					<AnimatePresence exitBeforeEnter>
						<MotiView style={styles.skeleton}
							from={{
								opacity: 0
							}}
							animate={{
								opacity: 1
							}}
							transition={{
								type: "timing"
							}}
						>
						</MotiView>
					</AnimatePresence>
				)}	
			</View>
		</TouchableOpacity>
			
	);
}

const styles = StyleSheet.create({ 
	container:{
		flex: 1,
		marginBottom: 24,
		borderBottomWidth: 0.5,
		borderBottomColor: Colors.gray
	},
	content:{
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 2,
		marginBottom: 8
	},
	date:{
		color: Colors.gray,
		fontWeight: "bold"
	},
	label:{
		fontWeight:"bold",
		fontSize: 16
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
	},
	skeleton:{
		marginTop: 6,
		width: 80,
		height: 10,
		backgroundColor: Colors.gray,
		borderRadius: 8
	}
});