import { StyleSheet, Text, View } from "react-native";

export default function RepositoriesScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello from Respositories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
