import React from 'react'
import Container from '../../components/Container'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
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

export const Cabinet = () => {
  const data = {
    labels,
    datasets: [
      {
        label: '% правильных ответов',
        data: [56, 36, 71, 67, 59, 43, 53],
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 6,
      }
    ]
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
    scales: {
      r: {
        min: 0,
        max: 100,
        gridLines: {
          circular: false
        },
        ticks: {
          callback: (value) => {
            return `${value}%`;
          },
        },
        pointLabels: {
          maxWidth: 100,
          padding: 10,
          font: {
            size: 14
          },
          callback(value) {
            return value
          }
        }
      }
    },
  }

  return (
    <Container>
      <img alt='cabinet' src={CabinetImg} className={s.image} />
      <s.Table>
        <s.Thead>
          <tr>
            <s.Td colSpan="2">Фамилия Имя Отчество</s.Td>
          </tr>
        </s.Thead>
        <tbody>
        <tr>
          <s.Td>Название теста:</s.Td>
          <s.Td>Результат:</s.Td>
        </tr>
        <tr>
          <s.Td>Безопасность в сети интернет</s.Td>
          <s.Td>56%</s.Td>
        </tr>
        <tr>
          <s.Td>Управление информацией и данными</s.Td>
          <s.Td>36%</s.Td>
        </tr>
        <tr>
          <s.Td>Управление цифровой идентичностью</s.Td>
          <s.Td>71%</s.Td>
        </tr>
        <tr>
          <s.Td>Коммуникация в цифровой среде</s.Td>
          <s.Td>67%</s.Td>
        </tr>
        <tr>
          <s.Td>Цифровой этикет</s.Td>
          <s.Td>59%</s.Td>
        </tr>
        <tr>
          <s.Td>Разработка и реализация цифрового образовательного контента</s.Td>
          <s.Td>43%</s.Td>
        </tr>
        <tr>
          <s.Td>Использование сквозных цифровых технологий в деятельности педагога</s.Td>
          <s.Td>53%</s.Td>
        </tr>
        </tbody>
      </s.Table>
      <s.ChartWrapper>
        <Radar type='radar' data={data} options={options} />
      </s.ChartWrapper>
    </Container>
  )
}
