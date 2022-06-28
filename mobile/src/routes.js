import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Map from './pages/Map'
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Login'
      },
    },
    Map: {
      screen: Map,
      navigationOptions: {
        title: 'Safe Woman'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Abrindo no WhatsApp...'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#181b23',
      },
    },
  })
);

export default Routes;