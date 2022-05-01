import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const QuestionList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
          <TextField source='id' />
          <TextField source='title' />
          <TextField source='body' />
          <EditButton basepath='/questions' />
          <DeleteButton basepath='questions' />
        </Datagrid>
    </List>
  )
}

export default QuestionList
