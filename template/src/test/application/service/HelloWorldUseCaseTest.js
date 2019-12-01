import {expect} from 'chai'
import {HelloWorldUseCase} from '../../../main/application/service/HelloWorldUseCase'

describe('HelloWorldUseCase', () => {
  it('should say hello', done => {
    const givenInput = {
      name: 'tester'
    }
    const expectedOutput = 'hello ' + givenInput.name

    const useCase = new HelloWorldUseCase()
    useCase
      .execute(givenInput)
      .then(output => {
        expect(output).to.equal(expectedOutput)
      })
      .then(() => done())
      .catch(e => done(e))
  })
})
