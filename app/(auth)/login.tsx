// app/(auth)/login.tsx
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Entrar" onPress={() => router.replace("/(tabs)/home")} />
    </View>
  );
}
