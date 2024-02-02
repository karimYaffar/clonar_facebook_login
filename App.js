import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <Pie2 />
      <Pie3 />
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.texto}></Text>
      
      <Text style={styles.texto}></Text>
    </View>
  );
}

export function Cuerpo() {
  return (
    <View style={styles.contenido}>
      <Image
        source={require('./assets/face.png')}
        style={styles.logo}
      />
      <Login />
    </View>
  );
}

export const Pie2 = (props) => {
  return (
    <View style={styles.pie}>
      <Text style={styles.texto}>Sing up for facebook</Text>
    </View>
  );
}

export const Pie3 = ({ opA, opB, opC, opD }) => {
  return (
    <View style={styles.pie}>
      <Text style={styles.texto}>Need help</Text>
    </View>
  );
}

export const Login = () => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#fff"
          placeholder="Email or Phone"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#fff"
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <Button title="Login" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#395996',
    alignItems: 'center',
    justifyContent: 'center',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#395996',
    padding: 10,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,  // Ajusta esta propiedad para controlar la posición vertical de la imagen
  },
  pie: {
    flexDirection: 'row',
    backgroundColor: '#395996',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  contenido: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  texto: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'roboto-bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#C0C8DB',
    height: 40,
    fontSize: 16,
    marginTop: 5,
    color: '#fff',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    marginTop: 50,
    padding: 10,
    borderRadius: 5,
  },
});
