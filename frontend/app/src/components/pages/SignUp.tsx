import React, { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';

import { AuthContext } from '../../AuthContext';
import { signUp } from '../../lib/api/auth';
import { SignUpParams, User } from '../../type/Login_attestation';
import AlertMessage from '../utils/AlertMessage';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(6),
  },
  submitBtn: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    textTransform: 'none',
  },
  header: {
    textAlign: 'center',
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 400,
  },
}));

const SignUp: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const params: SignUpParams = {
      name,
      email,
      password,
      passwordConfirmation,
    };

    try {
      const res = await signUp(params);

      if (res.status === 200) {
        // アカウント作成と同時にログインさせてしまう
        Cookies.set('_access_token', res.headers['access-token'] || '');
        Cookies.set('_client', res.headers.client || '');
        Cookies.set('_uid', res.headers.uid || '');

        setIsSignedIn(true);
        setCurrentUser(res.data as User);

        navigate('/');

      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      setAlertMessageOpen(true);
    }
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="アカウント新規作成" />
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="名前"
              value={name}
              margin="dense"
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="メールアドレス"
              value={email}
              margin="dense"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="パスワード"
              type="password"
              value={password}
              margin="dense"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="確認用パスワード"
              type="password"
              value={passwordConfirmation}
              margin="dense"
              autoComplete="current-password"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="default"
              disabled={
                !!(!name || !email || !password || !passwordConfirmation)
              }
              className={classes.submitBtn}
              onClick={handleSubmit}
            >
              新規作成
            </Button>
          </CardContent>
        </Card>
      </form>
      <AlertMessage
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="入力したメールアドレスかパスワードをもう一度確認してください"
      />
    </>
  );
};

export default SignUp;
