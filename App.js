import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableLift, TouchableScale } from 'react-native-touchable-moti';
import { View as MotiView } from 'moti';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={{ alignItems: 'center' }}>
				<Text style={{ fontSize: 18, color: '#000', marginBottom: 5 }}>
					TouchableScale
				</Text>
				<TouchableScale style={styles.button}>
					<Text style={styles.text}>Press me!</Text>
				</TouchableScale>
			</View>
			<View style={{ alignItems: 'center' }}>
				<Text style={{ fontSize: 18, color: '#000', marginBottom: 5 }}>
					TouchableLift
				</Text>
				<TouchableLift style={styles.button}>
					<Text style={styles.text}>Press me!</Text>
				</TouchableLift>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	button: {
		width: 150,
		height: 40,
		backgroundColor: '#ea4748',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#000',
		borderWidth: 2,
		borderBottomWidth: 4,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#fff',
	},
});
