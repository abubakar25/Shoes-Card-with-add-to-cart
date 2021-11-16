import "./App.css";
import ShoesCard from "./ShoesCard";
import shoe1 from "../src/images/shoe1.png";
import shoe2 from "../src/images/shoe2.png";
import shoe3 from "../src/images/shoe3.png";
import shoe4 from "../src/images/shoe4.png";
import Box from "@mui/material/Box";

function App(props) {
  const shoesArray = [
    {
      title: "Nike Original 1",
      price: "$385",
      colorqty: "3 colors",
      image: shoe4,
    },
    {
      title: "Nike Original 2",
      price: "$245",
      colorqty: "2 colors",
      image: shoe1,
    },
    {
      title: "Nike Original 3",
      price: "$215",
      colorqty: "5 colors",
      image: shoe2,
    },
    {
      title: "Nike Original 4",
      price: "$385",
      colorqty: "9 colors",
      image: shoe3,
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(410px, 1fr))",
          gridTemplateRows: "200px",
          gridAutoRows: "200px",
        }}
      >
        {shoesArray.map((items) => (
          <ShoesCard
            title={items.title}
            price={items.price}
            colorqty={items.colorqty}
            image={items.image}
          />
        ))}
        {/* <ShoesCard
          title={"Nike Original 2"}
          price={"$385"}
          colorqty={"3 colors"}
          image={homeShoe}
        />
        <ShoesCard
          title={"Nike Original 2"}
          price={"$195"}
          colorqty={"4 colors"}
          image={shoe1}
        />
        <ShoesCard
          title={"Nike Original 3"}
          price={"$276"}
          colorqty={"5 colors"}
          image={shoe2}
        />
        <ShoesCard
          title={"Nike Original 4"}
          price={"$285"}
          colorqty={"2 colors"}
          image={shoe3}
        /> */}
      </Box>
    </Box>
  );
}

export default App;
