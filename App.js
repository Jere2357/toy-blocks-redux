/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import reducers from './src/redux-store/reducers';
import Header from './src/components/Header';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = () => {
  return (
    <>
      <Provider store={store}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                    <Header/>
                </ScrollView>
                <MainScreen />
            </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
