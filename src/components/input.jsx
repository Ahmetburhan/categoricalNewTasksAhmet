import React from "react";
import "../components/input.css";

import { Button, Jumbotron, Row, Col, Container } from "reactstrap";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputfield: "",
      catinput: "",
      toggle: "true",
      selectedCat: "",
      selectedInputs: [
        { text: "apple", key: 213123123 },
        { text: "orange", key: 242525223534 }
      ],
      inputs: [
        { text: "apples", key: 213123123 },
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
  ///////////////Category functions add remove select
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

  selectCategory = catalog => {
    console.log("catalog here", catalog);
    const remainder = this.state.categories.filter(cat => {
      if (cat.catName == catalog) return cat;
    });
    console.log("remcat", remainder[0].inputs);
    this.setState({
      toggle: false,
      selectedCat: catalog,
      inputs: remainder[0].inputs
    });
    console.log("inputs", this.state.inputs);
  };

  handleRemoveCat = each => {
    console.log("todo", each);
    // Filter all todos except the one to be removed
    const remainder = this.state.categories.filter(cat => {
      if (cat.catName !== each) return cat;
    });
    console.log(remainder);
    this.setState({
      categories: remainder
    });
    // console.log(remainder);
  };
  /////////////////////////
  handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      inputfield: e.target.value
    });
  };

  handleRemove = each => {
    console.log("list item", each);
    // Filter all todos except the one to be removed
    const remainder = this.state.inputs.filter(todo => {
      console.log("todo here", todo);
      if (todo.text !== each.text) return todo;
    });
    this.setState({
      inputs: remainder
    });
    console.log(remainder);
  };

  render() {
    const remainder = this.state.categories[0];
    const listofTodos = this.state.toggle
      ? remainder.inputs
      : this.state.inputs;

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
                  {listofTodos.map((todo, id) => {
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
