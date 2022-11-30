const React = require("react");
const DefaultLayOut = require("./layouts/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayOut key="logs">
        <a href="/logs" style={{ color: "blueviolet" }}>
          Home
        </a>

        <form action="/logs" method="POST">
          Title: <input type="text" name="title" /> <br />
          Entry: <input type="textarea" name="entry" /> <br />
          Ship is Broken: <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" value="Enter New Log" />
        </form>
      </DefaultLayOut>
    );
  }
}
module.exports = New;
