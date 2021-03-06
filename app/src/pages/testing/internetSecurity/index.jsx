import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'

import { Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'
import { rightAnswersCount } from '../../../utils/rightAnswersCount'

const rightAnswers = [
  'b',
  ['b', 'c', 'd'],
  ['a', 'b'],
  'a',
  'e',
  'd',
  'd',
  'a',
  'a',
  'a',
  'b',
  'a',
  ['a', 'b', 'c'],
  'a',
  'b',
]

export const InternetSecurity = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm()
  const [result, setResult] = useState()
  const [isDone, setIsDone] = useState(false)
  const [count, setCount] = useState(0)
  const [rAnswers, setRAnswers] = useState({})

  console.log(errors)

  const onSubmit = (data) => {
    const { counter, right} = rightAnswersCount(data, rightAnswers)
    setRAnswers(right)
    setResult(data)
    setCount(counter)
    setIsDone(true)
  }

  const renderResult = () => {
    return Object.entries(result).map(([key, value]) => {
      const answer = Array.isArray(value) ? value.join(', ') : value
      return (
        <s.Result key={key}>{key}: <b>{answer}</b></s.Result>
      )
    })
  }

  const handleReturn = () => {
    setIsDone(false)
    setResult({})
  }

  console.log(rAnswers)

  return (
    <Container>
      <Wrapper>
        <s.Tittle>
          Безопасность в сети интернет
        </s.Tittle>
        {isDone
          ? (
            <>
              <s.ResultWrapper>
                Результаты тестирования:
                {renderResult()}
                <s.Percent>
                  Правильных ответов: {count}
                </s.Percent>
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
                  1. Что может произойти, если ошибиться, вводя в адресную строку браузера адрес веб-сайта,
                  на котором предусмотрен ввод имени пользователя и пароля для доступа к каким-либо персональным
                  ресурсам?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="1"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[1] === 'a'}>
                          <Radio name="1" value="a" id="1_a">
                            такая ошибка всегда приводит к автоматическому переходу на официальный
                            сайт той страны, в которой находится пользователь
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[1] === 'b'}>
                          <Radio name="1" value="b" id="1_b">
                            может быть осуществлен переход на мошеннический сайт для кражи учетных
                            данных пользователей, который очень похож на тот, на который был запланирован переход
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[1] === 'c'}>
                          <Radio name="1" value="c" id="1_c">
                            система автоматически исправит ошибку, в любом случае пользователь попадет на нужный
                            сайт
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[1] === 'd'}>
                          <Radio name="1" value="d" id="1_d">
                            такая ошибка всегда приводит к тому, что не будет осуществлен переход ни на какой
                            сайт
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper wrong>
                <s.Question>
                  2. Укажите способы проникновения компьютерного вируса в систему?
                  <s.Hint>(Ответ считается верным, если отмечены все правильные варианты ответов.)</s.Hint>
                </s.Question>
                <s.Answers>
                  <s.AnswerWrapper isRight={rAnswers[2] === true}>
                    <s.Input type="checkbox" name="2" value="a" id="2_a" {...register('2')} />
                    <s.Label htmlFor="2_a">
                      после подключения мыши от зараженного компьютера к незараженному
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper isRight={rAnswers[2] === true}>
                    <s.Input type="checkbox" name="2" value="b" id="2_b" {...register('2')} />
                    <s.Label htmlFor="2_b">
                      через зараженный флэш-диск
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper isRight={rAnswers[2] === true}>
                    <s.Input type="checkbox" name="2" value="c" id="2_c" {...register('2')} />
                    <s.Label htmlFor="2_c">
                      через мошеннический сайт
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper isRight={rAnswers[2] === true}>
                    <s.Input type="checkbox" name="2" value="d" id="2_d" {...register('2')} />
                    <s.Label htmlFor="2_d">
                      через сообщение в системе обмена сообщениями
                    </s.Label>
                  </s.AnswerWrapper>
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  3. В чем заключаются опасности, связанные с вредоносными программами
                  <s.Hint>(Ответ считается верным, если отмечены все правильные варианты ответов.)</s.Hint>
                </s.Question>
                <s.Answers>
                  <s.AnswerWrapper isRight={rAnswers[3] === true}>
                    <s.Input type="checkbox" name="3" value="a" id="3_a" {...register('3')} />
                    <s.Label htmlFor="3_a">
                      они могут передавать злоумышленникам конфиденциальные сведения
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper isRight={rAnswers[3] === true}>
                    <s.Input type="checkbox" name="3" value="b" id="3_b" {...register('3')} />
                    <s.Label htmlFor="3_b">
                      они могут нарушать работу компьютеров
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper isRight={rAnswers[3] === true}>
                    <s.Input type="checkbox" name="3" value="c" id="3_c" {...register('3')} />
                    <s.Label htmlFor="3_c">
                      они могут поддерживать осмысленный диалог по электронной почте,
                      неотличимый от диалога с реальным собеседником, обманом узнавая у пользователя
                      конфиденциальные сведения
                    </s.Label>
                  </s.AnswerWrapper>
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  4. В чем заключается риск отправки платных SMS-сообщений, которые предлагается отправить
                  на некоторых сайтах для получения доступа к закрытым частям таких сайтов?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="4"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[4] === 'a'}>
                          <Radio name="4" value="a" id="4_a">
                            риск заключается в том, что со счета телефона может быть снята
                            гораздо большая сумма, нежели указано на сайте
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[4] === 'b'}>
                          <Radio name="4" value="b" id="4_b">
                            риск заключается в том, что после отправки такого сообщения
                            вам могут заблокировать доступ в Интернет
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[4] === 'c'}>
                          <Radio name="4" value="c" id="4_c">
                            риск заключается в возможности кражи вашего номера телефона злоумышленниками
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[4] === 'd'}>
                          <Radio name="4" value="d" id="4_d">
                            риск заключается в возможности заражения телефона компьютерным вирусом
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  5. Какой из перечисленных способов хранения паролей самый надежный?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="5"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <>
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper isRight={rAnswers[5] === 'a'}>
                            <Radio name="5" value="a" id="5_a">
                              хранение паролей в файле на компьютере
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper isRight={rAnswers[5] === 'b'}>
                            <Radio name="5" value="b" id="5_b">
                              хранение паролей в обычном блокноте, без использования электронных средств
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper isRight={rAnswers[5] === 'c'}>
                            <Radio name="5" value="c" id="5_c">
                              хранение паролей в файле на переносном флэш-диске
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper isRight={rAnswers[5] === 'd'}>
                            <Radio name="5" value="d" id="5_d">
                              хранение паролей в электронном письме, отправленном на собственный электронный ящик
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper isRight={rAnswers[5] === 'e'}>
                            <Radio name="5" value="e" id="5_e">
                              в специальных программах для шифрования паролей
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
                  6. Как правильно завершать сеанс работы с сайтом, на котором вы авторизовались
                  с помощью логина и пароля?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="6"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[6] === 'a'}>
                          <Radio name="6" value="a" id="6_a">
                            нужно на закладке, на которой открыт данный сайт, открывать любой другой сайт
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[6] === 'b'}>
                          <Radio name="6" value="b" id="6_b">
                            нужно закрывать окно веб-браузера
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[6] === 'c'}>
                          <Radio name="6" value="c" id="6_c">
                            нужно закрывать закладку веб-браузера, на которой открыта страница этого сайта
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[6] === 'd'}>
                          <Radio name="6" value="d" id="6_d">
                            нужно выполнять процедуру выхода из учетной записи
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  7. Как следует поступить, если у вас появилось подозрение, что кто-то
                  узнал конфиденциальные сведения о вашей банковской карте?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="7"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[7] === 'a'}>
                          <Radio name="7" value="a" id="7_a">
                            никаких действий не требуется, средства в любом случае надежно защищены
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[7] === 'b'}>
                          <Radio name="7" value="b" id="7_b">
                            нужно предпринять собственное расследование для того, чтобы выяснить, кто же узнал
                            эти сведения
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[7] === 'c'}>
                          <Radio name="7" value="c" id="7_c">
                            нужно немедленно войти в систему «интернет-банк» и поменять пароль
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[7] === 'd'}>
                          <Radio name="7" value="d" id="7_d">
                            нужно немедленно позвонить в банк и попросить заблокировать карту
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  8. Зачем при организации расчетов в Интернете с использованием электронных
                  платежных систем используют одноразовые пароли?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="8"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[8] === 'a'}>
                          <Radio name="8" value="a" id="8_a">
                            для повышения безопасности расчетов
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[8] === 'b'}>
                          <Radio name="8" value="b" id="8_b">
                            для обеспечения совместимости электронных платежных систем и банковских служб
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[8] === 'c'}>
                          <Radio name="8" value="c" id="8_c">
                            для увеличения скорости выполнения расчетов
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[8] === 'd'}>
                          <Radio name="8" value="d" id="8_d">
                            для обеспечения возможности предоставления скидок владельцам счетов в этих системах
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  9. Если вы передаете кому-либо зашифрованный файл, защищенный паролем,
                  как надежнее всего передать пароль?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="9"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[9] === 'a'}>
                          <Radio name="9" value="a" id="9_a">
                            надежнее всего заранее договориться о пароле, не используя электронные средства
                            связи
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[9] === 'b'}>
                          <Radio name="9" value="b" id="9_b">
                            надежнее всего сообщить пароль, позвонив по телефону
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[9] === 'c'}>
                          <Radio name="9" value="c" id="9_c">
                            надежнее всего передать пароль по электронной почте
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[9] === 'd'}>
                          <Radio name="9" value="d" id="9_d">
                            надежнее всего передать пароль по любому мессенджеру
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  10. Каков правильный порядок работы с веб-интерфейсом служб электронной почты?
                </s.Question>
                <s.Answers>
                  <Controller
                    name="10"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[10] === 'a'}>
                          <Radio name="10" value="a" id="10_a">
                            вход в систему, работа, выход из системы
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[10] === 'b'}>
                          <Radio name="10" value="b" id="10_b">
                            вход в систему, работа, закрытие закладки браузера, в которой открыт
                            сайт системы электронной почты
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[10] === 'c'}>
                          <Radio name="10" value="c" id="10_c">
                            вход в систему, работа, переход на любой другой веб-адрес на закладке
                            браузера, в котором открыта страница системы электронной почты
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[10] === 'd'}>
                          <Radio name="10" value="d" id="10_d">
                            вход в систему, работа, закрытие окна браузера
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  11. Выберите верное утверждение:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="11"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[11] === 'a'}>
                          <Radio name="11" value="a" id="11_a">
                            криптография занимается расшифровкой закрытого текста без ключа
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[11] === 'b'}>
                          <Radio name="11" value="b" id="11_b">
                            криптография изучает криптосистемы и системы управления ключами
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[11] === 'c'}>
                          <Radio name="11" value="c" id="11_c">
                            криптография не занимается исследованием преобразования информации
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[11] === 'd'}>
                          <Radio name="11" value="d" id="11_d">
                            криптоанализ занимается построением ключей
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  12. Под информационной безопасностью понимается…
                </s.Question>
                <s.Answers>
                  <Controller
                    name="12"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[12] === 'a'}>
                          <Radio name="12" value="a" id="12_a">
                            защищенность информации и поддерживающей инфраструктуры от случайных или
                            преднамеренных воздействий естественного или случайного характера, которые могут нанести
                            неприемлемый ущерб субъектам информационных отношений в том числе владельцам и
                            пользователям
                            информации, и поддерживающей инфраструктуре;
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[12] === 'b'}>
                          <Radio name="12" value="b" id="12_b">
                            программный продукт и базы данных должны быть защищены по нескольким направлениям от
                            воздействия;
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[12] === 'c'}>
                          <Radio name="12" value="c" id="12_c">
                            нет правильного ответа.
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  13. Основные составляющие информационной безопасности:
                </s.Question>
                <s.Answers>
                  <s.AnswerWrapper isRight={rAnswers[13] === true}>
                    <s.Input type="checkbox" name="13" value="a" id="13_a" {...register('13')} />
                    <s.Label htmlFor="13_a">
                      Целостность
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper isRight={rAnswers[13] === true}>
                    <s.Input type="checkbox" name="13" value="b" id="13_b" {...register('13')} />
                    <s.Label htmlFor="13_b">
                      Достоверность
                    </s.Label>
                  </s.AnswerWrapper>
                  <s.AnswerWrapper isRight={rAnswers[13] === true}>
                    <s.Input type="checkbox" name="13" value="c" id="13_c" {...register('13')} />
                    <s.Label htmlFor="13_c">
                      Конфиденциальность
                    </s.Label>
                  </s.AnswerWrapper>
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  14. Угроза – это…
                </s.Question>
                <s.Answers>
                  <Controller
                    name="14"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[14] === 'a'}>
                          <Radio name="14" value="a" id="14_a">
                            потенциальная возможность определенным образом нарушить информационную безопасность;
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[14] === 'b'}>
                          <Radio name="14" value="b" id="14_b">
                            система программных языковых организационных и технических средств,
                            предназначенных для накопления и коллективного использования данных;
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[14] === 'c'}>
                          <Radio name="14" value="c" id="14_c">
                            процесс определения отвечает на текущее состояние разработки требованиям данного
                            этапа.
                          </Radio>
                        </s.AnswerWrapper>
                      </RadioGroup>
                    )}
                  />
                </s.Answers>
              </s.QuestionWrapper>
              <s.QuestionWrapper>
                <s.Question>
                  15. Основными источниками угроз информационной безопасности являются все указанное в списке:
                </s.Question>
                <s.Answers>
                  <Controller
                    name="15"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        <s.AnswerWrapper isRight={rAnswers[15] === 'a'}>
                          <Radio name="15" value="a" id="15_a">
                            Хищение жестких дисков, подключение к сети, инсайдерство;
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[15] === 'b'}>
                          <Radio name="15" value="b" id="15_b">
                            Перехват данных, хищение данных, изменение архитектуры системы;
                          </Radio>
                        </s.AnswerWrapper>
                        <s.AnswerWrapper isRight={rAnswers[15] === 'c'}>
                          <Radio name="15" value="c" id="15_c">
                            Хищение данных, подкуп системных администраторов, нарушение регламента работы.
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
