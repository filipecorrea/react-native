'use strict';

var React = require('react-native');

var styles = require('./dashboard.style.js');

var {
  View,
  Text,
  Component
} = React;

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Dashboard
        </Text>
      </View>
    );
  }
}

module.exports = Dashboard;
