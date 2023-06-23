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
	const notas = {
		nota1: { titulo: 'xd', contenido: 'content' },
	};
	return (
		<View style={styles.personajeText}>
			<View style={styles.textoWrapper}>
				<Text style={styles.textoWrapped}>Titulo</Text>
			</View>
			<TextInput
				placeholder='Contrasena 12345678'
				style={styles.inputTextT}
				autoCapitalize='none'
				secureTextEntry={false}
				value='erre'
			/>

			<View style={styles.textoWrapper}>
				<Text style={styles.textoWrapped}>Contenido</Text>
			</View>
			<TextInput
				placeholder='Contrasena 12345678'
				style={styles.inputText}
				autoCapitalize='none'
				secureTextEntry={false}
				value='erre'
			/>
			<ButtonLogin />
			<ScrollView style={styles.flatList}>
				<Text style={styles.personajeEspecie}></Text>
				<View style={styles.textoWrapper}>
					<Text style={styles.textoWrapped}>
						Titulo:{notas.nota1.titulo}{' '}
					</Text>
				</View>
				<View style={styles.textoWrapper}>
					<Text style={styles.textoWrapped}>
						Contenido: {notas.nota1.contenido}{' '}
					</Text>
				</View>
			</ScrollView>
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
