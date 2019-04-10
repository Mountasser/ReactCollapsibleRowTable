import ReactDOM from "react-dom";
import React, { Component } from "react";
import Collapsible from "./collapse";
import "./index.css";
const triggerSiblingExample = () => (
  <div className="Collapsible__custom-sibling">
    This is a sibling to the trigger which wont cause the Collapsible to open!
  </div>
);

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: ""
    }));
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <Collapsible
          trigger="You can set a custom trigger tag name."
          triggerTagName="div"
        >
          <p>
            Use the <code>`triggerTagName`</code> prop to set the trigger
            wrapping element.
          </p>
          <p>
            Defaults to <code>span</code>.
          </p>
        </Collapsible>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
