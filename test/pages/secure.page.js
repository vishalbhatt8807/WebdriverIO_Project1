const page = require("./page")
class securePage extends page{

    

    get getMessageValidation(){
        return  $('#flash')
    }
    
    async validateWelcomeMessage(){
        return await this.getMessageValidation.getText()
     }

    open(){
        return super.open("secure")
    } 
}
module.exports = new securePage()