const React = require("react");
class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div key="log">
        <a href="./">Home</a>
        <h2>Show Page</h2>
        <p>The {log.title}</p>
        <p>{log.entry}</p>
        {log.shipIsBroken
          ? "Ship is Experiencing Mechanical Failure"
          : "Ahoy Mateys!"}
        <br />
        {log.timestamps}
      </div>
    );
  }
}
module.exports = Show;
