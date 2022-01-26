const question = [
  "Qual é seu nome?",
  "O que aprendeu hoje?",
  "O que te deixou aborrecido? O que voce poderia fazer para melhorar?",
  "O que te deixou feliz hoje?",
  "Quantas pessoas voce ajudou hoje?"
]

const ask = (index = 0) => {
  process.stdout.write("\n" + question[index] + " -> ")
}

ask()

const answers = []

process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < question.length){
    ask(answers.length)
  } else {
    process.exit() 
  }
})

process.on("exit", () => {
  console.log(`
  Legal ${answers[0]}
  ${question[1]}:
  ${answers[1]}
  
  ${question[2]}
  ${answers[2]}
  
  ${question[3]}
  ${answers[3]}
  
  ${question[4]}
  ${answers[4]}`)
})