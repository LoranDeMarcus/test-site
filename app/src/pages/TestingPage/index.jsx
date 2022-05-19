import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import * as s from './styles'
import { NavLink } from 'react-router-dom'

export const TestingPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <s.Wrapper>
          <s.Title>
            Тестирование
          </s.Title>
          <s.Text>
            Данный тест предназначен для оценки цифровых компетенций преподавателей,
            который включает в себя 7 разделов.
          </s.Text>
          <s.Text>
            Предлагаем вам проанализировать ваши сильные стороны и определить, в каком направлении вам
            следует совершенствовать навыки использования цифровых технологий в образовательном процессе.
          </s.Text>
          <s.Text>
            После тестирования вы узнаете свой профиль компетенций,
            определите ключевые задачи и найдете свои точки роста!
          </s.Text>
        </s.Wrapper>
        <s.LinkWrapper>
          <s.Text>
            <b>Выберите раздел тестирования:</b>
          </s.Text>
          <NavLink to="/testing/internet-security" className={s.link}>
            1. Безопасность в сети интернет
          </NavLink>
          <NavLink to="/testing/information-control" className={s.link}>
            2. Управление информацией и данными
          </NavLink>
          <NavLink to="/testing/identity-management" className={s.link}>
            3. Управление цифровой идентичностью
          </NavLink>
          <NavLink to="/testing/digital-communication" className={s.link}>
            4. Коммуникация в цифровой среде
          </NavLink>
          <NavLink to="/testing/digital-etiquette" className={s.link}>
            5. Цифровой этикет
          </NavLink>
          <NavLink to="/testing/develop-digital-content" className={s.link}>
            6. Разработка и реализация цифрового образовательного контента
          </NavLink>
          <NavLink to="/testing/teacher-digital-techs" className={s.link}>
            6. Разработка и реализация цифрового образовательного контента
          </NavLink>
        </s.LinkWrapper>
      </Container>
    </div>
  )
}
