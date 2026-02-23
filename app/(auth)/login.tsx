import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity, // Melhor que o Button para estilizar
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const logoImage = require("../../assets/images/logo.png");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email && password) {
      alert("Login bem-sucedido!");
      router.replace("/(tabs)/home"); // Exemplo de navegação
    } else {
      alert("Por favor, preencha email e senha.");
    }
  }

  return (
    <SafeAreaProvider>
      {/* KeyboardAvoidingView evita que o teclado cubra os inputs */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <SafeAreaView style={styles.content}>
          <View style={styles.header}>
            <Image
              source={logoImage}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.text1}>Bem-vindo de volta! 🌴</Text>
          </View>

          <View style={styles.form}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TouchableOpacity style={styles.linkEsqueciContainer}>
              <Link style={styles.linkesqueci} href={"/register"}>
                Esqueci minha senha
              </Link>
            </TouchableOpacity>

            <TextInput
              placeholder="Senha"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />

            <Link href="/register" style={styles.linkCadastro}>
              Ainda não tem conta?{" "}
              <Text style={{ fontWeight: "bold" }}>Cadastre-se</Text>
            </Link>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.buttonMain}
              onPress={handleLogin}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Fundo levemente cinza
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "space-around",
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 140,
    marginBottom: 10,
    borderRadius: 20, // BORDAS ARREDONDADAS DA IMAGEM
    borderWidth: 1,
    borderColor: "#3894ac",
  },
  text1: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    height: 55,
    borderRadius: 12, // BORDAS ARREDONDADAS DO INPUT
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 5,
  },
  linkEsqueciContainer: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  linkesqueci: {
    color: "#3894ac",
    fontSize: 14,
  },
  linkCadastro: {
    color: "#666",
    textAlign: "center",
    marginTop: 15,
    fontSize: 15,
  },
  footer: {
    width: "100%",
    paddingBottom: 20,
  },
  buttonMain: {
    backgroundColor: "#3894ac",
    height: 55,
    borderRadius: 25, // BORDAS BEM REDONDAS DO BOTÃO
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // Sombrinha no Android
    shadowColor: "#000", // Sombrinha no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
