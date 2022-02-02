import Carousel from "react-material-ui-carousel";
import { bannerData } from '../../constants/data';
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    },
    top: {
        marginTop: 10
    }


}));
const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel
            //props
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    background: '#FFFFFF',
                    color: '#494949',
                    borderRadius: 0
                }
            }}
            className={classes.top}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} />
                ))
            }
        </Carousel>
    );
};

export default Banner;
