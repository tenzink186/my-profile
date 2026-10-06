import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function App() {
  const [likes, setLikes] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('./assets/image.jpg')} style={styles.avatar} />
        <Text style={styles.name}>Karma Tenzin</Text>
        <Text style={styles.subtitle}>BE Information and Technology · Third Year</Text>
        <Text style={styles.bio}>I am an Information Technology engineering student who is passionate about programming and mobile app development.</Text>
        
        <View style={styles.likesRow}>
          <Ionicons name="heart" size={22} color="#d64545" />
          <Text style={styles.likesText}>{likes} likes</Text>
        </View>
          {likes >= 10 && (
            <Text style={styles.popularText}>You're popular!</Text>
          )}
        <View style={styles.row}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.6 },
            ]}
            onPress={() => setLikes(likes + 1)}
          >
            <Ionicons name="arrow-up" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Upvote</Text>
          </Pressable>
          <Pressable 
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.6 },
            ]}
            onPress={() => setLikes(Math.max(0, likes - 1))}
          >
            <Ionicons name="arrow-down" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Downvote</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.resetButton,
              pressed && { opacity: 0.6 },
            ]}
            onPress={() => setLikes(0)}
          >
            <Ionicons name="refresh" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Reset</Text>
            </Pressable>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({

  resetButton: {
    backgroundColor: '#000000',
  },
  popularText: {
    color: '#2f6fed',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4, // the shadow on Android
  },
  avatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  bio: { fontSize: 15, textAlign: 'center', marginTop: 12, lineHeight: 22 },

  likesRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 20 },
  likesText: { fontSize: 18 },
  row: { flexDirection: 'row', gap: 12, marginTop: 12 },
  button: {
    backgroundColor: '#2f6fed',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center', // centres the icon above its label
    minWidth: 84,
  },
  buttonLabel: { color: '#fff', fontSize: 12, fontWeight: '600', marginTop: 2 },
});
