import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-blue-200 min-h-screen flex justify-center items-center">
      <Text className="text-2xl font-bold text-red-600">HomeScreen2</Text>
      <Text className="text-2xl font-bold text-red-600">HomeScreen2</Text>

      <Text className="text-2xl font-bold text-red-600">HomeScreen2</Text>
      <Text className="text-2xl font-bold text-red-600">HomeScreen2</Text>
      <Text className="text-2xl font-bold text-red-600">HomeScreen2</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
