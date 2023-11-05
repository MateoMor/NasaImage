import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgba(7,26,93,255)"},
});
