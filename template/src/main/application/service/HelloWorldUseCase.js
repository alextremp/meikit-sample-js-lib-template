class HelloWorldUseCase {

  async execute({name}) {
    return `Hello ${name}`
  }
}

export {HelloWorldUseCase}
