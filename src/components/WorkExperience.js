import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import IconText from './IconText';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 0,
        paddingTop: 200, // 16:9
        marginTop: '30'
    },
    logo: {
        height: 180,
        width: "calc(100 % - 40px)",
        padding: "20px",
        [theme.breakpoints.down('xs')]: {
            height: 90,
            width: "calc(100 % - 10px)",
            padding: "5px",
        },
    },
    icon: {
        color: "#0E76A8",
        margin: "5px"
    }
}));

export default function WorkExperience(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <IconText icon={LocationCityIcon} text={props.location} textColor="textSecondary" />
            <CardHeader
                title={props.title}
                subheader={props.duration}
            />
            <Box className={classes.logo} display="flex" alignItems="center">
                <CardMedia
                    component="img"
                    image={props.logo}
                    title={props.company}
                    alt="Company Logo"
                />
            </Box>
            <Typography variant="body" align="center" display="block" style={{
                fontWeight: "bold"
            }}>{props.company}</Typography>
            <CardContent>
                {props.bullets.map((item, idx) => <Typography paragraph>{item}</Typography>)}
            </CardContent>
        </Card>
    );
}