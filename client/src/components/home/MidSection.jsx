import { imageURL } from "../../constants/data";
import { Box, makeStyles, Grid } from "@material-ui/core";
import clsx from 'clsx';

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    help: {
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        },
    }
}));
const MidSection = () => {
    const classes = useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} md={12} sm={12} xs={12} container className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={4} sm={4
                        }>
                            <img src={image} style={{ width: '100%' }} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={coronaURL} className={clsx(classes.wrapper, classes.help)} style={{ width: '100%' }} />
        </>
    )
}
export default MidSection;