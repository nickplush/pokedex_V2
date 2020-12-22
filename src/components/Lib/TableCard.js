import React, { useState } from 'react'
import {
  Button, Card, CardContent, CardHeader, CardMedia
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { Types } from './Types'
import { PokemonInfo } from '../../modals/PokemonInfo'
import { makeStyles } from '@material-ui/core/styles'
import { object } from 'prop-types'
import { useSelector } from 'react-redux'
import { CardButton } from './CardButton'

const useStyles = makeStyles((theme) => ({
  label: {
    background: '#616161',
    borderRadius: 10,
    margin: 10
  },
  media: {
    height: theme.spacing(40)
  },
  button: {
    marginTop: 10
  },
  title: {
    color: 'white'
  },
  dialog: {
    background: '#616161',
    width: theme.spacing(60)
  },
  icon: {
    background: '#d4d4d4',
    borderRadius: 5,
    margin: 5,
    height: 'min-content'
  },
  infoConteiner: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    background: '#5f1c1c',
    padding: 10,
    color: 'white'
  },
  check: {
    background: 'red'
  }

}))

const TableCard = ({ data }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const isAuth = useSelector(state => state.token)
  const renderContent = () => {
    switch (Boolean(isAuth)) {
      case true:
        return <CardButton pokeId={data.id}/>
      default:
        return null
    }
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Grid item xs={12} sm={2}>
      <Card className={classes.label}>
        { renderContent() }
          <CardMedia
            className={classes.media}
            image={data.sprites.other['official-artwork'].front_default}
            title="lorem ipsum"
          />
          <CardHeader title={data.name} className={classes.title}/>
          <CardContent>
            <Types types={data.types}/>
            <Button variant="contained" onClick={handleOpen} className={classes.button}>Learn more</Button>
            <PokemonInfo open={open} close={handleClose} data={data} classes={classes}/>
          </CardContent>
      </Card>
    </Grid>
  )
}
TableCard.propTypes = {
  data: object
}

export default TableCard
