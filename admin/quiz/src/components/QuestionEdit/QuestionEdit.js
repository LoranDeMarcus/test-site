import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const QuestionEdit = (props) => {
  return (
    <Edit title='Edit question' {...props}>
      <SimpleForm>
        <TextInput name='id' disabled source='id' />
        <TextInput name='title' source='title' />
        <TextInput name='body' multiline source='body' />
      </SimpleForm>
    </Edit>
  )
}

export default QuestionEdit
