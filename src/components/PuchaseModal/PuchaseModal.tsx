import React, { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  createStyles,
  DialogContentText,
  DialogActions,
  Theme,
} from "@material-ui/core";
import { useTime } from "../../hooks/useTime";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
    },
  })
);
const PurchaseModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { time, startTime, stopTime } = useTime();
  const handleClickOpen = () => {
    setOpen(true);
    startTime();
  };

  const handleClose = () => {
    setOpen(false);
    stopTime();
  };

  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Purchase
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="purchase-dialog-title"
        aria-describedby="purchase-dialog-description"
      >
        <DialogTitle id="purchase-dialog-title">{"Purchase"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="purchase-dialog-description">
            Please pay as below bank account image in 1 minute.
          </DialogContentText>
          <img
            className={classes.image}
            src="https://img.online-station.net/caster/_content/2018/0305/1520243033.jpg"
            alt="bank-account"
          />
          <DialogContentText id="purchase-dialog-description">
            Remaining Time :{time} sec
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={time > 0} onClick={handleClickOpen} color="primary">
            Try again
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
export default PurchaseModal;
