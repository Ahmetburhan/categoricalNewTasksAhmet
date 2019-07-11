import React from "react";
import "../components/input.css";

import { Button, Jumbotron, Row, Col, Container } from "reactstrap";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputfield: "",
      catinput: "",
      selectedInputs: [
        { text: "apple", key: 213123123 },
        { text: "orange", key: 242525223534 }
      ],
      inputs: [
        { text: "apple", key: 213123123 },
        { text: "orange", key: 242525223534 }
      ],
      categories: [
        {
          catName: "groceries",
          inputs: [
            { text: "apple", key: 213123123 },
            { text: "orange", key: 242525223534 }
          ]
        },
        {
          catName: "tools",
          inputs: [
            { text: "hummer", key: 21313423123 },
            { text: "stone", key: 24252645223534 }
          ]
        }
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

  addCategory = e => {
    e.preventDefault();

    if (this.state.inputfield !== "") {
      var newItem = {
        catName: this.state.inputfield,
        inputs: []
      };
    }
    this.setState((prevState, props) => {
      return {
        categories: prevState.categories.concat(newItem)
      };
    });
  };

  selectCategory = cat => {
    cat.preventDefault();

    console.log("cat here", cat);

    this.setState((prevState, props) => {
      return {
        categories: prevState.categories.concat(newItem)
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
    const remainder = this.state.categories.filter(todo => {
      if (todo.key !== each.key) return todo;
    });
    this.setState({
      inputs: remainder
    });
    console.log(remainder);
  };

  // handleRemoveCat = each => {
  //   console.log("todo", each.key);
  //   // Filter all todos except the one to be removed
  //   const remainder = this.state.inputs.filter(todo => {
  //     if (todo.key !== each.key) return todo;
  //   });
  //   this.setState({
  //     inputs: remainder
  //   });
  //   console.log(remainder);
  // };

  render() {
    const arrofTodos = this.state.inputs && this.state.inputs;
    const categories = this.state.categories && this.state.categories;
    // const inputs = this.state.categories && this.state.categories;

    const catMap = categories.map(each => each.catName);
    console.log("catMap", catMap);
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <Col auto id="catBox" class="boxStyle">
                <h6>Add or Remove Category by ID</h6>
                <form onSubmit={this.addCategory}>
                  {/* <label>Input Here:</label> */}
                  <input
                    name="input1"
                    className="textbox"
                    placeholder="Add a new Category"
                    onChange={this.handleChange}
                  />
                  <Button color="success" type="submit">
                    ADD
                  </Button>
                </form>
                <ul>
                  {catMap.map((todo, id) => {
                    return (
                      <li key={id} onClick={() => this.selectCategory(todo)}>
                        {id + 1}. {todo.toUpperCase()}{" "}
                        <Button
                          color="danger"
                          size="sm"
                          id="round"
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.handleRemoveCat(todo)}
                        >
                          X
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col auto id="itemBox">
                <h6>Please input your data</h6>

                <form onSubmit={this.handleClick}>
                  {/* <label>Input Here:</label> */}
                  <input
                    name="input2"
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
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
