import "./App.css";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import Notelist from "./components/Notelist";
import { NoteProvider } from "./context/NoteContext";

function App() {
  return (
    <NoteProvider>
      <div className="App">
        <Header />
        <h4>Organize your notes here !</h4>
        <Notelist />

        <NoteForm />
      </div>
    </NoteProvider>
  );
}

export default App;
