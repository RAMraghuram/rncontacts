// this is the common screen used in most of the screens
import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';

// In this file i missspelled the children as childern and none of the content showed so be carefull to write exactly as it is
const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
