import React from 'react'
import { Button, Typography } from '@material-ui/core'

const Label = () =>
  <div>
    <Typography variant="h3">This is the Pokemon library</Typography>
    <Button color={'secondary'} variant={'outlined'} href='lib'>forward to the pokemon!</Button>
  </div>
export default Label
