import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile183485Navigator from '../features/UserProfile183485/navigator';
import Settings183484Navigator from '../features/Settings183484/navigator';
import Settings183482Navigator from '../features/Settings183482/navigator';
import SignIn2183480Navigator from '../features/SignIn2183480/navigator';
import Settings183478Navigator from '../features/Settings183478/navigator';
import UserProfile183471Navigator from '../features/UserProfile183471/navigator';
import Settings183470Navigator from '../features/Settings183470/navigator';
import Settings183468Navigator from '../features/Settings183468/navigator';
import SignIn2183466Navigator from '../features/SignIn2183466/navigator';
import Settings183450Navigator from '../features/Settings183450/navigator';
import Settings183447Navigator from '../features/Settings183447/navigator';
import UserProfile183440Navigator from '../features/UserProfile183440/navigator';
import Settings183439Navigator from '../features/Settings183439/navigator';
import Settings183437Navigator from '../features/Settings183437/navigator';
import SignIn2183435Navigator from '../features/SignIn2183435/navigator';
import BlankScreen10183433Navigator from '../features/BlankScreen10183433/navigator';
import Settings177565Navigator from '../features/Settings177565/navigator';
import UserProfile177558Navigator from '../features/UserProfile177558/navigator';
import Settings177555Navigator from '../features/Settings177555/navigator';
import SignIn2177553Navigator from '../features/SignIn2177553/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile183485: { screen: UserProfile183485Navigator },
Settings183484: { screen: Settings183484Navigator },
Settings183482: { screen: Settings183482Navigator },
SignIn2183480: { screen: SignIn2183480Navigator },
Settings183478: { screen: Settings183478Navigator },
UserProfile183471: { screen: UserProfile183471Navigator },
Settings183470: { screen: Settings183470Navigator },
Settings183468: { screen: Settings183468Navigator },
SignIn2183466: { screen: SignIn2183466Navigator },
Settings183450: { screen: Settings183450Navigator },
Settings183447: { screen: Settings183447Navigator },
UserProfile183440: { screen: UserProfile183440Navigator },
Settings183439: { screen: Settings183439Navigator },
Settings183437: { screen: Settings183437Navigator },
SignIn2183435: { screen: SignIn2183435Navigator },
BlankScreen10183433: { screen: BlankScreen10183433Navigator },
Settings177565: { screen: Settings177565Navigator },
UserProfile177558: { screen: UserProfile177558Navigator },
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
