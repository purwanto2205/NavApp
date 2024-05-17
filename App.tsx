/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Linking} from 'react-native';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [startAddress] = useState<string>('indy office park');
  const [endAddress] = useState<string>('monas');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const openNavigationRoute = () => {
    // Format the start and end addresses for the URL
    const formattedStartAddress = encodeURIComponent(startAddress);
    const formattedEndAddress = encodeURIComponent(endAddress);

    // Construct the URL for the navigation route
    const url = `https://www.google.com/maps/dir/${formattedStartAddress}/${formattedEndAddress}`;

    // Open the URL in the default web browser or maps app
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button title="Open Maps App" onPress={openNavigationRoute} />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    height: 20,
  },
});

export default App;
