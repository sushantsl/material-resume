import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';
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
        margin: "auto",
        height: 90,
        width: "calc(70%)",
        padding: 10,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
        },
    },
    icon: {
        color: "#0E76A8",
        margin: "5px"
    },
    chipContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function WorkExperience(props) {
    const classes = useStyles();

    const technologies = props.techStack.map((tech, idx) => (<Chip color="primary" key={idx} label={tech} />));
    return (
        <Card className={classes.root} elevation={0}>
            <CardHeader
                title={props.title}
                subheader={props.duration}
            />
            <Box className={classes.logo} display="flex" justifyContent="center" alignItems="center">
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
            <IconText icon={LocationCityIcon} text={props.location} textColor="textSecondary" position="center" />
            <div className={classes.chipContainer}>
                {technologies}
            </div>
            <CardContent>
                {props.bullets.map((item, idx) => <Typography align="justify" paragraph>{item}</Typography>)}
            </CardContent>
            <Hidden smUp>
                <Divider fullWidth />
            </Hidden>
        </Card>
    );
}