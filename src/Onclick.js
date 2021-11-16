import React from "react";
import homeShoe from "../src/images/homeShoe.png";
import shoe1 from "../src/images/homeShoe.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddToCart from "./AddToCart";

function ShoesCard(props) {
  const handleClick = (e) => {
    setShow({
      clicked: true,
    });
  };
  const [value, setValue] = React.useState(2);
  const [count, setCount] = React.useState(1);
  const [show, setShow] = React.useState(false);

  const plusMinusElement = (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",

        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <div>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button>{count}</Button>

          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </Box>
  );

  return (
    <Box sx={{ margin: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 390,
            height: 182,
            borderRadius: 10,
            backgroundColor: "#f1f3f5",
          },
        }}
      >
        <Paper elevation={3}>
          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "160px 220px",
                padding: "10px",
              }}
            >
              <Box>
                <img
                  src={props.image}
                  alt="tt"
                  width="190px"
                  height="208px"
                  style={{
                    transform: "translate(-55px, -20px) rotate(-30deg) ",
                  }}
                />
              </Box>
              <Box>
                <Box sx={{ fontWeight: "bold", fontSize: "29px" }}>
                  {props.title}
                </Box>
                <Box>
                  <Rating
                    sx={{ color: "black", paddingTop: "6px" }}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    color: "#e03131",
                    paddingTop: "6px",
                  }}
                >
                  {props.price}
                </Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#adb5bd",
                    paddingTop: "6px",
                  }}
                >
                  {props.colorqty}
                </Box>
                <Box
                  sx={{
                    width: "87px",
                    fontWeight: "bold",
                    fontSize: "20px",
                    textAlign: "center",
                    height: "37px",
                    boxShadow: "0px 10px -14px 14px #FFF",
                    borderRadius: "20px 0 25px 0",
                    float: "right",
                    backgroundColor: "#f8f9fa",
                  }}
                  onClick={handleClick}
                >
                  +
                </Box>
                {show.clicked ? <AddToCart /> : null}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default ShoesCard;
