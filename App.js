import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class App extends React.Component {
  state = {
    text: ""
  };
  handleInputChange = text => {
    this.setState({
      text
    });
  };
  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        {text ? (
          <Text style={{ marginBottom: 16, fontSize: 25, color: "red" }}>
            {text}
          </Text>
        ) : null}
        <Text style={{ marginBottom: 16 }}>
          Start typing and see the sreen change!
        </Text>
        <TextInput
          onChangeText={text => this.handleInputChange(text)}
          placeholder="start typing..."
          style={{
            height: 30,
            width: "80%",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 3
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
