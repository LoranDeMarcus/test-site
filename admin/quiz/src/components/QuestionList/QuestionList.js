import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'

const QuestionList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="Вопрос" />
        <TextField source="Ответ 1" />
        <TextField source="Ответ 2" />
        <TextField source="Ответ 3" />
        <TextField source="Ответ 4" />
        <TextField source="Правильный ответ" />
        <EditButton basepath="/questions" />
        <DeleteButton basepath="questions" />
      </Datagrid>
    </List>
  )
}

export default QuestionList
