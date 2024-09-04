import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from '../../components/ThemedText';

import { Button, StyleSheet } from 'react-native';
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function AccountTabScreen() {
  return (

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Your Account</ThemedText>
        <ThemedText type="title">Your Account</ThemedText>
        <ThemedText type="title">Your Account</ThemedText>
        <Button title="Test" onPress={() => console.log("TEST PRESS")}/>
      </ThemedView>

  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    margin: 50,
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'column',
    top: 50,
  },
});
