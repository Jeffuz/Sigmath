import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { Link, useRouter } from 'expo-router';
import { Button, StyleSheet } from 'react-native';
// Learning Page

export default function LearnLayout() {
  const router = useRouter()

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText>Learning Page</ThemedText>
      <Button title="Link" onPress={
        () => router.push('/testPage')
      }/>

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