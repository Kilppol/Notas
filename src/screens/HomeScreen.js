import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useRef } from 'react';
import ButtonLogin from '../components/ButtonLogin';

export default function HomeScreen(props) {
	const { navigation } = props;
	const goToCrearNotas = () => {
		navigation.navigate('Notas');
	};
	//const logoRef = useRef('../assets/notas.png');
	return (
		<View style={styles.mainContainer}>
			<Image
				width={150}
				height={150}
				//ref={logoRef}
				source={require('../assets/notonas.png')}
				style={styles.fondoLogin}
			/>
			<View style={styles.botoncont}>
				<ButtonLogin style={styles.boton} onPress={goToCrearNotas} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flexGrow: 1,
		alignContent: 'center',
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	fondoLogin: {
		top: 200,
		alignSelf: 'center',
	},
	boton: {
		//bottom: 200,
	},
	botoncont: {
		top: 250,
	},
});
