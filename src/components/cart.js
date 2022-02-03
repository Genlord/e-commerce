import React, { useState, useEffect } from "react";
import CartItems from "./cartItems";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import emptyCart from "../images/emptyCart.png";

export default function Cart(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 100,
      height: 40,
      marginTop: 10,
    },
    nopad: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    box: {
      backgroundColor: "#d0dae8",
      height: 263,
      width: 500,
      marginTop: 10,
      marginLeft: "34%",
      fontSize: 26,
      textAlign: "center",
    },
    cartColor: {
      backgroundColor: "#d0dae8",
    },
  }));

  const classes = useStyles();

  const [cardPrices, setCardPrices] = useState([
    100, 45, 78, 98, 300, 222, 443, 420,
  ]);

  const [cpuPrices, setCpuPrices] = useState([
    33, 600, 42, 150, 188, 239, 511, 375,
  ]);

  const [userPrice, setUserPrice] = useState(0);

  function addUserTotal() {
    setUserPrice(() =>
      props.items.reduce(
        (sum, item, index) => (sum = sum + item.price * props.countUser[index]),
        0
      )
    );
  }

  const sumTotal =
    props.count1 * cardPrices[0] +
    props.count2 * cardPrices[1] +
    props.count3 * cardPrices[2] +
    props.count4 * cardPrices[3] +
    props.count5 * cardPrices[4] +
    props.count6 * cardPrices[5] +
    props.count7 * cardPrices[6] +
    props.count8 * cardPrices[7] +
    props.countCpu1 * cpuPrices[0] +
    props.countCpu2 * cpuPrices[1] +
    props.countCpu3 * cpuPrices[2] +
    props.countCpu4 * cpuPrices[3] +
    props.countCpu5 * cpuPrices[4] +
    props.countCpu6 * cpuPrices[5] +
    props.countCpu7 * cpuPrices[6] +
    props.countCpu8 * cpuPrices[7] +
    userPrice;

  useEffect(() => {
    addUserTotal();
  }, [props.countUser]);

  if (props.countTotal > 0) {
    return (
      <div>
        <CartItems
          count1={props.count1}
          setCount1={props.setCount1}
          count2={props.count2}
          setCount2={props.setCount2}
          count3={props.count3}
          setCount3={props.setCount3}
          count4={props.count4}
          setCount4={props.setCount4}
          count5={props.count5}
          setCount5={props.setCount5}
          count6={props.count6}
          setCount6={props.setCount6}
          count7={props.count7}
          setCount7={props.setCount7}
          count8={props.count8}
          setCount8={props.setCount8}
          countArray={props.countArray}
          setCountArray={props.setCountArray}
          countCpu1={props.countCpu1}
          setCountCpu1={props.setCountCpu1}
          countCpu2={props.countCpu2}
          setCountCpu2={props.setCountCpu2}
          countCpu3={props.countCpu3}
          setCountCpu3={props.setCountCpu3}
          countCpu4={props.countCpu4}
          setCountCpu4={props.setCountCpu4}
          countCpu5={props.countCpu5}
          setCountCpu5={props.setCountCpu5}
          countCpu6={props.countCpu6}
          setCountCpu6={props.setCountCpu6}
          countCpu7={props.countCpu7}
          setCountCpu7={props.setCountCpu7}
          countCpu8={props.countCpu8}
          setCountCpu8={props.setCountCpu8}
          countCpuArray={props.countCpuArray}
          setCountCpuArray={props.setCountCpuArray}
          countUser={props.countUser}
          setCountUser={props.setCountUser}
          items={props.items}
        />
        <div className="totalWrap">
          <div className="total">
            Your Total is - ${sumTotal.toLocaleString()} <br></br>
            <Button
              variant="contained"
              color="primary"
              className={classes.root}
              onClick={() => console.log(userPrice)}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <Box className={`${classes.box} emptyCart`}>
        <img src={emptyCart} className="sadImg" />
      </Box>
    );
}
