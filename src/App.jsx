import "./App.css";
import Category from "./components/AddCategory/category";
import Restaurant from "./components/AddRestaurants/restaurant";
import Branch from "./components/AddBranches/branch";
import Order from "./components/ShowOrders/order";
import Menu from "./components/AddMenu/menu";

function App() {
  return (
    <div>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 m-3">
        <div>
          <Category />
        </div>
        <div>
          <Restaurant />
        </div>
        <div>
          <Branch />
        </div>
        <div>
          <Menu />
        </div>
      </div>
      <hr className="border border-dark" />
      <Order />
    </div>
  );
}

export default App;
