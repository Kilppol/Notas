import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ScrollView,
	TextInput,
} from 'react-native';
import React, { useState } from 'react';
import ButtonLogin from './ButtonLogin';

export default function BodyInfo() {
	const [notas, setNotas] = useState([
		{ titulo: 'Nota1ejem', contenido: 'contentUnoEjem' },
	]);
	const [titulo, setTitulo] = useState('');
	const [contenido, setContenido] = useState('');

	const agregarNota = () => {
		const nuevaNota = { titulo: titulo, contenido: contenido };
		setNotas([...notas, nuevaNota]);
		setTitulo('');
		setContenido('');
	};

	return (
		<View style={styles.personajeText}>
			<View style={styles.textoWrapper}>
				<Text style={styles.textoWrapped}>Titulo</Text>
			</View>
			<TextInput
				placeholder='Título'
				style={styles.inputTextT}
				autoCapitalize='none'
				onChangeText={(text) => setTitulo(text)}
				value={titulo}
			/>

			<View style={styles.textoWrapper}>
				<Text style={styles.textoWrapped}>Contenido</Text>
			</View>
			<TextInput
				placeholder='Contenido'
				style={styles.inputText}
				autoCapitalize='none'
				onChangeText={(text) => setContenido(text)}
				value={contenido}
			/>
			<ButtonLogin onPress={agregarNota} />

			<FlatList
				style={styles.flatList}
				data={notas}
				renderItem={({ item }) => (
					<View>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>
								Titulo: {item.titulo}
							</Text>
						</View>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>
								Contenido: {item.contenido}
							</Text>
						</View>
					</View>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	textoScrollbar: {
		height: 20,
		width: 350,
		marginTop: 10,
		fontSize: 18,
		marginBottom: 5,
		color: '#FFFFFF',
		textAlign: 'center',
		alignSelf: 'center',
	},
	personajeText: {
		flexGrow: 1,
		marginTop: 10,
		alignSelf: 'flex-start',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
	textoWrapper: {
		marginTop: 20,
		backgroundColor: 'white',
		width: 300,
		height: 40,
		alignItems: 'center',
		borderRadius: 10,
	},
	textoWrapped: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	personajeEspecie: {
		marginTop: 2,
		fontSize: 18,
		marginBottom: 5,
		color: '#FFFFFF',
		textAlign: 'center',
	},
	flatList: {
		flex: 1,
		marginTop: 20,
		width: 300,
		height: 100,
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
	},
	inputText: {
		height: 150,
		width: 300,
		backgroundColor: '#F8F8F8',
		borderRadius: 20,
		padding: 15,
		marginTop: 15,
		paddingStart: 20,
	},
	inputTextT: {
		height: 50,
		width: 300,
		backgroundColor: '#F8F8F8',
		borderRadius: 20,
		padding: 15,
		marginTop: 15,
		paddingStart: 20,
	},
});
