import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 8391, name: "Exercise for 30 minutes.", completed: false },
    { id: 5271, name: "Drink 4 Liters of water", completed: true },
    { id: 7825, name: "Check your emails", completed: false },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
