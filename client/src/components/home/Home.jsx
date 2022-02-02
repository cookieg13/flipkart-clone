import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import { useEffect } from "react";

//import { products } from "../../constants/data";
import { getProducts as listProducts } from '../../redux/actions/productActions'


const useStyle = makeStyles(theme => ({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  leftWrapper: {
    width: "83%",
    [theme.breakpoints.down('md')]: {
      width: "100%"
    }
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
}));

const Home = () => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  const { products } = useSelector(state => state.getProducts)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          {/* left component  */}
          <Box className={classes.leftWrapper}>
            <Slide timer={true} title="Deal of the Day" products={products} />
          </Box>
          {/* right component  */}
          <Box className={classes.rightWrapper}>
            <img src={adURL} style={{ width: 230, height: "auto" }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} products={products} title="Discounts for You" />
        <Slide timer={false} products={products} title="Suggested Items" />
        <Slide timer={false} products={products} title="Top Selection" />
        <Slide timer={false} products={products} title="Recommended Items" />
        <Slide timer={false} products={products} title="Bestsellers" />
      </Box>
    </div>
  );
};

export default Home;
