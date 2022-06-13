export const rightAnswersCount = (answers, rightAnswers) => {
  let counter = 0
  let right = {}

  Object.values(answers).map((value, i) => {
    if (Array.isArray(value)) {
      if (JSON.stringify(rightAnswers[i]) === JSON.stringify(value)) {
        counter++
        right[`${i + 1}`] = true
      }
    } else if (value === rightAnswers[i]) {
      counter++
      right[`${i + 1}`] = value
    } else {
      right[`${i + 1}`] = false
    }
  })

  return {
    counter,
    right
  }
}
