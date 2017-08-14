
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ColorSwitcher extends Component {

  constructor() {
    super()
    this.state = {
      backgroundColor: "#34495e"
    }
    this.switchColor = this.switchColor.bind(this)
  }

  switchColor(backgroundColor) {
    this.setState({backgroundColor: backgroundColor})
  }
  render() {
    const  { backgroundColor } = this.state
    return (
      <View style={[styles.container, {backgroundColor}]}>
        <Text style={styles.heading}>Tap color to change background.</Text>
        <Text style={styles.button} onPress={() => this.switchColor('#3498db')}>Peter River</Text>
        <Text style={styles.button} onPress={() => this.switchColor('#e74c3c')}>Alizarin</Text>
        <Text style={styles.button} onPress={() => this.switchColor('#8e44ad')}>Wisteria</Text>
        <Text style={styles.button} onPress={() => this.switchColor('#16a085')}>Green Sea</Text>
        <Text style={styles.button} onPress={() => this.switchColor('#34495e')}>Reset Color</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  heading: {
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center'
  },

  button: {
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    color: '#ffffff',
    borderColor: '#ffffff',
    alignSelf: 'stretch',
    textAlign: 'center'
  }

})

AppRegistry.registerComponent('ColorSwitcher', () => ColorSwitcher);
