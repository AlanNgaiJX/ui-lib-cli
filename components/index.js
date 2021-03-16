import Button from './button'
import Input from './input'
import Ele from './ele'

export default {
  install(Vue) {
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Ele)
  },
}
