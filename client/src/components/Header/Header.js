import React from 'react'
import { Button, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#b71c1c',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderRadius: 3
  },
  lable: {
    color: '#ffffff'
  }
}))

const Header = () => {
  const classes = useStyles()
  const isAuth = Boolean(useSelector(state => state.token))
  console.log(isAuth)
  const renderContent = () => {
    switch (isAuth) {
      case false:
        return <Button href={'/auth/google'}>Login</Button>
      default:
        return (
          <div className={classes.root}>
            <Button href='/favorite'>favorite</Button>
            <Button href={'/api/logout'}>Log out</Button>
          </div>
        )
    }
  }
  return (
    <Toolbar className={classes.root}>
      <Link to={'/'}>
        <Typography variant="h4" className={classes.lable}>Pokedex</Typography>
      </Link>
      <div>{renderContent()}</div>
    </Toolbar>
  )
}

export default Header
