// Here i using native Javascript Intl object
// for formating the number to locale format, although i am from Russia yet)))
// More information about this object at https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

// This function dividing a number
// to a couple of parts, separated by a dot
// formats the left part using the top constructor ^
// connects both parts back together
// and returns result
export default function formatOperand(operand) {
  if (operand == null) return // if dont have a number, return nothing
  const [integer, decimal] = operand.split('.')
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}