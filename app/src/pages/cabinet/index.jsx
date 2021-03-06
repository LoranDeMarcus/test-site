import React from 'react'
import Container from '../../components/Container'
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import * as s from './styles'
import CabinetImg from '../../assets/cabinet.png'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const labels = [
  ['Безопасность в', 'сети интернет'],
  ['Управление информацией', 'и данными'],
  ['Управление цифровой', 'идентичностью'],
  ['Коммуникация в цифровой', 'среде'],
  ['Цифровой этикет'],
  ['Разработка и реализация', 'цифрового образовательного', 'контента'],
  ['Использование сквозных', 'цифровых технологий', 'в деятельности педагога']
]

const resultArr = []
for (let i = 0; i < 7; i++) {
  resultArr.push(Math.ceil(Math.random() * 100))
}

export const Cabinet = () => {
  const resultData = [35, 56, 0, 67, 76, 43, 100]

  const data = {
    labels,
    datasets: [
      {
        label: '% правильных ответов',
        data: resultArr,
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 6,
      }
    ],
  }

  const options = {
    responsive: true,
    tooltip: {
      enabled: true,
    },
    layout: {
      beginAtZero: true,
      padding: {
        right: 35,
        bottom: 60
      }
    },
    plugins: {
      // legend: {
      //   display: false
      // }
      datalabels: {
        formatter: function (value, context) {
          console.log(value)
          return context.chart.data.labels[context.dataIndex]
        }
      }
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        gridLines: {
          circular: false,
        },
        ticks: {
          callback: (value) => {
            return `${value}%`
          },
        },
        angleLines: {
          color: 'rgba(14,103,179,0.53)',
        },
        grid: {
          color: '#005392',
        },
        pointLabels: {
          maxWidth: 100,
          padding: 10,
          font: {
            size: 14,
          },
          color: '#081828',
          callback(value, i) {
            return [...value, `${resultArr[i]}%`]
          }
        }
      }
    },
  }

  return (
    <Container>
      <img alt="cabinet" src={CabinetImg} className={s.image} />
      <s.Table>
        <s.Thead>
          <tr>
            <s.Td colSpan="3">Иванов Василий Петрович</s.Td>
          </tr>
        </s.Thead>
        <tbody>
        <tr>
          <s.Td>Название теста:</s.Td>
          <s.Td>Результат:</s.Td>
          <s.Td>Рекомендации:</s.Td>
        </tr>
        <tr>
          <s.Td>Безопасность в сети интернет</s.Td>
          <s.Td>{resultData[0]}%</s.Td>
          <s.Td>
            Компетенция проявляется на базовом уровне. Оцениваемый знает и применяет некоторые
            инструменты и методы, но данная компетенция не является его сильной стороной.
            Рекомендуется сделать акцент на ее развитии
          </s.Td>
        </tr>
        <tr>
          <s.Td>Управление информацией и данными</s.Td>
          <s.Td>{resultData[1]}%</s.Td>
          <s.Td>
            Компетенция выражена на достаточном уровне, большинство характеристик и индикаторов
            являются сильными сторонами оцениваемого и носят позитивный характер, негативные
            проявления на минимальном уровне. Тем не менее отдельные элементы компетенции требуют
            развития
          </s.Td>
        </tr>
        <tr>
          <s.Td>Управление цифровой идентичностью</s.Td>
          <s.Td>{resultData[2]}%</s.Td>
          <s.Td>
            Отсутствует проявление компетенции или преобладает поведение, противоположное целевому
          </s.Td>
        </tr>
        <tr>
          <s.Td>Коммуникация в цифровой среде</s.Td>
          <s.Td>{resultData[3]}%</s.Td>
          <s.Td>
            Компетенция выражена на достаточном уровне, большинство характеристик и индикаторов
            являются сильными сторонами оцениваемого и носят позитивный характер, негативные
            проявления на минимальном уровне. Тем не менее отдельные элементы компетенции требуют
            развития
          </s.Td>
        </tr>
        <tr>
          <s.Td>Цифровой этикет</s.Td>
          <s.Td>{resultData[4]}%</s.Td>
          <s.Td>
            Компетенция проявляется на превосходном уровне и является сильной стороной оцениваемого.
            Подавляющее число характеристик и индикаторов — позитивные. Оцениваемый демонстрирует
            соответствие характеристикам и индикаторам компетенции. Способен транслировать знания
            и умения, необходимые для развития данной компетенции у других
          </s.Td>
        </tr>
        <tr>
          <s.Td>Разработка и реализация цифрового образовательного контента</s.Td>
          <s.Td>{resultData[5]}%</s.Td>
          <s.Td>
            Компетенция проявляется на базовом уровне. Оцениваемый знает и применяет некоторые
            инструменты и методы, но данная компетенция не является его сильной стороной.
            Рекомендуется сделать акцент на ее развитии
          </s.Td>
        </tr>
        <tr>
          <s.Td>Использование сквозных цифровых технологий в деятельности педагога</s.Td>
          <s.Td>{resultData[6]}%</s.Td>
          <s.Td>
            Компетенция проявляется на превосходном уровне и является сильной стороной оцениваемого.
            Подавляющее число характеристик и индикаторов — позитивные. Оцениваемый демонстрирует
            соответствие характеристикам и индикаторам компетенции. Способен транслировать знания
            и умения, необходимые для развития данной компетенции у других
          </s.Td>
        </tr>
        </tbody>
      </s.Table>
      <s.ChartWrapper>
        <Radar type="radar" data={data} options={options} />
      </s.ChartWrapper>
    </Container>
  )
}
