'use strict';

var React = require('react-native');

var About = require('./source/about/about');
var Dashboard = require('./source/dashboard/dashboard');

var {
  AppRegistry,
  TabBarIOS,
  Component
} = React;

class StarterApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'dashboard'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'dashboard'}
          systemIcon="featured"
          // title="Dashboard"
          onPress={() => {
              this.setState({
                  selectedTab: 'dashboard',
              });
          }}>
            <Dashboard/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'about'}
          systemIcon="more"
          // title="About"
          onPress={() => {
                this.setState({
                    selectedTab: 'about',
                });
          }}>
          <About/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('StarterApp', () => StarterApp);
