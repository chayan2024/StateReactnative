import React, { Component } from 'react';
import { Text, View ,Button} from 'react-native';

class App extends Component {

  constructor(){
    super();
    this.state={
      name:"chayan",
      age:"12"
    }

  }
  // state={
  //   name:"chayan",
  //   age:"12"
  // }

  handleButtonPress=()=>{
    this.setState({name:"chanda",age:"122"})
  }
  
  render(): React.ReactNode {
    return (
      <View>
      <Text>
        {this.state.name}
      </Text>
      <Text>
        {this.state.age}
      </Text>
      <Button
          title="Press me"
          onPress={this.handleButtonPress}
        />
    </View>
    );
  }
}

export default App;
