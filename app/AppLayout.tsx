import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import colors from "./config/colors";
import UnderConstruction from "./screens/components/UnderConstruction";
import MyLibrary from "./screens/MyLibrary";
import Icon from "./components/Icon";

const iconSize = 25;

const RouteConfigs = {
  Activity: {
    screen: UnderConstruction,
    navigationOptions: {
      tabBarLabel: "Actividad",
      tabBarIcon: <Icon name="layout" size={iconSize} />
    }
  },
  MyLibrary: {
    screen: MyLibrary,
    navigationOptions: {
      tabBarLabel: "Mi biblioteca",
      tabBarIcon: <Icon name="book" size={iconSize} />
    }
  },
  Rankings: {
    screen: UnderConstruction,
    navigationOptions: {
      tabBarLabel: "Rankings",
      tabBarIcon: <Icon name="award" size={iconSize} />
    }
  },
  EBooks: {
    screen: UnderConstruction,
    navigationOptions: {
      tabBarLabel: "eBooks",
      tabBarIcon: <Icon name="book-open" size={iconSize} />
    }
  },
  Search: {
    screen: UnderConstruction,
    navigationOptions: {
      tabBarLabel: "Buscar",
      tabBarIcon: <Icon name="search" size={iconSize} />
    }
  }
};

const TabNavigatorConfig = {
  initialRouteName: "MyLibrary",
  tabBarOptions : {
    activeTintColor: colors.lighter,
    inactiveTintColor : colors.bg.lighter,
    style: {
      backgroundColor: colors.bg.dark,
      height: 52
    },
    tabStyle: {
      paddingTop: 6,
      paddingBottom: 5
    },
    labelStyle: {
      fontSize: 9,
      fontFamily: "lato",
    },
  }
};

const TabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default createAppContainer(TabNavigator);
