import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import Header from '../../../components/Header'

import { Wrapper } from '../styles'
import * as s from './styles'

export const FirstTest = () => {
  const { control, handleSubmit, formState:{ errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <s.Tittle>
            Безопасность в сети интернет
          </s.Tittle>
          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <s.QuestionWrapper>
              <s.Question>
                [1]. Что может произойти, если ошибиться, вводя в адресную строку браузера адрес веб-сайта,
                на котором предусмотрен ввод имени пользователя и пароля для доступа к каким-либо персональным ресурсам?
              </s.Question>
              <s.Answers>
                <Controller
                  name='1'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='first' value='a' id='first_a' />
                        <s.Label htmlFor='first_a'>
                          <b>a)</b> такая ошибка всегда приводит к автоматическому переходу на официальный
                          сайт той страны, в которой находится пользователь
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='first' value='b' id='first_b' />
                        <s.Label htmlFor='first_b'>
                          <b>b)</b> может быть осуществлен переход на мошеннический сайт для кражи учетных
                          данных пользователей, который очень похож на тот, на который был запланирован переход
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='first' value='c' id='first_c' />
                        <s.Label htmlFor='first_c'>
                          <b>c)</b> система автоматически исправит ошибку, в любом случае пользователь попадет на нужный сайт
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='first' value='d' id='first_d' />
                        <s.Label htmlFor='first_d'>
                          <b>d)</b> такая ошибка всегда приводит к тому, что не будет осуществлен переход ни на какой сайт
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [2]. Укажите способы проникновения компьютерного вируса в систему?
                <s.Hint>(Ответ считается верным, если отмечены все правильные варианты ответов.)</s.Hint>
              </s.Question>
              <s.Answers>
                <Controller
                  name='2'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='second' value='a' id='second_a' />
                        <s.Label htmlFor='second_a'>
                          <b>a)</b> после подключения мыши от зараженного компьютера к незараженному
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='second' value='b' id='second_b' />
                        <s.Label htmlFor='second_b'>
                          <b>b)</b> через зараженный флэш-диск
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='second' value='c' id='second_c' />
                        <s.Label htmlFor='second_c'>
                          <b>c)</b> через мошеннический сайт
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='second' value='d' id='second_d' />
                        <s.Label htmlFor='second_d'>
                          <b>d)</b> через сообщение в системе обмена сообщениями
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [3].	В чем заключаются опасности, связанные с вредоносными программами
                <s.Hint>(Ответ считается верным, если отмечены все правильные варианты ответов.)</s.Hint>
              </s.Question>
              <s.Answers>
                <Controller
                  name='3'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='third' value='a' id='third_a' />
                        <s.Label htmlFor='third_a'>
                          <b>a)</b> они могут передавать злоумышленникам конфиденциальные сведения
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='third' value='b' id='third_b' />
                        <s.Label htmlFor='third_b'>
                          <b>b)</b> они могут нарушать работу компьютеров
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='third' value='c' id='third_c' />
                        <s.Label htmlFor='third_c'>
                          <b>c)</b> они могут поддерживать осмысленный диалог по электронной почте,
                          неотличимый от диалога с реальным собеседником, обманом узнавая у пользователя конфиденциальные сведения
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [4].	В чем заключается риск отправки платных SMS-сообщений, которые предлагается отправить
                на некоторых сайтах для получения доступа к закрытым частям таких сайтов?
              </s.Question>
              <s.Answers>
                <Controller
                  name='4'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='4' value='a' id='4_a' />
                        <s.Label htmlFor='4_a'>
                          <b>a)</b> риск заключается в том, что со счета телефона может быть снята
                          гораздо большая сумма, нежели указано на сайте
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='4' value='b' id='4_b' />
                        <s.Label htmlFor='4_b'>
                          <b>b)</b> риск заключается в том, что после отправки такого сообщения
                          вам могут заблокировать доступ в Интернет
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='4' value='c' id='4_c' />
                        <s.Label htmlFor='4_c'>
                          <b>c)</b> риск заключается в возможности кражи вашего номера телефона злоумышленниками
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='4' value='d' id='4_d' />
                        <s.Label htmlFor='4_d'>
                          <b>d)</b> риск заключается в возможности заражения телефона компьютерным вирусом
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [5].	Какой из перечисленных способов хранения паролей самый надежный?
              </s.Question>
              <s.Answers>
                <Controller
                  name='5'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='5' value='a' id='5_a' />
                        <s.Label htmlFor='5_a'>
                          <b>a)</b> хранение паролей в файле на компьютере
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='5' value='b' id='5_b' />
                        <s.Label htmlFor='5_b'>
                          <b>b)</b> хранение паролей в обычном блокноте, без использования электронных средств
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='5' value='c' id='5_c' />
                        <s.Label htmlFor='5_c'>
                          <b>c)</b> хранение паролей в файле на переносном флэш-диске
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='5' value='d' id='5_d' />
                        <s.Label htmlFor='5_d'>
                          <b>d)</b> хранение паролей в электронном письме, отправленном на собственный электронный ящик
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [6].	Как правильно завершать сеанс работы с сайтом, на котором вы авторизовались
                с помощью логина и пароля?
              </s.Question>
              <s.Answers>
                <Controller
                  name='6'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='6' value='a' id='6_a' />
                        <s.Label htmlFor='6_a'>
                          <b>a)</b> нужно на закладке, на которой открыт данный сайт, открывать любой другой сайт
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='6' value='b' id='6_b' />
                        <s.Label htmlFor='6_b'>
                          <b>b)</b> нужно закрывать окно веб-браузера
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='6' value='c' id='6_c' />
                        <s.Label htmlFor='6_c'>
                          <b>c)</b> нужно закрывать закладку веб-браузера, на которой открыта страница этого сайта
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='6' value='d' id='6_d' />
                        <s.Label htmlFor='6_d'>
                          <b>d)</b> нужно выполнять процедуру выхода из учетной записи
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [7].	Как следует поступить, если у вас появилось подозрение, что кто-то
                узнал конфиденциальные сведения о вашей банковской карте?
              </s.Question>
              <s.Answers>
                <Controller
                  name='7'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='7' value='a' id='7_a' />
                        <s.Label htmlFor='7_a'>
                          <b>a)</b>	никаких действий не требуется, средства в любом случае надежно защищены
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='7' value='b' id='7_b' />
                        <s.Label htmlFor='7_b'>
                          <b>b)</b> нужно предпринять собственное расследование для того, чтобы выяснить, кто же узнал эти сведения
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='7' value='c' id='7_c' />
                        <s.Label htmlFor='7_c'>
                          <b>c)</b> нужно немедленно войти в систему «интернет-банк» и поменять пароль
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='7' value='d' id='7_d' />
                        <s.Label htmlFor='7_d'>
                          <b>d)</b> нужно немедленно позвонить в банк и попросить заблокировать карту
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [8].	Зачем при организации расчетов в Интернете с использованием электронных
                платежных систем используют одноразовые пароли?
              </s.Question>
              <s.Answers>
                <Controller
                  name='8'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='8' value='a' id='8_a' />
                        <s.Label htmlFor='8_a'>
                          <b>a)</b> для повышения безопасности расчетов
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='8' value='b' id='8_b' />
                        <s.Label htmlFor='8_b'>
                          <b>b)</b> для обеспечения совместимости электронных платежных систем и банковских служб
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='8' value='c' id='8_c' />
                        <s.Label htmlFor='8_c'>
                          <b>c)</b> для увеличения скорости выполнения расчетов
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='8' value='d' id='8_d' />
                        <s.Label htmlFor='8_d'>
                          <b>d)</b> для обеспечения возможности предоставления скидок владельцам счетов в этих системах
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [9].	Если вы передаете кому-либо зашифрованный файл, защищенный паролем,
                как надежнее всего передать пароль?
              </s.Question>
              <s.Answers>
                <Controller
                  name='9'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='9' value='a' id='9_a' />
                        <s.Label htmlFor='9_a'>
                          <b>a)</b> надежнее всего заранее договориться о пароле, не используя электронные средства связи
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='9' value='b' id='9_b' />
                        <s.Label htmlFor='9_b'>
                          <b>b)</b> надежнее всего сообщить пароль, позвонив по телефону
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='9' value='c' id='9_c' />
                        <s.Label htmlFor='9_c'>
                          <b>c)</b> надежнее всего передать пароль по электронной почте
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='9' value='d' id='9_d' />
                        <s.Label htmlFor='9_d'>
                          <b>d)</b> надежнее всего передать пароль по любому мессенджеру
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [10].	Каков правильный порядок работы с веб-интерфейсом служб электронной почты?
              </s.Question>
              <s.Answers>
                <Controller
                  name='10'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='10' value='a' id='10_a' />
                        <s.Label htmlFor='10_a'>
                          <b>a)</b> вход в систему, работа, выход из системы
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='10' value='b' id='10_b' />
                        <s.Label htmlFor='10_b'>
                          <b>b)</b> вход в систему, работа, закрытие закладки браузера, в которой открыт
                          сайт системы электронной почты
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='10' value='c' id='10_c' />
                        <s.Label htmlFor='10_c'>
                          <b>c)</b> вход в систему, работа, переход на любой другой веб-адрес на закладке
                          браузера, в котором открыта страница системы электронной почты
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='10' value='d' id='10_d' />
                        <s.Label htmlFor='10_d'>
                          <b>d)</b> вход в систему, работа, закрытие окна браузера
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [11].	Выберите верное утверждение:
              </s.Question>
              <s.Answers>
                <Controller
                  name='11'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='11' value='a' id='11_a' />
                        <s.Label htmlFor='11_a'>
                          <b>a)</b> криптография занимается расшифровкой закрытого текста без ключа
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='11' value='b' id='11_b' />
                        <s.Label htmlFor='11_b'>
                          <b>b)</b> криптография изучает криптосистемы и системы управления ключами
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='11' value='c' id='11_c' />
                        <s.Label htmlFor='11_c'>
                          <b>c)</b> криптография не занимается исследованием преобразования информации
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='11' value='d' id='11_d' />
                        <s.Label htmlFor='11_d'>
                          <b>d)</b> криптоанализ занимается построением ключей
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [12].	Под информационной безопасностью понимается…
              </s.Question>
              <s.Answers>
                <Controller
                  name='12'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='12' value='a' id='12_a' />
                        <s.Label htmlFor='12_a'>
                          <b>a)</b> защищенность информации и поддерживающей инфраструктуры от случайных или преднамеренных воздействий естественного или случайного характера, которые могут нанести неприемлемый ущерб субъектам информационных отношений в том числе владельцам и пользователям информации, и поддерживающей инфраструктуре;
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='12' value='b' id='12_b' />
                        <s.Label htmlFor='12_b'>
                          <b>b)</b> программный продукт и базы данных должны быть защищены по нескольким направлениям от воздействия;
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='12' value='c' id='12_c' />
                        <s.Label htmlFor='12_c'>
                          <b>c)</b> нет правильного ответа.
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [13].	Основные составляющие информационной безопасности:
              </s.Question>
              <s.Answers>
                <Controller
                  name='13'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='13' value='a' id='13_a' />
                        <s.Label htmlFor='13_a'>
                          <b>a)</b> Целостность
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='13' value='b' id='13_b' />
                        <s.Label htmlFor='13_b'>
                          <b>b)</b> Достоверность
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='checkbox' name='13' value='c' id='13_c' />
                        <s.Label htmlFor='13_c'>
                          <b>c)</b> Конфиденциальность
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [14].	Угроза – это…
              </s.Question>
              <s.Answers>
                <Controller
                  name='14'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='14' value='a' id='14_a' />
                        <s.Label htmlFor='14_a'>
                          <b>a)</b> потенциальная возможность определенным образом нарушить информационную безопасность;
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='14' value='b' id='14_b' />
                        <s.Label htmlFor='14_b'>
                          <b>b)</b> система программных языковых организационных и технических средств,
                          предназначенных для накопления и коллективного использования данных;
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='14' value='c' id='14_c' />
                        <s.Label htmlFor='14_c'>
                          <b>c)</b> процесс определения отвечает на текущее состояние разработки требованиям данного этапа.
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <s.QuestionWrapper>
              <s.Question>
                [15].	Основными источниками угроз информационной безопасности являются все указанное в списке:
              </s.Question>
              <s.Answers>
                <Controller
                  name='14'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='14' value='a' id='14_a' />
                        <s.Label htmlFor='14_a'>
                          <b>a)</b> Хищение жестких дисков, подключение к сети, инсайдерство;
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='14' value='b' id='14_b' />
                        <s.Label htmlFor='14_b'>
                          <b>b)</b> Перехват данных, хищение данных, изменение архитектуры системы;
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type='radio' name='14' value='c' id='14_c' />
                        <s.Label htmlFor='14_c'>
                          <b>c)</b> Хищение данных, подкуп системных администраторов, нарушение регламента работы.
                        </s.Label>
                      </s.AnswerWrapper>
                    </>
                  )}
                />
              </s.Answers>
            </s.QuestionWrapper>
            <Button type='submit' onClick={handleSubmit(onSubmit)}>
              Показать результат
            </Button>
          </form>
        </Wrapper>
      </Container>
    </>
  )
}
