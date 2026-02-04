import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Onboarding() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem-vindo ao Visit Recife 🌴</Text>

      <Button
        title="Continuar"
        onPress={() => router.replace("/(auth)/login")}
      />
    </View>
  );
}
