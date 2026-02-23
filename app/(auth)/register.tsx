import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView, // Adicionado para telas com muitos inputs
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const logoImage = require("../../assets/images/logo.png");

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister() {
    if (!name || !email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("Conta criada com sucesso!");
    router.replace("/(tabs)/home");
  }

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <SafeAreaView style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <Image
                source={logoImage}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text1}>Crie sua conta 🌴</Text>
              <Text style={styles.subtitle}>Comece sua jornada por Recife</Text>
            </View>

            <View style={styles.form}>
              <TextInput
                placeholder="Nome Completo"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />

              <TextInput
                placeholder="E-mail"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                placeholder="Senha"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
              />

              <TextInput
                placeholder="Confirmar Senha"
                placeholderTextColor="#888"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
              />
            </View>

            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.buttonMain}
                onPress={handleRegister}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>CADASTRAR</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push("/login")}
                style={styles.linkArea}
              >
                <Text style={styles.linkCadastro}>
                  Já tem uma conta?{" "}
                  <Text style={styles.linkBold}>Faça login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    width: 180,
    height: 140,
    marginBottom: 15,
    borderRadius: 20,
  },
  text1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15, // Aumentado o espaçamento entre campos
  },
  footer: {
    marginTop: 20,
    paddingBottom: 40,
  },
  buttonMain: {
    backgroundColor: "#3894ac",
    height: 55,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkArea: {
    marginTop: 20,
    alignItems: "center",
  },
  linkCadastro: {
    color: "#666",
    fontSize: 15,
  },
  linkBold: {
    color: "#3894ac",
    fontWeight: "bold",
  },
});
