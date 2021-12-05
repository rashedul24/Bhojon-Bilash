import "./App.css";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";

function App() {
  return (
    <div className="site-bg">
      {/* component call */}
      <Header></Header>
      <Item></Item>
    </div>
  );
}

export default App;
