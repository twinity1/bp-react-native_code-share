import React from 'react';

import {View, Button, FlatList, TouchableHighlight, Text} from 'react-native';

import TestSender from "./bussiness_logic/TestSender";

export default class TestComponent extends React.Component {

  state = {
    data: []
  }

  async sendRequest() {
    const sender = new TestSender();

    sender.send().then(data => {
      this.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <View>
        <Button onPress={this.sendRequest.bind(this)} title="Press this button to load!" />

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={this.state.data}
          renderItem={({ item, index, separators }) => (
            <Text
              key={item.id.toString()}>
                {item.title}
            </Text>
          )}
        />
      </View>
    );
  }
}
