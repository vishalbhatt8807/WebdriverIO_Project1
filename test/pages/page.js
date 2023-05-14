module.exports = class page{

    open(path){
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}