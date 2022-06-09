import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const QuestionCreate = (props) => {
  return (
    <Create title="Create question" {...props}>
      <SimpleForm>
        <TextInput name="Раздел" source="Раздел" />
        <TextInput name="Вопрос" source="Вопрос" />
        <TextInput name="Ответ 1" multiline source="Ответ 1" />
        <TextInput name="Ответ 2" multiline source="Ответ 2" />
        <TextInput name="Ответ 3" multiline source="Ответ 3" />
        <TextInput name="Ответ 4" multiline source="Ответ 4" />
        <TextInput name="Правильный ответ" multiline source="Правильный ответ" />
      </SimpleForm>
    </Create>
  )
}

export default QuestionCreate
