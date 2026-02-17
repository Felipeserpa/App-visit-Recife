// app/(auth)/login.tsx
import { router } from "expo-router";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

//const Image = require("../assets/images/marco.jpg");
export default function Login() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* A View 'overlay' ajuda a dar contraste para o texto não sumir na foto */}
        <View style={styles.overlay}>
          <SafeAreaView style={styles.content}>
            <View style={styles.container}>
              <Text style={styles.text1}>Visit Recife Login 🌴</Text>
              <TextInput
                placeholder="Email"
                style={{
                  backgroundColor: "#fff",
                  width: "100%",
                  marginBottom: 10,
                  padding: 10,
                  borderRadius: 5,
                }}
              />

              <Text style={styles.description}>
                Faça login para acessar os melhores roteiros personalizados e
                descobrir o que está acontecendo agora, do Marco Zero ao Alto da
                Sé.
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="Login"
                color="#110f10" // Um rosa/vermelho que combina com Recife
                onPress={() => router.replace("/(auth)/login")}
              />
            </View>
          </SafeAreaView>
        </View>
      </View>
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
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)", // Escurece um pouco a imagem para o texto branco brilhar
    justifyContent: "center",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
