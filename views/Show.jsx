const React = require("react");
class Show extends React.Component {
  render() {
    const { log } = this.props.log;
    return (
      <div>
        <h2>Show Page</h2>
        <p>{title}</p>
        <br />
        <p>{entry}</p>
        {shipIsBroken ? "Ship Mechanical Failure" : "Ahoy Mateys!"}
        <br />
        {timestamps}
      </div>
    );
  }
}
module.exports = Show;
