const React = require("react");
class Edit extends React.Component {
  render() {
    return (
      <div>
        <a href="/logs">Home</a>
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
          <input type="submit" value={`edit ${this.props.log.title}`} />
        </form>
      </div>
    );
  }
}
module.exports = Edit;
