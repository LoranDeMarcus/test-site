import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import QuestionList from './components/QuestionList/QuestionList'
import QuestionCreate from './components/QuestionCreate/QuestionCreate'
import QuestionEdit from './components/QuestionEdit/QuestionEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='questions' list={QuestionList} create={QuestionCreate} edit={QuestionEdit} />
    </Admin>
  )
}

export default App
