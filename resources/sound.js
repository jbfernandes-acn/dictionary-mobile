import * as Speech from 'expo-speech';

export const playWordSound = (word) => {
    const speechOptions = {
        language: 'en', 
        pitch: 0.8,
        rate: 0.8
    }
    Speech.speak(word, speechOptions);
}