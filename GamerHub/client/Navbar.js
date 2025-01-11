import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            GamerHub
          </Link>
        </Typography>
        {isAuthenticated ? (
          <>
            <Link to="/games" className={classes.link}>
              <Button color="inherit">Игры</Button>
            </Link>
            <Link to="/groups" className={classes.link}>
              <Button color="inherit">Группы</Button>
            </Link>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Button color="inherit" onClick={logout}>
              Выйти
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" className={classes.link}>
              <Button color="inherit">Войти</Button>
            </Link>
            <Link to="/register" className={classes.link}>
              <Button color="inherit">Регистрация</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 