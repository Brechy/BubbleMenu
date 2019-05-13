import React from 'react';
import { 
  StyleSheet,
  Animated,
  View,
  Dimensions,
  TouchableWithoutFeedback 
} from 'react-native';
import { Easing } from 'react-native-reanimated';

//responsive
const {width, height} = Dimensions.get('window');
const size = Math.min(width, height) - 1;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(0)
    };
  }
  
  componentDidMount() {
    Animated.timing(this.state.scale, {
      toValue: 4,
      duration: 1000,
      easing: Easing.linear
    }).start();
  };

  getLeftPosition () {
    const halfSize = size / 2;
    const halfWidth = width / 2;
    
    let marginHorizontalTopLeft = -halfSize;

    return marginHorizontalTopLeft + halfWidth;
  }

  getTopPosition () {
    const halfSize = size / 2;

    let marginVerticalTopLeft = -halfSize;

    return marginVerticalTopLeft + height;
  }

  onPress() {
    Animated.timing(this.state.scale, {
      toValue: 4,
      duration: 1000,
      easing: Easing.linear
    }).start(() => {
      this.setState({
        scale: new Animated.Value(0)
      });
    });
  }
  
  render() {
    let topPosition = this.getTopPosition();
    let leftPosition = this.getLeftPosition();
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
        <View style={styles.container}>
          <Animated.View style={{
            position: 'absolute',
            backgroundColor: '#ccc',
            width: size,
            height: size,
            borderRadius: size / 2,
            left: leftPosition,
            top: topPosition,
            transform: [{
              scale: this.state.scale
            }]
          }} />
        </View>
      </TouchableWithoutFeedback> 
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
