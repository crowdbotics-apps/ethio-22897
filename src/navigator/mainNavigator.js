import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings177565Navigator from '../features/Settings177565/navigator';
import UserProfile177558Navigator from '../features/UserProfile177558/navigator';
import Settings177557Navigator from '../features/Settings177557/navigator';
import Settings177555Navigator from '../features/Settings177555/navigator';
import SignIn2177553Navigator from '../features/SignIn2177553/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings177565: { screen: Settings177565Navigator },
UserProfile177558: { screen: UserProfile177558Navigator },
Settings177557: { screen: Settings177557Navigator },
Settings177555: { screen: Settings177555Navigator },
SignIn2177553: { screen: SignIn2177553Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
