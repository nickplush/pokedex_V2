import React from 'react'
import { Button, Dialog, DialogContent, Grid, Typography } from '@material-ui/core'
import { bool, func, object } from 'prop-types'

export const PokemonInfo = ({
  open,
  close,
  data,
  classes
}) => {
  return (
    <Dialog open={open}>
      <DialogContent dividers className={classes.dialog}>
        <Grid container spacing={12}>
          <Grid item spacing={4}>
            <div className={classes.icon}>
              <img src={data.sprites.front_default}/>
            </div>
            <div className={classes.icon}>
              <img src={data.sprites.back_default}/>
            </div>
          </Grid>
          <Grid spacing={4}>
            <div className={classes.infoConteiner}>
              <Typography variant={'h6'}>№:{data.id}</Typography>
              <Typography variant={'h5'}>Name: {data.name}</Typography>
              <Typography>weight: {data.weight} </Typography>
            </div>
          </Grid>
        </Grid>
        <Button variant="contained" className={classes.button} onClick={close} >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
PokemonInfo.propTypes = {
  close: func,
  open: bool,
  data: object,
  classes: object
}
