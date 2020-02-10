import React from "react";
import ReactDOM from "react-dom";

// All the different props we pass to the component
interface AppProps {
  // Making color optional.
  color?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

ReactDOM.render(<App color="red" />, document.querySelector("#root"));
