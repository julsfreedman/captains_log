const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div key="logs">
        <h1>
          <a href="/logs">Home</a>
        </h1>
        <form action="/logs" method="POST">
          <input type="text" name="Log Title" />
          <br />
          <input type="textarea" name="Log Entry" />
          <br />
          <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
module.exports = New;
