import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é a tela Sobre!</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => console.log("/login")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Ir para Login</Text>
        </Pressable>

        <Pressable
          onPress={() => console.log("/termos")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Ir para Termos</Text>
        </Pressable>

        <Pressable
          onPress={() => console.log("/sobre")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Ir para Sobre</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


 
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20, // Ajuste o padding horizontal para um valor menor
    borderRadius: 5,
    marginHorizontal: 5,
    flex: 1, // Faz com que os botões ocupem espaço igual
  },
  buttonPressed: {
    backgroundColor: "darkblue",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center", // Centraliza o texto
  },
  buttonContainer: {
    flexDirection: "row", // Alinha os botões em linha
    justifyContent: "space-between", // Espaço igual entre os botões
    padding: 10, // Adiciona um pouco de preenchimento ao redor
  },

  container: {
    textAlign: 'center',
    display: 'flex'
  },
  
});

export default MyComponent;
