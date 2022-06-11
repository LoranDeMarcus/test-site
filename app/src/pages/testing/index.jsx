import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import { NavLink } from 'react-router-dom'

export const Testing = () => {
  return (
    <>
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
      </Container>
      <s.ColoredSection>
        <Container>
          <s.TitleThree>
            Компоненты диагностики цифровых компетенций сотрудников
          </s.TitleThree>
          <s.ParagraphWrapper>
            <NavLink to="/testing/internet-security" className={s.paragraph}>
              <s.Point>1.</s.Point>
              <b>Безопасность в сети интернет:</b> знать и соблюдать принципы безопасной работы с компьютерными
              программами, информацией в сети интернет, знать о интернет-рисках и угрозах в информационном пространстве,
              уметь анализировать и критически относиться к информации в информационно-коммуникационных сетях
            </NavLink>
            <NavLink to="/testing/information-control" className={s.paragraph}>
              <s.Point>2.</s.Point>
              <b>Управление информацией и данными:</b> знать понятие цифровых данных,
              основные типы структур данных, способы совместного использования цифровых данных
            </NavLink>
            <NavLink to="/testing/identity-management" className={s.paragraph}>
              <s.Point>3.</s.Point>
             <b>Управление цифровой идентичностью:</b> создавать и управлять одной или
              несколькими цифровыми идентичностями, иметь возможность защитить свою репутацию
            </NavLink>
            <NavLink to="/testing/digital-communication" className={s.paragraph}>
              <s.Point>4.</s.Point>
              <b>Коммуникация в цифровой среде:</b> взаимодействовать посредством различных
              цифровых технологий и определять соответствующие цифровые средства коммуникации в контексте
            </NavLink>
            <NavLink to="/testing/digital-etiquette" className={s.paragraph}>
              <s.Point>5.</s.Point>
              <b>Цифровой этикет:</b> знать правила и нормы поведения в цифровых средах,
              адаптировать коммуникационные стратегии к конкретной аудитории, понимать и учитывать культурное
              и поколенческое разнообразие в цифровой среде
            </NavLink>
            <NavLink to="/testing/develop-digital-content" className={s.paragraph}>
              <s.Point>6.</s.Point>
              <b>Разработка и реализация цифрового образовательного контента:</b>
              создавать и редактировать цифровой контент в разных форматах, модифицировать и повышать качество
              информации и контента, интегрировать их в единую совокупность знаний для создания нового контента
            </NavLink>
            <NavLink to="/testing/teacher-digital-techs" className={s.paragraph}>
              <s.Point>7.</s.Point>
              <b>Использование сквозных цифровых технологий в деятельности педагога:</b>
              понимать, какие цифровые компетенции необходимо развивать, искать возможности для саморазвития
              в цифровой среде, использовать цифровые инструменты и технологии для создания знаний и инноваций
            </NavLink>
          </s.ParagraphWrapper>
        </Container>
      </s.ColoredSection>
    </>
  )
}
