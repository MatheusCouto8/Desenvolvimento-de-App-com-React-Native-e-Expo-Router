import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Screen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            
            <Text style={styles.welcomeText}>Bem-vindo ao Nosso App!</Text>
            <Image 
                source={{ uri: "https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp" }} 
                style={{ width: 400, height: 300 }} 
            />
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => router.push("/terms")}>
                    <Text style={styles.buttonText}>Termos</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => router.push("/login")}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => router.push("/sobre")}>
                    <Text style={styles.buttonText}>Sobre</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        flex: 1,
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
    },
});