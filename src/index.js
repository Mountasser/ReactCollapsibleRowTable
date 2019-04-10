import ReactDOM from "react-dom";
import React, { Component } from "react";
import Collapsible from "./collapse";
import "./index.css";
const triggerSiblingExample = () => (
  <div className="Collapsible__custom-sibling">
    This is a sibling to the trigger which wont cause the Collapsible to open!
  </div>
);

class Main extends Component {
  constructor(props) {
    super(props);
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

ReactDOM.render(<Main />, document.getElementById("root"));
