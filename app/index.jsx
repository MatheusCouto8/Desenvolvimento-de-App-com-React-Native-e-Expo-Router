import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Link href="/login" style={styles.link}>
                <Text style={styles.linkText}>Ir para Login</Text>
            </Link>
            <Text style={styles.title}>Olá, Tudo bem?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});