import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
    {
        Index: IndexScreen,
        Show: ShowScreen,
        Edit: EditScreen,
        Create: CreateScreen,
    },
    {
        initialRouteName: "Index",
        defaultNavigationOptions: {
            title: "Blog List",
        },
    }
);

const App = createAppContainer(navigator);

export default ()=>{
    return <App/>
}