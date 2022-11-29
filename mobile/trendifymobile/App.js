import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'
export default function App() {
  return (
    <>
      <WebView
        source={{ uri: 'https://trendify-project.herokuapp.com' }}
        sharedCookiesEnabled = { true }
        thirdPartyCookiesEnabled = { true }
      />
      <StatusBar translucent={true} hidden = {false} backgroundColor={'transparent'} style = 'light' />
    </>
  );
}
