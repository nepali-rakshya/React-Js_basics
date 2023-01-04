import Contact from "./Contact";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Contact
        img="/img/singing.jpg"
        name="Mr. Humpty"
        phone="+977 9863215562"
        email="mr.humpty@gmail.com"
      />
      <Contact
        img="/img/singing.jpg"
        name="Mr. Dumpty"
        phone="+977 9863215562"
        email="mr.dumpty@gmail.com"
      />
      <Contact
        img="/img/singing.jpg"
        name="Mr. Headson"
        phone="+977 9863215562"
        email="mr.headson@gmail.com"
      />
      <Contact
        img="/img/singing.jpg"
        name="Mr. Glamor"
        phone="+977 9863215562"
        email="mr.glamor@gmail.com"
      />
    </div>
  );
};

export default App;
