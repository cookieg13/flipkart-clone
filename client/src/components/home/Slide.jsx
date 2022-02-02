import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Box, Typography, Button, Divider } from "@material-ui/core";
import Countdown from 'react-countdown';
import React from "react";
import { Link } from "react-router-dom";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles(theme => ({
  image: {
    height: 150,
  },
  component: {
    marginTop: 12,
    background: '#FFFFFF'
  },
  deal: {
    padding: '15px 20px',
    display: 'flex'
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineWeight: '32px',
    marginRight: 25
  },
  timer: {
    color: '#7f7f7f',
    marginLeft: 10,
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  button: {
    marginLeft: 'auto',
    background: '#2874f0',
    borderRadius: 2,
    fontSize: 13
  },
  text: {
    fontSize: 14,
    marginTop: 2
  },
  wrapper: {
    padding: '38px 15px'
  }
}));
const Slide = ({ timer, title, products }) => {
  const classes = useStyle();
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => {
    return <span className={classes.timer}>{hours}:{minutes}:{seconds} left</span>;
  }


  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {
          timer &&
          <>          <Box className={classes.timer}>
            <img src={timerURL} style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
          </Box>
            <Button variant="contained" color="primary" className={classes.button}>VIEW ALL</Button>
          </>
        }
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={10000}
        keyBoardControl={true}
        containerClass="carousel-container"
        showDots={false}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          products.map((item) => (
            <Link to={`product/${item.id}`}>
              <Box textAlign="center" className={classes.wrapper}>
                <img src={item.url} className={classes.image} />
                <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{item.title.shortTitle}</Typography>
                <Typography className={classes.text} style={{ color: 'green' }}>{item.discount}</Typography>
                <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{item.tagline}</Typography>
              </Box>
            </Link>


          ))
        }
      </Carousel>
    </Box>
  );
};

export default Slide;
