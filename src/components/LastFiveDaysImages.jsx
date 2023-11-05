import { StyleSheet, Text, View, ScrollView } from "react-native"; // ScrollView es una vista como View pero que permite hacer scroll en ella si lo necesitan
import PostImage from "./PostImage";

function LastFiveDaysImages({ postImages }) {
  // En el arreglo postImages se encuentra la información de las imágenes de los últimos 5 días
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages.map((postImage) => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} /> // Componente que recibe una key (identificador) y todos los elementos de la imagen recorrida del arreglo
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginVertical: 8 },
  title: { color: "white", fontSize: 16, marginBottom: 18 },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysImages;
