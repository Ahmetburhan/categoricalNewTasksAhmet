import React from "react";
import "../components/input.css";

import { Button, Jumbotron, Container } from "reactstrap";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputfield: "",
      inputs: [
        { text: "eat apple", key: 213123123 },
        { text: "buy i mac", key: 242525223534 }
      ]
    };
  }

  handleClick = e => {
    e.preventDefault();

    if (this.state.inputfield !== "") {
      var newItem = {
        text: this.state.inputfield,
        key: Date.now()
      };
    }
    this.setState((prevState, props) => {
      return {
        inputs: prevState.inputs.concat(newItem)
      };
    });
  };

  handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      inputfield: e.target.value
    });
  };

  handleRemove = each => {
    console.log("todo", each.key);
    // Filter all todos except the one to be removed
    const remainder = this.state.inputs.filter(todo => {
      if (todo.key !== each.key) return todo;
    });
    this.setState({
      inputs: remainder
    });
    console.log(remainder);
  };

  render() {
    const arrofTodos = this.state.inputs && this.state.inputs;
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1>Please input your data</h1>

            <form onSubmit={this.handleClick}>
              {/* <label>Input Here:</label> */}
              <input
                name="input1"
                className="textbox"
                placeholder="Add a new task"
                onChange={this.handleChange}
              />
              <Button color="success" type="submit">
                Submit
              </Button>
            </form>
            <ul>
              {arrofTodos.map((todo, id) => {
                return (
                  <li key={id}>
                    {id + 1}. {todo.text.toUpperCase()}{" "}
                    <Button
                      color="danger"
                      size="sm"
                      id="round"
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.handleRemove(todo)}
                    >
                      X
                    </Button>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
