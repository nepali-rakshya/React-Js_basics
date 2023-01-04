const Jokes = (props) => {
  return (
    <main style={{ width: "60%", border: "2px solid pink" }}>
      {props.setup && <h4>Setup: {props.setup}</h4>}
      <p>Punchline: {props.punchline}</p>
    </main>
  );
};

export default Jokes;
