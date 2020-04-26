import HomePage from "../../containers/pages/HomePage";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DetailPage from "../../containers/pages/DetailPage";

const HomePages = createStackNavigator(
    {
        home : {
            screen : HomePage
        },
        detail : {
            screen : DetailPage
        }
    },
    {
        initialRouteName : 'detail',
        headerMode : 'none'
    }
)

const SwitchRoutes = createSwitchNavigator(
    {
        HomePages : {
            screen : HomePages
        }
    },
    {
        initialRouteName: 'HomePages',
        headerMode : 'none'
    }
)

export default createAppContainer(SwitchRoutes)