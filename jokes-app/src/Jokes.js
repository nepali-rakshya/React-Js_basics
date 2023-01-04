const Jokes = (props) => {
  return (
    <main style={{ width: "60%", border: "2px solid pink" }}>
      {/* {props.setup && <h4>Setup: {props.setup}</h4>} */}
      {/* <h4 style={{ display: props.setup ? "block" : "none" }}>
        Setup: {props.setup}
      </h4> */}
      {props.setup && (
        <h4 style={{ background: "lightpink" }}>Setup: {props.setup}</h4>
      )}
      <p>Punchline: {props.punchline}</p>
      <p>No of likes: {props.likes}</p>
      <p>It is pun: {props.isPun}</p>
    </main>
  );
};

export default Jokes;
