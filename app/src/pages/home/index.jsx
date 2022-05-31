import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import Hero from '../../assets/hero.jpg'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Container>
        <s.Wrapper>
          <s.TextWrapper>
            <s.Title>
              Оценка цифровых компетенций сотрудника
            </s.Title>
            <s.Text>
              <b>Цифровая компетентность</b> – способность и готовность индивида уверенно, эффективно, критично и
              безопасно выбирать, и применять цифровые технологии для решения задач в различных сферах
              жизнедеятельности.
            </s.Text>
          </s.TextWrapper>
          <img src={Hero} alt="Main" className={s.image} />
        </s.Wrapper>
      </Container>
      <s.ColoredSection>
        <Container>
          <s.TitleTwo>
            Компоненты диагностики цифровых компетенций сотрудников
          </s.TitleTwo>
          <s.ListWrapper>
            <s.ListItem>
              <NavLink to="/testing/internet-security" className={s.Link}>
                <s.Point>1</s.Point>
                <s.Caption>Безопасность в сети интернет</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing/information-control" className={s.Link}>
                <s.Point>2</s.Point>
                <s.Caption>Управление информацией и данными</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing/identity-management" className={s.Link}>
                <s.Point>3</s.Point>
                <s.Caption>Управление цифровой идентичностью</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing/digital-communication" className={s.Link}>
                <s.Point>4</s.Point>
                <s.Caption>Коммуникация в цифровой среде</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing/digital-etiquette" className={s.Link}>
                <s.Point>5</s.Point>
                <s.Caption>Цифровой этикет</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing/develop-digital-content" className={s.Link}>
                <s.Point>6</s.Point>
                <s.Caption>Разработка и реализация цифрового образовательного контента</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing/teacher-digital-techs" className={s.Link}>
                <s.Point>7</s.Point>
                <s.Caption>Использование сквозных цифровых технологий в деятельности педагога</s.Caption>
              </NavLink>
            </s.ListItem>
          </s.ListWrapper>
        </Container>
      </s.ColoredSection>
      <s.TransparentSection>
      </s.TransparentSection>
    </>
  )
}
