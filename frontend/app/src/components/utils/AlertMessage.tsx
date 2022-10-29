import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

type AlertMessageProps = {
  open: boolean;
  setOpen: Function;
  severity: 'error' | 'success' | 'info' | 'warning';
  message: string;
};

function AlertMessage({ open, setOpen, severity, message }: AlertMessageProps) {
  const handleCloseAlertMessage = (
    e?: React.SyntheticEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') return;

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={handleCloseAlertMessage}
    >
      <Alert onClose={handleCloseAlertMessage} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertMessage;
