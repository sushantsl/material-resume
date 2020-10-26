import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconText from './components/IconText';
import profileImage from "./profile.jpg"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WorkExperience from './components/WorkExperience';
import MorneauShepellLogo from "./images/morneau-shepell-logo.png"
import TailormanLogo from "./images/tailorman-logo.png"
import HoneywellLogo from "./images/honeywell-logo.png"
import AmadeusLogo from "./images/amadeus-logo.png"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10px",
    backgroundColor: "#607d8b"
  },
  paper: {
    padding: "5px",
    marginBottom: "10px"
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
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Paper className={classes.paper} elevation={3}>
          <Grid container direction="column" alignItems="center" justify="center">
            <Grid item>
              <Avatar className={classes.avatar} alt="Profile Image" src={profileImage} />
            </Grid>
            <Grid item><Typography variant="h4">Sushant S. Lokhande</Typography></Grid>
            <Grid item><Typography variant="h6">Senior Software Developer</Typography></Grid>
            <Grid item><Typography variant="body" color="textSecondary">Toronto, ON, Canada</Typography></Grid>
          </Grid>
          <Box className={classes.divider}>
            <Divider variant="middle" />
          </Box>
          <Grid container direction="row" alignItems="center" justify="space-around">
            <Grid item>
              <IconText icon={PhoneIphoneIcon} text="+1 437 983 3989" />
            </Grid>
            <Grid item>
              <IconText icon={LinkedInIcon} text="www.linkedin.com/in/sushant-lokhande" />
            </Grid>
            <Grid item>
              <IconText icon={MailOutlineIcon} text="sushant.sl@gmail.com" />
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h5" paragraph>Work Experience</Typography>
          <Grid container direction="row" alignItems="flex-start" justify="space-evenly" spacing={2}>
            <Grid item>
              <WorkExperience title="Senior Software Developer"
                location="Toronto, ON, Canada"
                duration="Sep 2020 - Present"
                logo={MorneauShepellLogo}
                company="Morneau Shepell Ltd."
                bullets={["Front-end developer working on the mobile-friendly Financial Well Being Web Application",
                  "Responsible for delivery of code based on Figma screen mockups for desktop and mobile views",
                  "Tech Stack: React.js, Material-UI, Storybook"]}
              />
            </Grid>
            <Grid item>
              <WorkExperience title="Manager - Technology"
                location="Bengaluru, KA, India"
                duration="Oct 2019 - Jun 2020"
                logo={TailormanLogo}
                company="Camden Apparel Solutions Pvt. Ltd."
                bullets={["Software Engineering Manager and hands-on developer",
                  "Worked on Web Applications for In-Store operations (Order Workflow Management, Customer Service), Factory operations (Order Fulfilment) and global consumer-facing e-commerce website.",
                  "Tech Stack: React.js, JavaScript, Node.js, MongoDB, PostgreSQL, AWS"]}
              />
            </Grid>
            <Grid item>
              <WorkExperience title="Tech Lead"
                location="Bengaluru, KA, India"
                duration="Jul 2019 - Oct 2019"
                logo={HoneywellLogo}
                company="Honeywell Technology Solutions Labs India"
                bullets={[" Led a team of 8 software developers and testers as a Scrum Master, following the Scaled Agile Framework, and helped with the planning and execution of Program Increments",
                  "Implemented new Node.js server-side modules enhancing communication with external components and products using REST APIs and TCP/IP",
                  "Tech Stack: React.js, Node.js, JavaScript (ES6), HTML5, CSS3"]}
              />
            </Grid>
            <Grid item>
              <WorkExperience title="Senior Software Engineer"
                location="Bengaluru, KA, India"
                duration="Nov 2011 - Dec 2016"
                logo={AmadeusLogo}
                company="Amadeus Software Labs India"
                bullets={["Owned several key components of the microservices based Hotel Booking Engine",
                  "Collaborated with cross-continental teams and Product Management through virtual meets and travel to refine requirements and realise the product roadmap",
                  "Tech Stack: C++, Linux, SQL, Distributed Systems"]}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
