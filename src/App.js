import "./App.css";
import Header from "./component/Header.jsx";
import Item from "./component/Item.jsx";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          first
          twoButton="true"
        />
        <Item
          title="Model S"
          desc="Starting at $69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="Existing Inventory"
          rightBtnLink=""
          twoButton="true"
        />
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="Existing Inventory"
          rightBtnLink=""
          twoButton="true"
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="Existing Inventory"
          rightBtnLink=""
          twoButton="true"
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButton="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButton="true"
        />
        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="SHOP NOW"
          leftBtnLink=""
          rightBtnTxt=""
          rightBtnLink=""
          twoButton=""
        />
      </div>
    </div>
  );
}

export default App;
