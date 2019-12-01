const notEmpty = input => (input && input.length > 0) || 'Cannot be empty'

const questions = [
  {
    name: 'projectName',
    message: 'Write the Project Name (*):',
    validate: notEmpty
  },
  {
    name: 'projectDescription',
    message: 'Write the Project Description (optional):'
  }
]

const customProperties = {
  projectClassName: '{{capitalize projectName}}'
}

module.exports = {
  questions,
  customProperties
}

