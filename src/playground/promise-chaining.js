require('../src/db/mongoose')

const User = require('../src/models/user')

User.findByIdAndUpdate('1234', {age: 34}).then((user) => {
  console.log(user)
  return User.countDocuments({age: 34})
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})