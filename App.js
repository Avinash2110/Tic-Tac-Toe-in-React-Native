import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import {Entypo} from "@expo/vector-icons";

// declaring and initialising an array of size 9
const itemArray= new Array(9).fill("empty");
export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isCross : true,
      winMessage: "",
    }
  }

  // Set the elements insided the array
  drawItem = index =>{
    if(itemArray[index] === "empty"){
      itemArray[index] = this.state.isCross;
      this.setState({isCross: !itemArray[index]});
    }
    this.winGame();
  }

  // set the icon if the item
  chooseItemIcon = index =>{
    if(itemArray[index] !== "empty"){
      return itemArray[index] ? "cross" : "circle";
    }
    return "pencil";

  }

  // set the color of the icon
  chooseItemColor = index => {
    if(itemArray[index] !== "empty"){
      return itemArray[index] ? "red" : "green";
    }
    return "black";
  };

  // decides the winner
  winGame = () => {
    if(itemArray[0]!=="empty" && itemArray[0] == itemArray[1] && itemArray[1] == itemArray[2]){
      this.setState({winMessage: itemArray[0]? "Cross Wins" : "Circle Wins"})
    }
    else if(itemArray[3]!=="empty" && itemArray[3] == itemArray[4] && itemArray[4] == itemArray[5]){
      this.setState({winMessage: itemArray[0]? "Cross Wins" : "Circle Wins"})
    }
    else if(itemArray[6]!=="empty" && itemArray[6] == itemArray[7] && itemArray[7] == itemArray[8]){
      this.setState({winMessage: itemArray[6]? "Cross Wins" : "Circle Wins"})
    }
    else if(itemArray[0]!=="empty" && itemArray[0] == itemArray[3] && itemArray[3] == itemArray[6]){
      this.setState({winMessage: itemArray[0]? "Cross Wins" : "Circle Wins"})
    }
    else if(itemArray[1]!=="empty" && itemArray[1] == itemArray[4] && itemArray[4] == itemArray[7]){
      this.setState({winMessage: itemArray[1]? "Cross Wins" : "Circle Wins"})
    }
    else if(itemArray[2]!=="empty" && itemArray[2] == itemArray[5] && itemArray[5] == itemArray[8]){
      this.setState({winMessage: itemArray[2]? "Cross Wins" : "Circle Wins"})
    }
    else if(itemArray[0]!=="empty" && itemArray[0] == itemArray[4] && itemArray[4] == itemArray[8]){
      this.setState({winMessage: itemArray[0]? "Cross Wins" : "Circle Wins"})
    }
    else if(itemArray[2]!=="empty" && itemArray[2] == itemArray[4] && itemArray[4] == itemArray[6]){
      this.setState({winMessage: itemArray[2]? "Cross Wins" : "Circle Wins"})
    }
  }

  // reset the game
  resetGame = () => {
    itemArray.fill("empty");
    this.setState({winMessage: ""});
    this.forceUpdate();
  }

  render(){
    return(
      <View style={styles.container}>
        <View style= {styles.grid}>
          <View style= {styles.row}>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(0)}
              >
                <Entypo
                  name= {this.chooseItemIcon(0)}
                  size= {50}
                  color= {this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(1)}
              >
                <Entypo
                  name= {this.chooseItemIcon(1)}
                  size= {50}
                  color= {this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(2)}
              >
                <Entypo
                  name= {this.chooseItemIcon(2)}
                  size= {50}
                  color= {this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style= {styles.row}>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(3)}
              >
                <Entypo
                  name= {this.chooseItemIcon(3)}
                  size= {50}
                  color= {this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(4)}
              >
                <Entypo
                  name= {this.chooseItemIcon(4)}
                  size= {50}
                  color= {this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(5)}
              >
                <Entypo
                  name= {this.chooseItemIcon(5)}
                  size= {50}
                  color= {this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style= {styles.row}>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(6)}
              >
                <Entypo
                  name= {this.chooseItemIcon(6)}
                  size= {50}
                  color= {this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(7)}
              >
                <Entypo
                  name= {this.chooseItemIcon(7)}
                  size= {50}
                  color= {this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style= {styles.item}>
              <TouchableOpacity
                onPress = {() => this.drawItem(8)}
              >
                <Entypo
                  name= {this.chooseItemIcon(8)}
                  size= {50}
                  color= {this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style= {styles.winMess}>
          {this.state.winMessage}
        </Text>
        <TouchableOpacity style= {styles.button}
          onPress = {this.resetGame}
        >
          <Text style= {styles.btntxt}>
            Reset Game
          </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  grid: {},

  row: {
    flexDirection: "row",
  },

  item: {
    borderWidth: 2,
    padding: 30,
    borderColor: "#000",
  },

  winMess: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",

  },

  button: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    backgroundColor: "#8B78E6"

  },

  btntxt: {
    fontWeight: "bold",
    fontSize: 15,
  }

})

