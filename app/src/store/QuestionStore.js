import { makeAutoObservable } from 'mobx'

export default class QuestionStore {
  constructor() {
    this._questions = [
      {
        id: 1,
        name: 'Вопрос 1'
      },
      {
        id: 2,
        name: 'Вопрос 2'
      }
    ]
    makeAutoObservable(this)
  }

  setQuestion(questions) {
    this._questions = questions
  }

  get question() {
    return this._questions
  }
}
