import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'

import { Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const DigitalCommunication = () => {
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
    <Container>
      <Wrapper>
        <s.Tittle>
          Коммуникация в цифровой среде
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
                  1. Что такое троллинг?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="1"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="a" value="a" id="1_a">
                            возможность авторизоваться на сайте
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="b" value="b" id="1_b">
                            вид виртуального общения, в котором нагнетается конфликт
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="c" value="c" id="1_c">
                            представитель царства животных
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  2. Что такое плагиат?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="2"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="a" value="a" id="2_a">
                            умышленное присвоение авторства
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="b" value="b" id="2_b">
                            вид африканского попугая
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="c" value="c" id="2_c">
                            неуникальный текст
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  3. Что такое аватар?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="3"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="a" value="a" id="3_a">
                            данные о пользователе
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="b" value="b" id="3_b">
                            электронный адрес
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="c" value="c" id="3_c">
                            изображение для профиля на сайте
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  4. Общаясь в чате, форуме, гостевой книге, Вам следует быть:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="4"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="4" value="a" id="4_a">
                            твердым в своем мнении и убеждать других в нём
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="4" value="b" id="4_b">
                            вежливым с теми, кто вежлив с вами
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="4" value="c" id="4_c">
                            тактичным и корректным в своих высказываниях
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  5. Спам – это:
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
                              агрессивное поведение на форумах
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="5" value="b" id="5_b">
                              цепочка непонятных, нелогичных объяснений
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="5" value="c" id="5_c">
                              словесная война
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="5" value="d" id="5_d">
                              массовая рассылка рекламы и прочих объявлений
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
                  6. Набор слов ЗАГЛАВНЫМИ буквами в чате служит:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="6"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="6" value="a" id="6_a">
                            для выражения сильных эмоций (крика, восторга)
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="6" value="b" id="6_b">
                            для написания заголовка текста
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="6" value="c" id="6_c">
                            для написания имени и фамилии
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  7. Что такое флуд?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="7"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="7" value="a" id="7_a">
                            массовая рассылка рекламы
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="7" value="b" id="7_b">
                            сообщение на сайте/форуме не несущее смысловой нагрузки
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="7" value="c" id="7_c">
                            реклама на сайте
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  8. Что такое флейм?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="8"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="8" value="a" id="8_a">
                            не активный аккаунт
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="8" value="b" id="8_b">
                            словесная война
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="8" value="c" id="8_c">
                            неинформативный ответ
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  9. Что такое оффтоп?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="9"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="9" value="a" id="9_a">
                            создание тем имеющих отношение к тематике форума
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="9" value="b" id="9_b">
                            создание тем, не имеющих отношение к тематике форума
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="9" value="c" id="9_c">
                            создание оскорбительных сообщений
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  10. Кибербуллинг — это:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="10"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="10" value="a" id="10_a">
                            система передачи мультимедийных объявлений
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="10" value="b" id="10_b">
                            программа для защиты компьютера или мобильного устройства от вредоносных программ
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="10" value="c" id="10_c">
                            травля, оскорбления или угрозы, высказываемые жертве с помощью средств электронной
                            коммуникации, в частности, сообщений в социальных сетях, мгновенных сообщений,
                            электронных писем и смс
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  11. Комплекс правил и мер по предотвращению предполагаемого негативного воздействия
                  Интернета и компьютера на ребенка, называется:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="11"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="11" value="a" id="11_a">
                            антивирус
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="11" value="b" id="11_b">
                            родительский контроль
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="11" value="c" id="11_c">
                            программное обеспечение «Без забот»
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  12. Выберите признаки интернет-зависимости человека:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="12"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="12" value="a" id="12_a">
                            отклоняет вашу заявку на добавления в «друзья» в социальной сети
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="12" value="b" id="12_b">
                            неохотно рассказывает или вообще скрывает, чем занимается в сети
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="12" value="c" id="12_c">
                            неадекватное поведение в ответ на предложение выключить гаджет — вплоть до скандала
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  13. Какие меры осторожности нужно предпринять при получении большого количества спама?
                </s.Question>
                <s.Answers>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="13" value="a" id="13_a" {...register('13')} />
                    <s.Label htmlFor="13_a">
                      попросить отправителей больше не присылать их
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="13" value="b" id="13_b" {...register('13')} />
                    <s.Label htmlFor="13_b">
                      удалить весь спам и включить фильтр спама
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="13" value="c" id="13_c" {...register('13')} />
                    <s.Label htmlFor="13_c">
                      открыть сообщения и узнать, что в них содержится
                    </s.Label>
                  </s.AnswerWrapper>
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  14. Можно ли удалить из сети Интернет собственную фотографию после того как она была
                  передана или опубликована на вашей странице в социальной сети?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="14"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="14" value="a" id="14_a">
                            после публикации фотографии в Интернете ее больше невозможно контролировать
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="14" value="b" id="14_b">
                            фотографию можно легко удалить, попросив об этом специалиста
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="14" value="c" id="14_c">
                            можно самому удалить фотографию с веб-сайта
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  15. Сетевые коммуникации – это…
                </s.Question>
                <s.Answers>
                  <Controller
                    name="15"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="15" value="a" id="15_a">
                            Система правил поведения в Интернете
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="15" value="b" id="15_b">
                            средства обмена информацией через сеть Интернет, создающее при этом новое культурное
                            пространство
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="15" value="c" id="15_c">
                            понимание современных информационных технологий, их функционала, а также возможность
                            грамотно использовать их в работе или быту
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
  )
}
