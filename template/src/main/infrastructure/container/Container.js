import {HelloWorldUseCase} from '../../application/service/HelloWorldUseCase'

class Container {
  constructor({config = {}, instances = [[]]} = {}) {
    this._config = config
    this._instances = new Map(instances)
  }

  getInstance({key}) {
    if (undefined === this._instances.get(key)) {
      try {
        this._instances.set(key, this['_build' + key]())
      } catch (e) {
        throw new Error(`Error creating instance: ${key}: ${e.message}`)
      }
    }
    return this._instances.get(key)
  }

  get config() {
    return this._config
  }

  _buildHelloWorldUseCase() {
    return new HelloWorldUseCase()
  }
}

export {Container}
