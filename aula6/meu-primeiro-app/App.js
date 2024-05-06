import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Marina Linda</Text>
      <Text style={styles.textorosa}>Meu primeiro texto rosa</Text>
      <Text style={styles.textoazul}>Meu primeiro texto azul</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoazul: {
    color: 'blue'
  },
  textorosa:{
    color: 'pink'
  }
});
