import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function HeaderInfo({ characters }) {
	return (
		<View style={styles.header}>
			<View style={styles.personajeEstadoWrapper}>
				<Text style={styles.personajeEstado}>aber k pedo</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	header: {
		flexGrow: 1,
		flexDirection: 'row',
		padding: 10,
		marginTop: 265,
		marginLeft: 47,
		alignItems: 'top',
	},
	personajeImagen: {
		width: 200,
		height: 200,
		borderRadius: 10,
	},
	personajeEstadoWrapper: {
		alignSelf: 'center',
		backgroundColor: 'white',
		padding: 5,
		borderRadius: 5,
		width: 150,
		height: 44,
		transform: [{ rotate: '90deg' }],
	},
	personajeEstado: {
		fontSize: 25,
		color: '#FFFFFF',
		alignSelf: 'center',
		fontWeight: 'bold',
		marginTop: 5,
	},
});
