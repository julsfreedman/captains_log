const React = require("react");

class New extends React.Component {
  render() {
    return (
      <form action="/logs" method="POST">
        <input type="text" name="Log Title" />
        <br />
        <input type="textarea" name="Log Entry" />
        <br />
        <input type="checkbox" name="shipIsBroken" />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
module.exports = New;
