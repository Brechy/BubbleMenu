import React from 'react';
import { 
  StyleSheet,
  Animated,
  View,
  Dimensions 
} from 'react-native';

//responsive
const {width, height} = Dimensions.get('window');
const size = Math.min(width, height) - 1;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{
          position: 'absolute',
          backgroundColor: '#ccc',
          width: size,
          height: size,
          borderRadius: size / 2
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
