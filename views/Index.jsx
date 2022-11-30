const React = require("react");
class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <h1>Captain's Log</h1>
        <nav>
          <a href="/logs/new">New Log Entry</a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key="log">
                <a href={`/logs/${log._id}`}>{log.title}</a>
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
      </div>
    );
  }
}
module.exports = Index;
