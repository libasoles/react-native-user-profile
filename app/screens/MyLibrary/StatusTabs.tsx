import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import colors from "../../config/colors";
import { createAppContainer } from "react-navigation";
import Books from "./Books";
import status from "../../enums/status";

const RouteConfigs = {
  Read: {
    screen: Books,
    params: { status: "readed" },
    navigationOptions: {
      tabBarLabel: status.readed
    }
  },
  Reading: {
    screen: Books,
    params: { status: "reading" },
    navigationOptions: {
      tabBarLabel: status.reading
    }
  },
  WantToRead: {
    screen: Books,
    params: { status: "wantToRead" },
    navigationOptions: {
      tabBarLabel: status.wantToRead
    }
  },
  Abandoned: {
    screen: Books,
    params: { status: "abandoned" },
    navigationOptions: {
      tabBarLabel: status.abandoned
    }
  }
};

const TabNavigatorConfig = {
  initialRouteName: "Read",
  lazy: true,
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

const StatusTabs = createMaterialTopTabNavigator(
  RouteConfigs,
  TabNavigatorConfig
);

export default createAppContainer(StatusTabs);
