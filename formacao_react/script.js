const alunos = [
    {
        nome: 'Jonas',
        idade: 20
    },
    {
        nome: 'Michelly',
        idade: 27
    },
    {
        nome:'Carlos',
        idade: 16
    }
]

const alunosFiltrados = alunos.filter(aluno => aluno.idade <= 18)
// console.table(alunosFiltrados)

const buscarAluno = alunos.find(aluno => aluno.nome = 'Michelly')
console.table(buscarAluno)