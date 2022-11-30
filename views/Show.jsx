const React = require("react");
const DefaultLayOut = require("./layouts/Default");

class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <DefaultLayOut key="log">
        <a href="./" style={{ color: "blueviolet" }}>
          Home
        </a>
        <h2>Show Page</h2>
        <p>The {log.title}</p>
        <p>{log.entry}</p>
        {log.shipIsBroken ? "Ship has Mechanical Failure" : "Ahoy, Mateys!"}
        <br />
        {log.timestamps}
      </DefaultLayOut>
    );
  }
}

module.exports = Show;
