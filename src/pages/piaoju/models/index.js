const context = require.context('./', false, /\.js$/)

const result = context.keys()
                      .filter(item => item!== './index.js')
                      .map(key => context(key))

console.log(result, 'resultresult')                     
export default result;