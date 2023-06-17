//£!  1. buat komponen memiliki hasil penambahan masing-masing.
//!  2. buat & gunakan Higher Order Component (HOC).

import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter counter={1} />
      <Counter counter={2} />
    </>
  );
}

export default App;
