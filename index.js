class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const avoid = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const arr = string.split(' ')
    const newArr = []
    arr.forEach(e => {
      if (e === arr[0]) {
        return newArr.push(Formatter.capitalize(e))
      }
      if (!avoid.find(el => el === e )){
        return newArr.push(Formatter.capitalize(e))
      } else {
        return newArr.push(e)
      }
    })
    return newArr.join(' ')
  }
}