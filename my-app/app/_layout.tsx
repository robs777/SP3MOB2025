import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="telaLogin" options={{ title: "Entrar" }} />
      <Stack.Screen name="telaCadastro" options={{ title: "Cadastrar" }} />
      <Stack.Screen name="telaHome" options={{ title: "Home" }} />
      <Stack.Screen name="telaMedicos" options={{ title: "Medicos" }} />
      <Stack.Screen name="telaSintomas" options={{ title: "Sintomas" }} />
      <Stack.Screen name="telaScanner" options={{ title: "Scanner" }} />
    </Stack>
  );
}
