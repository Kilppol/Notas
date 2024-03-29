import {
	View,
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderInfo from '../components/HeaderInfo';
import BodyInfo from '../components/BodyInfo';

export default function NotasScreen() {
	const [notas, setNotas] = useState({
		titulo: 'Mame',
		contenido: 'content',
	});
	return (
		<SafeAreaView style={styles.contenedor}>
			<View style={styles.contenedorDos}>
				<Text style={styles.personajeNombre}>Notas</Text>
				<View style={styles.personajeContainer}>
					<BodyInfo />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contenedor: {
		flex: 1,
		backgroundColor: '#2A2C2E',
	},
	contenedorDos: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	personajeNombre: {
		marginTop: 20,
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#000',
		textAlign: 'center',
	},
	personajeContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2A2C2E',
		borderRadius: 15,
		padding: 10,
		flexGrow: 1,
		width: '100%',
		height: '80%',
	},
});
