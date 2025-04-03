import { View, TextInput, StyleSheet, TouchableOpacity, Text, Pressable } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '20rem',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '10rem',
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});