import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'

const QuestionList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="Question" />
        <TextField source="Answer 1" />
        <TextField source="Answer 2" />
        <TextField source="Answer 3" />
        <TextField source="Answer 4" />
        <TextField source="Right Answer" />
        <EditButton basepath="/questions" />
        <DeleteButton basepath="questions" />
      </Datagrid>
    </List>
  )
}

export default QuestionList
