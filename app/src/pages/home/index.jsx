import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import Hero from '../../assets/hero.jpg'

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
          <s.ParagraphWrapper>
            <s.Paragraph>
              <s.Point>1.</s.Point> «Безопасность в сети интернет»: знать и соблюдать принципы безопасной работы с компьютерными
              программами, информацией в сети интернет, знать о интернет-рисках и угрозах в информационном пространстве,
              уметь анализировать и критически относиться к информации в информационно-коммуникационных сетях
            </s.Paragraph>
            <s.Paragraph>
              <s.Point>2.</s.Point> «Управление информацией и данными»: знать понятие цифровых данных,
              основные типы структур данных, способы совместного использования цифровых данных
            </s.Paragraph>
            <s.Paragraph>
              <s.Point>3.</s.Point> «Управление цифровой идентичностью»: создавать и управлять одной или
              несколькими цифровыми идентичностями, иметь возможность защитить свою репутацию
            </s.Paragraph>
            <s.Paragraph>
              <s.Point>4.</s.Point> «Коммуникация в цифровой среде»: взаимодействовать посредством различных
              цифровых технологий и определять соответствующие цифровые средства коммуникации в контексте
            </s.Paragraph>
            <s.Paragraph>
              <s.Point>5.</s.Point> «Цифровой этикет»: знать правила и нормы поведения в цифровых средах,
              адаптировать коммуникационные стратегии к конкретной аудитории, понимать и учитывать культурное
              и поколенческое разнообразие в цифровой среде
            </s.Paragraph>
            <s.Paragraph>
              <s.Point>6.</s.Point> «Разработка и реализация цифрового образовательного контента»:
              создавать и редактировать цифровой контент в разных форматах, модифицировать и повышать качество
              информации и контента, интегрировать их в единую совокупность знаний для создания нового контента
            </s.Paragraph>
            <s.Paragraph>
              <s.Point>7.</s.Point> «Использование сквозных цифровых технологий в деятельности педагога»:
              понимать, какие цифровые компетенции необходимо развивать, искать возможности для саморазвития
              в цифровой среде, использовать цифровые инструменты и технологии для создания знаний и инноваций
            </s.Paragraph>
          </s.ParagraphWrapper>
        </Container>
      </s.ColoredSection>
      <s.TransparentSection>
      </s.TransparentSection>
    </>
  )
}
