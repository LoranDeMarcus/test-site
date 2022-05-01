import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const QuestionCreate = (props) => {
  return (
    <Create title='Create question' {...props}>
      <SimpleForm>
        <TextInput name='title' source='title' />
        <TextInput name='body' multiline source='body' />
      </SimpleForm>
    </Create>
  )
}

export default QuestionCreate
