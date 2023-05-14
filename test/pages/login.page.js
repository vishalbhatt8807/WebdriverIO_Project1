const page = require("./page")
class LoginPage extends page{

     get loginLandingPage(){
        return  $('//h2[contains(text(),"Login Page")]')
    }

    get userName(){
        return  $('#username')
    }

    get password(){
        return  $('#password')
    }

    get loginButton(){
        return  $('button[type="submit"]')
    }

    

    open(){
        return super.open('login')
    }
    async validateLandingPage(){
       return await this.loginLandingPage.getText()
    }

    async performLoginProcess(user,pass){
        await(await this.userName).setValue(user)
        await(await this.password).setValue(pass)
        await(await this.loginButton).click()
    }
  
}
module.exports = new LoginPage()