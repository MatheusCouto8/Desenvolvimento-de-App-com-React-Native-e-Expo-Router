import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ 
            headerShown: true,
            headerStyle: {
                backgroundColor: '#3b5998',
            }, 
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="index" options={{ title: 'Home'}}/>
            <Stack.Screen name="sobre" options={{ title: 'Sobre'}}/>
            <Stack.Screen name="login" options={{ title: 'Login'}}/>
            <Stack.Screen name="terms" options={{ title: 'Termos'}}/>
        </Stack>
    )
    }
