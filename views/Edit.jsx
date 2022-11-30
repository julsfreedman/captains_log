const React = require("react");
const DefaultLayOut = require("./layouts/Default");
class Edit extends React.Component {
  render() {
    return (
      <DefaultLayOut>
        <a href="/logs" style={{ color: "blueviolet" }}>
          Home
        </a>
        <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
          Title:{" "}
          <input type="text" name="title" defaultValue={this.props.log.title} />{" "}
          <br />
          Entry:{" "}
          <input
            type="textarea"
            name="entry"
            defaultValue={this.props.log.entry}
          />{" "}
          <br />
          Ship is Broken :{" "}
          {this.props.log.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <input type="submit" value={`Edit ${this.props.log.title}`} />
          <input type="submit" value={`Edit ${this.props.log.title}`} />
        </form>
      </DefaultLayOut>
    );
  }
}
module.exports = Edit;
