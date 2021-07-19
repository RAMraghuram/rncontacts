// this is the common screen used in most of the screens
import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';

// In this file i missspelled the children as childern and none of the content showed so be carefull to write exactly as it is
const Container = ({style, children}) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={[styles.wrapper, style]}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Container;
