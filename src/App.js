import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import profileImage from "./profile.jpg"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const useStyles = makeStyles((theme) => ({

  container: {
    padding: "0px"
  },
  paper: {
    padding: "5px",
  },
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    margin: "5px"
  },
  divider: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  boxMiddle: {
    alignItems: "center",
    display: "flex",
  },
  icon: {
    color: "#0E76A8",
    margin: "5px"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Paper className={classes.paper} elevation={3}>
          <Grid container direction="column" align="center" justify="center">
            <Grid item>
              <Avatar className={classes.avatar} alt="Profile Image" src={profileImage} />
            </Grid>
            <Grid item><Typography variant="h4">Sushant S. Lokhande</Typography></Grid>
            <Grid item> <Typography variant="h6">Senior Software Developer</Typography></Grid>
            <Grid item> <Typography variant="body" color="textSecondary">Toronto, ON, Canada</Typography></Grid>
          </Grid>
          <Box className={classes.divider}>
            <Divider variant="middle" />
          </Box>
          <Grid container direction="row" align="baseline" justify="space-around">
            <Grid item>
              <Box className={classes.boxMiddle}>
                <PhoneIphoneIcon className={classes.icon} />
                <Typography variant="body">+1 437 983 3989</Typography>
              </Box></Grid>
            <Grid item>
              <Box className={classes.boxMiddle}>
                <LinkedInIcon className={classes.icon} />
                <Typography variant="body">www.linkedin.com/in/sushant-lokhande</Typography>
              </Box></Grid>
            <Grid item>
              <Box className={classes.boxMiddle}>
                <MailOutlineIcon className={classes.icon} />
                <Typography variant="body">sushant.sl@gmail.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
