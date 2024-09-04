import { Link } from "expo-router";
import { View } from "react-native";
import { ThemedText } from '../components/ThemedText';

export default function TestPage() {
  return (
    <View>
      <Link href="/(tabs)">Link TO Tabs</Link>
      <ThemedText>Helo</ThemedText>
      <ThemedText>Helo</ThemedText>
      <ThemedText>Helo</ThemedText>
      <ThemedText>Helo</ThemedText>
      <ThemedText>Helo</ThemedText>
    </View>
  )
}