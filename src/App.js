

import ItemListContainer from "./components/navBar/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Central Urbana"} />
    </div>
  );
}

export default App;
