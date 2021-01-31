const ClientConsoleStyle = {
  backgroundColor: "black",
};

const TextStyle = {
  color: "white",
  textAlign: "center",
};

const ClientConsole = ({ playerID }) => {
  return (
    <div style={ClientConsoleStyle}>
      <h2 style={TextStyle}>Playing as [playerID: {playerID}]</h2>
    </div>
  );
};

export default ClientConsole;
