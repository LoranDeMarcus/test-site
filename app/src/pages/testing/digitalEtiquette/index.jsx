import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'

import { Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const DigitalEtiquette = () => {
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
          Цифровой этикет
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
                  1. Цифровой этикет
                </s.Question>
                <s.Answers>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="1" value="a" id="1_a" {...register('1')} />
                    <s.Label htmlFor="1_a">
                      знать и уважать своего адресата
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="1" value="b" id="1_b" {...register('1')} />
                    <s.Label htmlFor="1_b">
                      указывать тему сообщения
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="1" value="c" id="1_c" {...register('1')} />
                    <s.Label htmlFor="1_c">
                      в текстовых сообщениях можно выражать эмоции с помощью небольших рисунков, называемых смайликами
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="1" value="d" id="1_d" {...register('1')} />
                    <s.Label htmlFor="1_d">
                      не запрашивать подтверждение получения сообщения без надобности
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="1" value="e" ie="1_e" {...register('1')} />
                    <s.Label htmlFor="1_e">
                      не допускать спама – бессодержательных, навязчивых или грубых сообщений
                      в адрес другого лица или группы лиц
                    </s.Label>
                  </s.AnswerWrapper>
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  2. В каких случаях уместно отправлять аудиосообщение?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="2"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="a" value="a" id="2_a">
                            когда вам не удобно писать текстовое
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="b" value="b" id="2_b">
                            только в неформальном общении
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="c" value="c" id="2_c">
                            только если это заранее обговорено с адресатом
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  3. Когда лучше отправлять рабочие письма и сообщения?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="3"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="a" value="a" id="3_a">
                            в любое время – кроме выходных и праздников
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="b" value="b" id="3_b">
                            в рабочее время
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="c" value="c" id="3_c">
                            когда угодно, ведь это не звонок
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  4. Что такое хотлинкинг?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="4"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="4" value="a" id="4_a">
                            сообщения, присылаемые вам от неизвестных людей или организаций, которым вы не давали на это
                            разрешения
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="4" value="b" id="4_b">
                            переполнение текста на форуме, e-mail, новостной группе избыточными цитатами
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="4" value="c" id="4_c">
                            включение в веб-страницу файлов-изображений или других ресурсов с чужого сервера
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  5. Цифровая культура – это…
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
                              комплекс мер, направленных на защиту конфиденциальности, целостности и
                              доступности информации от вирусных атак и несанкционированного вмешательства
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="5" value="b" id="5_b">
                              набор принципов и компетенций, характеризующих преимущественное
                              использование информационно-коммуникационных цифровых технологий для взаимодействия с
                              обществом и решения задач в профессиональной деятельности
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="5" value="c" id="5_c">
                              правила поведения, принятые в том или ином обществе и адаптированные
                              в цифровой среде
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
                  6. Лишение или ограничение каких-либо прав пользователя:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="6"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="6" value="a" id="6_a">
                            бан
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="6" value="b" id="6_b">
                            спам
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="6" value="c" id="6_c">
                            флуд
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="6" value="c" id="6_c">
                            апгрейд
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  7. Вам на телефон поступил деловой звонок, но по какой-то причине во время
                  разговора связь разъединилась. Ваши действия:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="7"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="7" value="a" id="7_a">
                            сами наберёте номер, чтобы продолжить разговор
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="7" value="b" id="7_b">
                            подождёте, пока вам перезвонят
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="7" value="c" id="7_c">
                            отправите СМС с вопросом «Что случилось?»
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  8. Вы ведете лекцию, во время которой у вас звонит телефон. Ваши действия:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="8"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="8" value="a" id="8_a">
                            извинитесь, выйдете в коридор, чтобы не мешать собравшимся
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="8" value="b" id="8_b">
                            ответите и сообщите, что перезвоните позже
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="8" value="c" id="8_c">
                            уберете звук и не будете отвлекаться на посторонние раздражители, пусть звонит
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  9. Как называется поведение человека, который держит мобильный телефон ночью возле своей кровати,
                  беспокоясь пропустить сообщение, если оно дойдет во время сна?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="9"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="9" value="a" id="9_a">
                            пользовательская активность
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="9" value="b" id="9_b">
                            Зависимость
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="9" value="c" id="9_c">
                            гиперактивность
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  10. Выберите правильную тему для электронного письма
                </s.Question>
                <s.Answers>
                  <Controller
                    name="10"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="10" value="a" id="10_a">
                            Пустая тема
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="10" value="b" id="10_b">
                            В продолжение разговора
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="10" value="c" id="10_c">
                            Информация для совещания
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="10" value="c" id="10_c">
                            От Василия
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="10" value="c" id="10_c">
                            Вопрос
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="10" value="c" id="10_c">
                            Срочно!
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  11. Где во время деловой встречи должен находиться ваш мобильный телефон?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="11"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="11" value="a" id="11_a">
                            на столе перед вами
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="11" value="b" id="11_b">
                            в сумочке или кармане
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="11" value="c" id="11_c">
                            не играет роли
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  12. Выберите оптимальное имя для рабочей почты:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="12"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="12" value="a" id="12_a">
                            IvanIvanov
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="12" value="b" id="12_b">
                            VanyaIvanov
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="12" value="c" id="12_c">
                            MyPost
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="12" value="c" id="12_c">
                            Ivan11021998
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="12" value="c" id="12_c">
                            Vanek
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  13. Нетикет - это ...
                </s.Question>
                <s.Answers>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="13" value="a" id="13_a" {...register('13')} />
                    <s.Label htmlFor="13_a">
                      отрицание этикета
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="13" value="b" id="13_b" {...register('13')} />
                    <s.Label htmlFor="13_b">
                      нормы общения в сети Интернет
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper>
                    <s.Input type="checkbox" name="13" value="c" id="13_c" {...register('13')} />
                    <s.Label htmlFor="13_c">
                      нормы сетевого взаимодействия, прописанные в законодательстве
                    </s.Label>
                  </s.AnswerWrapper>
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  14. Подчеркнутый шрифт в письме используется, если Вы
                </s.Question>
                <s.Answers>
                  <Controller
                    name="14"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper>
                          <Radio name="14" value="a" id="14_a">
                            хотите подчеркнуть значимость Ваших слов
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="14" value="b" id="14_b">
                            вставляете гиперссылку
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper>
                          <Radio name="14" value="c" id="14_c">
                            решили украсить своё высказывание
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
