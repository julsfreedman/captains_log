const React = require("react");
const DefaultLayOut = require("./layouts/Default");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <DefaultLayOut title="Captain's Log">
        <h1>Captain's Log</h1>
        <nav>
          <a href="/logs/new" style={{ color: "blueviolet" }}>
            New Log
          </a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key="log">
                <a href={`/logs/${log._id}`} style={{ color: "blueviolet" }}>
                  {log.title}
                </a>
                <form action={`/logs/${log._id}/edit`} method="PUT">
                  <input type="submit" value="Edit" />
                </form>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayOut>
    );
  }
}
module.exports = Index;
