import React from 'react'
import Container from '../../components/Container'
import { Auth } from './auth'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2'
import * as s from './styles'
import { splitString } from '../../utils/splitString'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

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
  const isAuth = localStorage.getItem('isAuth')

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
  };

  if (!isAuth) {
    return <Auth />
  }

  return (
    <Container>
      <s.ChartWrapper>
        <Radar type='radar' data={data} options={options} />
      </s.ChartWrapper>
    </Container>
  )
}
