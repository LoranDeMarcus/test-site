import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import Hero from '../../assets/hero.jpg'
import { NavLink } from 'react-router-dom'
import Certificate from '../../assets/cert.jpg'

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
              <NavLink to="/testing" className={s.Link}>
                <s.Point>1</s.Point>
                <s.Caption>Безопасность в сети интернет</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing" className={s.Link}>
                <s.Point>2</s.Point>
                <s.Caption>Управление информацией и данными</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing" className={s.Link}>
                <s.Point>3</s.Point>
                <s.Caption>Управление цифровой идентичностью</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing" className={s.Link}>
                <s.Point>4</s.Point>
                <s.Caption>Коммуникация в цифровой среде</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing" className={s.Link}>
                <s.Point>5</s.Point>
                <s.Caption>Цифровой этикет</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing" className={s.Link}>
                <s.Point>6</s.Point>
                <s.Caption>Разработка и реализация цифрового образовательного контента</s.Caption>
              </NavLink>
            </s.ListItem>
            <s.ListItem>
              <NavLink to="/testing" className={s.Link}>
                <s.Point>7</s.Point>
                <s.Caption>Использование сквозных цифровых технологий в деятельности педагога</s.Caption>
              </NavLink>
            </s.ListItem>
          </s.ListWrapper>
        </Container>
      </s.ColoredSection>
      <s.TransparentSection>
        <Container>
          <s.TitleTwo blue>
            Шаги Тестируемого
          </s.TitleTwo>
          <s.StepsWrapper>
            <s.Step>
              <s.Circle>
                1
              </s.Circle>
              <s.Hint>
                Ознакомиться с правилами диагностического инструментария
              </s.Hint>
            </s.Step>
            <s.Step>
              <s.Circle>
                2
              </s.Circle>
              <s.Hint>
                Зарегистрироваться в личном кабинете
              </s.Hint>
            </s.Step>
            <s.Step>
              <s.Circle>
                3
              </s.Circle>
              <s.Hint>
                Пройти тестирование
              </s.Hint>
            </s.Step>
            <s.Step>
              <s.Circle>
                4
              </s.Circle>
              <s.Hint>
                Получить и проанализировать свой результат
              </s.Hint>
            </s.Step>
          </s.StepsWrapper>
        </Container>
      </s.TransparentSection>
      <s.TransparentSection>
        <Container>
          <img alt='certificate' src={Certificate} className={s.cert} />
        </Container>
      </s.TransparentSection>
    </>
  )
}
