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
  },
  {
    name: 'eventBus',
    message: 'Will you use an EventBus?',
    type: 'confirm',
    default: true
  }
]

const customProperties = {
  projectClassName: '{{capitalize projectName}}'
}

const exclude = [
  ({file, model}) => file.includes('/domain/bus/') && !model.eventBus === true
]

module.exports = {
  questions,
  customProperties,
  exclude
}

