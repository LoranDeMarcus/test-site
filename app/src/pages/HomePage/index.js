import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import * as s from './styles'
import Hero from '../../assets/hero.jpg'

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <s.Wrapper>
          <s.TextWrapper>
            <s.Title>
              Оценка цифровых компетенций сотрудника
            </s.Title>
            <s.Text>
              <b>Цифровая компетентность</b> – способность и готовность индивида уверенно, эффективно, критично и
              безопасно выбирать, и применять цифровые технологии для решения задач в различных сферах жизнедеятельности.
            </s.Text>
          </s.TextWrapper>
          <img src={Hero} alt='Main' className={s.image} />
        </s.Wrapper>
      </Container>
    </>
  )
}
