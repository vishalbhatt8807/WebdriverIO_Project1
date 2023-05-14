const lp = require("../pages/login.page")
const sec = require("../pages/secure.page")

describe('Perform Login operation', () => {
    it('User enter credentials and click on Login button', async() => {
        await lp.open()
        //lp.validateLandingPage("LoPage")
        //const abc = await (await $('//h2[contains(text(),"Login Page")]')).getText()
     
        await expect(await lp.validateLandingPage()).toEqual("Login Page")
        lp.performLoginProcess('tomsmith', 'SuperSecretPassword!')
        await expect(await sec.validateWelcomeMessage()).toContain("Youogged into a secure area!")

       // sec.validateWelcomeMessage("You logged into a secure area!")
        await browser.pause(1000)
    });
});