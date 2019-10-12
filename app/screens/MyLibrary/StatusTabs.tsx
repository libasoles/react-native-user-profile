import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import colors from "../../config/colors";
import { createAppContainer } from "react-navigation";
import Books from "./Books";

const RouteConfigs = {
  Read: {
    screen: Books,
    navigationOptions: {
      tabBarLabel: "Leídos"
    }
  },
  Reading: {
    screen: Books,
    navigationOptions: {
      tabBarLabel: "Leyendo"
    }
  },
  WantToRead: {
    screen: Books,
    navigationOptions: {
      tabBarLabel: "Por leer"
    }
  },
  Abandoned: {
    screen: Books,
    navigationOptions: {
      tabBarLabel: "Abandonado"
    }
  }
};

const TabNavigatorConfig = {
  initialRouteName: "Read",
  tabBarOptions: {
    style: {
      height: 50,
      backgroundColor: colors.bg.lighter,
      borderBottomColor: colors.secondary,
      borderBottomWidth: 0.5
    },
    tabStyle: {
      color: colors.text.dark,
      padding: 0
    },
    labelStyle: {
      fontSize: 16,
      fontFamily: "lato",
      color: colors.text.dark,
      padding: 0
    },
    indicatorStyle: {
      borderBottomColor: colors.dark,
      borderBottomWidth: 3
    },
    activeTintColor: colors.text.primary,
    inactiveTintColor: colors.text.secondary,
    upperCaseLabel: false
  }
};

const StatusTabs = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

export default createAppContainer(StatusTabs);
