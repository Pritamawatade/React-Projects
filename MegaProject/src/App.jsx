import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log("hi");

  return (
    <>
      <h1>A blog with me </h1>
    </>
  );
}

export default App;