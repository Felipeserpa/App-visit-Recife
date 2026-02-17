// app/(auth)/login.tsx
import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const backgroundImage = require("../../assets/images/visit.png");
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlelogin() {
    // Aqui você pode adicionar a lógica de autenticação, como chamar uma API
    if (email && password) {
      // Simulando um login bem-sucedido
      alert("Login bem-sucedido!");
      console.log("Email:", email);
      console.log("Senha:", password);
    } else {
      alert("Por favor, preencha email e senha.");
      return;
    }

    // Por enquanto, vamos apenas navegar para a tela de onboarding
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: "#e6e3e3" }}>
      <View style={styles.container}>
        {/* A View 'overlay' ajuda a dar contraste para o texto não sumir na foto */}
        <View style={styles.overlay}>
          <Image source={backgroundImage} style={styles.image} />
          <SafeAreaView style={styles.content}>
            <View style={styles.container}>
              <Text style={styles.text1}>Visit Recife Login 🌴</Text>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{
                  backgroundColor: "#fff",
                  width: "100%",
                  marginBottom: 10,
                  padding: 10,
                  borderRadius: 5,
                }}
              />
              <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
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
                onPress={handlelogin}
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
    paddingHorizontal: 20,
    padding: 50,
    borderRadius: 5,
  },
  text1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    color: "#1f1b1b",
    textAlign: "center",
  },
});
