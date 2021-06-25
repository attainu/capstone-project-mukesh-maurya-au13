import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const StudentAnnounce = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  //style
  const useStyles = makeStyles({
    root: {
      maxWidth: 450,
    },
    media: {
      height: 100,
    },
  });

  const classes = useStyles();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      fetch("/api/v1/users/announcementPage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setData(result.announceList);
          console.log(result.announceList);
        });
    } else {
      history.push("/");
    }
  }, [userInfo, history]);

  return (
    <>
      {data.map((item, i) => {
        return (
          <div className="mb-5">
            <Card key={i} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i.pinimg.com/236x/bc/1d/f2/bc1df2e06ecd79f29ea45c86fbf95397.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item?.name}
                  </Typography>
                  <Typography variant="body2" component="p" color="textSecondary">
                    {item?.announcement}
                  </Typography>
                  <CardActions>
                    <div className="mx-auto my-3">
                      <Typography size="small" variant="h5">
                        {item?.designation}
                      </Typography>
                    </div>
                    <div>
                    <Typography size="small" color="textSecondary">
                      {item?.createdAt}
                    </Typography>
                    </div>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default StudentAnnounce;
