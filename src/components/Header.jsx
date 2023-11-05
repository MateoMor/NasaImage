import { View, Text, Image, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rigthContainer}>
        <Image
          source={require("../../assets/nasa-logo.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: { flex: 1, alignItems: "flex-start" },
  title: { fontSize: 20, color: "#FFF" },
  rigthContainer: { flex: 1, alignItems: "flex-end" },
  image: { width: 60, height: 60 },
});

export default Header;
