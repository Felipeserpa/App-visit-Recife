import { router } from "expo-router";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const image = {
  uri: "https://stock.adobe.com/br/search?k=%22marco+zero%22&asset_id=336437722",
};

export default function Onboarding() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <Text style={styles.text1}>Bem-vindo ao Visit Recife 🌴</Text>
        <Text
          style={{ color: "#1b1818", textAlign: "center", marginBottom: 40 }}
        >
          {" "}
          Chega de roteiro genéricos.Descubra o que está acontecendo agora,do
          Marco Zero ao Alto da Sé{" "}
        </Text>
        <Button
          title="Próximo"
          onPress={() => router.replace("/(auth)/login")}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#141212",
    textAlign: "center",
    marginBottom: 20,
  },
});
