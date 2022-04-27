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
              <b>Цифровая компетентность</b> – это умение преподавателей использовать информационно-коммуникационные
              технологии (ИКТ) в профессиональном контексте в сочетании с хорошим педагогическим (дидактическим)
              пониманием и осознанием его значения для стратегий обучения и цифровой базы обучающихся
            </s.Text>
          </s.TextWrapper>
          <img src={Hero} alt='Main' className={s.image} />
        </s.Wrapper>
      </Container>
    </>
  )
}
