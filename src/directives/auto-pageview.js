import bt from '../index'
import { notChanged } from './utils'
export default function (el, binding) {
  if (notChanged(binding)) return

  let args = []
  if (binding.value === false || binding.value === 'false') args.push(false)
  else args.push(true)
  bt.setAutoPageview(...args)
}
