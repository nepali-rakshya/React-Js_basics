import Jokes from "./Jokes";
import jokesData from "./jokesData";

// function App() {
//   return (
//     <div className="App">
//       <h1>JOKES COLLECTION</h1>
//       <Jokes
//         setup="A pun, a play on words, and a limerick walk into a bar."
//         punchline="No joke"
//         likes={10}
//         isPun={true}
//       />
//       <Jokes
//         setup="How do mathematicians scold their children?"
//         punchline="If I've told you n times, I've told you n+1 times…"
//         likes={10}
//       />
//       <Jokes
//         setup="You're late!” she yells. “You said you'd be home by 11:45!"
//         punchline="“Actually,” the mathematician replies coolly, “I said I'd be home by a quarter of 12.”"
//         likes={10}
//       />
//       <Jokes
//         setup="Did you hear about the mathematician who's afraid of negative numbers?"
//         punchline="He will stop at nothing to avoid them."
//         likes={10}
//       />
//     </div>
//   );
// }

const App = () => {
  const jokesElement = jokesData.map((jokes) => {
    return <Jokes setup={jokes.setup} punchline={jokes.punchline} />;
  });

  return <div>{jokesElement}</div>;
};

export default App;
