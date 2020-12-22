import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { changeCount, changePage, generatePage } from '../../actions/getPoke'
import { TablePagination } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paginator: {
    color: '#fff'
  }
}))

export const Paginator = () => {
  const classes = useStyles()
  const count = useSelector(state => state.paginator.count)
  const page = useSelector(state => state.paginator.page)
  const dispatch = useDispatch()
  const max = useSelector(state => state.pokemon.count)

  const handleChangeRowsPerPage = (event) => {
    dispatch(changeCount(parseInt(event.target.value, 10)))
  }

  const handleChangePage = async (event, newPage) => {
    await dispatch(changePage(newPage))
    dispatch(generatePage(newPage, count))
  }

  return (
    <TablePagination
      className={classes.paginator}
      component="div"
      count={max}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={count}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )
}
