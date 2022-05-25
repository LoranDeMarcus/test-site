import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import Header from '../../../components/Header'

import { Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const TeacherDigitalTechs = () => {
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
            Использование сквозных цифровых технологий в деятельности педагога
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
                    1.	Выберите все, что относится к сквозным цифровым технологиям:
                  </s.Question>
                  <s.Answers>
                    <s.AnswerWrapper>
                      <s.Input type="checkbox" name="2" value="a" id="2_a" {...register('2')} />
                      <s.Label htmlFor="2_a">
                        Большие данные
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type="checkbox" name="2" value="b" id="2_b" {...register('2')} />
                      <s.Label htmlFor="2_b">
                        Виртуальная реальность
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type="checkbox" name="2" value="c" id="2_c" {...register('2')} />
                      <s.Label htmlFor="2_c">
                        Интернет
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type="checkbox" name="2" value="d" id="2_d" {...register('2')} />
                      <s.Label htmlFor="2_d">
                        Система распределенного реестра
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type="checkbox" name="2" value="e" ie="2_e" {...register('2')} />
                      <s.Label htmlFor="2_e">
                        Все вышеперечисленное
                      </s.Label>
                    </s.AnswerWrapper>
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    2.	Блокчейн – это…
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="2"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="2" value="a" id="2_a">
                              система, предназначенная для хранения, поиска и обработки информации,
                              и соответствующие организационные ресурсы (человеческие, технические,
                              финансовые и т. д.), которые обеспечивают и распространяют информацию
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="2" value="b" id="2_b">
                              выстроенная по определённым правилам непрерывная последовательная
                              цепочка блоков (связный список), содержащих информацию.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="2" value="c" id="2_c">
                              Технология, позволяющая идентифицировать пользователя в компьютерных системах.
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    3.	Технологии искусственного интеллекта в сфере образования могут использоваться для:
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="4"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="3" value="a" id="3_a">
                              Администрирования образовательного учреждения.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="3" value="b" id="3_b">
                              Сбора и обработки образовательных данных.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="3" value="c" id="3_c">
                              Поддержка учебного процесса и мотивация обучающихся
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="3" value="d" id="3_d">
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
                    4.	В каком из этих случаев использована технология компьютерного зрения?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="4"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="4" value="a" id="4_a">
                              Распознавание документа по штрих-коду
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="4" value="b" id="4_b">
                              Распознавание лиц при входе в университет
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="4" value="c" id="4_c">
                              Поиск изображений в Яндексе
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    5.	Проблемы человеко-машинного взаимодействия относятся к области:
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
                                Искусственного интеллекта и нейронных сетей
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="b" id="5_b">
                                Виртуальной и дополненной реальности
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="c" id="5_c">
                                Робототехники и сенсорики
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="d" id="5_d">
                                Ни к одной из перечисленных
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
                    6.	Уверенность граждан в надежности процессов, технологий и управляющих ими людей,
                    а также в возможность создания безопасного цифрового мира – это…
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="6"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="6" value="a" id="6_a">
                              Цифровая грамотность
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="b" id="6_b">
                              Цифровое доверие
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="c" id="6_c">
                              Цифровизация
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    7.	В каком из перечисленных случаев применено машинное обучение?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="7"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="7" value="a" id="7_a">
                              Чат-бот с искусственным интеллектом
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="7" value="b" id="7_b">
                              Прогнозирование успеваемости студентов на основе больших данных
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="7" value="c" id="7_c">
                              Оба варианта верны
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    8.	Какие прикладные задачи может решать технология распределенного реестра в образовании?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="8"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="8" value="a" id="8_a">
                              Безопасное хранение образовательных документов в базе данных,
                              формирование облачных баз знаний.
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="8" value="b" id="8_b">
                              Для распознавания естественного языка, обработки письменных текстов
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="8" value="c" id="8_c">
                              Экспертные системы и компьютерное зрение.
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    9.	Технология, которая позволяет дополнять окружающий пользователя реальный мир цифровыми
                    объектами с помощью ПК, планшета или другого устройства - это …
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="9"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="9" value="a" id="9_a">
                              Компьютерное зрение
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="9" value="b" id="9_b">
                              Дополненная реальность
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="9" value="c" id="9_c">
                              Виртуальная реальность
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    10.	Созданный при помощи компьютера и специального программного обеспечения мир,
                    не взаимодействующий с окружающей средой, доступ к которому получают при помощи иммерсивных
                    устройств — шлема/очков, перчаток, наушников – это…
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="10"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="10" value="a" id="10_a">
                              Виртуальная реальность
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="10" value="b" id="10_b">
                              Компьютерное зрение
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="10" value="c" id="10_c">
                              Дополненная реальность
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
