import { router } from "expo-router";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Importando a imagem local
const backgroundImage = require("../assets/images/marco.jpg");
export default function Onboarding() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          {/* A View 'overlay' ajuda a dar contraste para o texto não sumir na foto */}
          <View style={styles.overlay}>
            <SafeAreaView style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={styles.text1}>
                  Bem-vindo ao Visit Recife... 🌴
                </Text>
                <Text style={styles.description}>
                  Chega de roteiros genéricos. Descubra o que está acontecendo
                  agora, do Marco Zero ao Alto da Sé.
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  title="Próximo"
                  color="#E91E63" // Um rosa/vermelho que combina com Recife
                  onPress={() => router.replace("/(auth)/login")}
                />
              </View>
            </SafeAreaView>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)", // Escurece um pouco a imagem para o texto branco brilhar
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "space-between", // Empurra o texto para cima e botão para baixo (opcional)
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff", // Texto branco fica melhor em fotos
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Sombra no texto para garantir leitura
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    color: "#eee",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 26,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
});
