import React from "react";
import {AppBar,Badge,Button,Container,IconButton,ImageList,ImageListItem,InputBase,TextField,Toolbar,Typography,} from "@mui/material";
import ImagesData from "./Images.json";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PublicIcon from "@mui/icons-material/Public";
const Project = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          {/* Camera Icon */}
          <IconButton edge="start" color="inherit" aria-label="camera">
            <CameraAltIcon />
          </IconButton>

          {/* App Title */}
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Dev's Photography
          </Typography>

          {/* Search Bar */}
          <div style={{ position: "relative", marginRight: 16 }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search Photos"
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                paddingLeft: 8,
                paddingRight: 8,
                width: 150,
              }}
            />
          </div>

          {/* Notifications Icon (optional) */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* User Profile Icon */}
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 8, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "800", fontStyle: "italic" }}
        >
          THE WORLD HERE IS FAR BETTER THAN WHAT YOU SEE!{" "}
          <PublicIcon sx={{ marginRight: 1 }} color="success" />
        </Typography>

        <Typography sx={{ marginTop: "2px", fontWeight: "500" }}>
          If you wanna see the magic of this world please fill below form for
          any invite requests....!
        </Typography>
      </Container>

      <Container>
        <ImageList cols={3} rowHeight={"auto"}>
          {ImagesData.map((imageObj) => (
            <ImageListItem cols={1} key={imageObj.id}>
              <img
                src={imageObj.img}
                alt={imageObj.title}
                sx={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <center>
        <Container>
          <Typography variant="h4">Contact Form</Typography>
          <form>
            <TextField
              type="text"
              style={{ width: "500px", margin: "5px" }}
              label="Name"
              placeholder="Name"
              variant="outlined"
            />
            <br />
            <TextField
              type="email"
              style={{ width: "500px", margin: "5px" }}
              label="Email"
              placeholder="Email"
              variant="outlined"
            />
            <br />
            <TextField
              type="text"
              style={{ width: "500px", margin: "5px" }}
              label="Proposal"
              placeholder="Proposal"
              variant="outlined"
            />
            <br />
            <TextField
              type="text"
              style={{ width: "500px", margin: "5px" }}
              label="Address"
              placeholder="Address"
              variant="outlined"
            />
            <br />
            <Button variant="contained" color="secondary">
              SUBMIT
            </Button>
          </form>
        </Container>
      </center>
    </div>
  );
};

export default Project;
