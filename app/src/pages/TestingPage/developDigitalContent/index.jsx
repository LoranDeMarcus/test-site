import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import Header from '../../../components/Header'

import { Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const DevelopDigitalContent = () => {
  const { control, register, reset, handleSubmit, formState: { errors } } = useForm()
  const [result, setResult] = useState()

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
    setResult(data)
    reset({})
  }

  const renderResult = () => {
    return Object.entries(result).map(([key, value]) => {
      return (
        <s.Result key={key}>{key}: <b>{value}</b></s.Result>
      )
    })
  }

  const handleReturn = () => {
    setResult(undefined)
  }

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <s.Tittle>
            Разработка и реализация цифрового образовательного контента
          </s.Tittle>
          {result
            ? (
              <>
                <s.ResultWrapper>
                  Результаты тестирования:
                  {renderResult()}
                </s.ResultWrapper>
                <Button type="button" onClick={handleReturn}>
                  Вернуться к тесту
                </Button>
              </>
            )
            : (
              <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <s.QuestionWrapper>
                  <s.Question>
                    1.	Цифровой образовательный контент это….
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="1"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="1" value="a" id="1_a">
                              Все обучающие материалы, адаптированные под цифровую образовательную среду.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="1" value="b" id="1_b">
                              Аудиовизуальный контент
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="1" value="c" id="1_c">
                              Любые оцифрованные учебные материалы
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    2.	Контент, обладающий возможностями установления различных форм интерактивного
                    взаимодействия пользователя с цифровым образовательным контентом: манипулирование
                    экранными объектами, линейная навигация, иерархическая навигация, обратная связь и т.д. – это….
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="2"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="2" value="a" id="2_a">
                              Мультимедийный контент
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="2" value="b" id="2_b">
                              Интерактивный контент
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="2" value="c" id="2_c">
                              Браузерная игра
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="2" value="d" id="2_d">
                              Интерактивная презентация
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    3.	Контент, представляющий собой синтез различных видов информации (текстовой,
                    графической, анимированной, звуковой и видео), при котором возможны различные способы
                    ее структурирования, интегрирования и представления – это…
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="3"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="3" value="a" id="3_a">
                              Интерактивный контент
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="3" value="b" id="3_b">
                              Мультимедийный контент
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="3" value="c" id="3_c">
                              Веб-ресурс
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="3" value="d" id="3_d">
                              Электронный учебник
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    4.	Система управления обучением, которая применяется для разработки, управления и
                    распространения учебных онлайн-материалов с обеспечением совместного доступа – это…
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="4"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="4" value="a" id="4_a">
                              LMS
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="4" value="b" id="4_b">
                              МООК
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="4" value="c" id="4_c">
                              Электронный курс
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    5.	К функциям системы управления обучением относятся (выберите все верные варианты):
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="5"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <RadioGroup value={value} onChange={onChange}>
                            <s.AnswerWrapper>
                              <Radio name="5" value="a" id="5_a">
                                Размещение учебных материалов
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="b" id="5_b">
                                Сбор образовательных данных
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="c" id="5_c">
                                Организация коммуникации
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="d" id="5_d">
                                Все вышеперечисленное
                              </Radio>
                            </s.AnswerWrapper>
                          </RadioGroup>
                        </>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    6.	К цифровым образовательным ресурсам относятся
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="6"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="6" value="a" id="6_a">
                              Графические, картографические материалы, звукозаписи, деловая графика.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="b" id="6_b">
                              Текстовые бумаги
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="c" id="6_c">
                              Представленные в цифровом формате фото, видео, видеокурсы, статические и динамические модели, объекты виртуальной реальности и интерактивного моделирования.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="d" id="6_d">
                              Все вышеперечисленное.
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    7.	Какие из этих инструментов можно использовать для быстрого создания ментальных карт?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="7"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="7" value="a" id="7_a">
                              Xmind, Photoshop, Figma
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="7" value="b" id="7_b">
                              Miro, Xmind, LucidChart
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="7" value="c" id="7_c">
                              Photoshop, Miro, Xmind
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    8.	Цифровой образовательный контент:
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="8"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="8" value="a" id="8_a">
                              Разрабатывается каждым педагогом отдельно.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="8" value="b" id="8_b">
                              Может быть взят из специальных банков ЦОК и при желании адаптирован под конкретную задачу.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="8" value="c" id="8_c">
                              Разрабатывается методистами для каждой конкретной образовательной организации.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="8" value="d" id="8_d">
                              Все варианты верны
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    9.	Создание мультимедийного учебника основано на принципе ветвления. Это значит, что:
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="9"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="9" value="a" id="9_a">
                              Все модули связаны между собой гипертекстовыми ссылками, таким образом пользователь может выбирать, к какому модулю ему переходить.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="9" value="b" id="9_b">
                              Переход к новому модулю осуществляется только после полного прохождения предыдущего.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="9" value="c" id="9_c">
                              Каждый модуль содержит максимум наглядности и минимум текста.
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    10.	Какие этапы предполагает разработка цифрового образовательного контента?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="10"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="10" value="a" id="10_a">
                              Проектирование, описание, структурирование, оценка.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="10" value="b" id="10_b">
                              Анализ, проектирование, разработка, реализация, оценка.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="10" value="c" id="10_c">
                              Разработка стратегии обучения, описание требований, структура,
                              взаимодействие, восприятие обучающимися.
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <Button type="submit" onClick={() => handleSubmit(onSubmit)}>
                  Показать результат
                </Button>
              </form>
            )
          }
        </Wrapper>
      </Container>
    </>
  )
}
