module.exports.sendResetPwdMail = function(obj) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

  sails.hooks.email.send(
    "resetpwd", {
      Name: obj.name,
      Url: obj.url
    }, {
      to: "sharmilathirumalai@gmail.com",
      subject: "Password Reset - Reg"
    },
    function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("It worked!");
      }
    }
  )
};