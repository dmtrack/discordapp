import { Server } from "./Server";

const ServerList = ({ servers = [] }) => {
  return (
    <>
      <div>
        {servers.length ? (
          servers.map((server) => <Server props={server} key={server.imdbID} />)
        ) : (
          <p>Nothing found</p>
        )}
      </div>
    </>
  );
};

export { ServerList };
