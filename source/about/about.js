'use strict';

var React = require('react-native');

var styles = require('./about.style.js');

var {
  View,
  Text,
  Component
} = React;

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          About
        </Text>
      </View>
    );
  }
}

module.exports = About;
