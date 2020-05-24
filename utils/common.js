
function sayHello(name) {
  console.log(`Hello ${name} !`)
  // wx.makePhoneCall({
  //   phoneNumber: '1340000' //仅为示例，并非真实的电话号码
  // })
}
// module.exports={
//   sayHello: sayHello
// }

module.exports.sayHello = sayHello