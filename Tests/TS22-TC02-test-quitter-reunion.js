module.exports = {

    'Demo test quitter la réunion TS-22 TC01' : function(browser) {

        browser
            .windowMaximize()
            .url('https://k8s-test-stream.webtv-solution.com/room/998-simple63e2ee1147901?userName=teklab180@empreinte.com')
            .waitForElementVisible("body") 
            .pause(10*1000)  
            .click('button[class=Settings__btnRejoindre]')
            .pause(5*1000)   
            .waitForElementVisible('#Timer')
            .pause(5*1000)
            

            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })

            browser
            .openNewWindow()
            .url('https://k8s-test-stream.webtv-solution.com/presenter/998-simple63e2ee1147901?userName=teklab10@empreinte.com')
            .waitForElementVisible ("body",10000)
            .pause(5*1000)  
            .setValue('input[placeholder="Nom de famille"]', 'Test1')
            .pause(1000) 
            .setValue('input[placeholder=Prénom]', 'Test1')
            .pause(1000)  
            .click('button[class=Settings__btnRejoindre]')
            .pause(5*1000)  
            
            .windowHandles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle);
            })



            ///////////////

            .waitForElementVisible ("body",10000)
            .pause(5*1000) 
            .click('#demo-positioned-button[aria-label="Quitter"]') 
            .pause(3000)
            .useXpath().click('//*[@id="demo-positioned-menu"]/div[3]/ul/li[2]/button') 
            .pause(3000)
            .useCss().click('.ChildExit__btnCancel') 
            .pause(3000)
            .useXpath().click('//*[@id="demo-positioned-menu"]/div[3]/ul/li[2]/button') 
            .pause(3000)

            .useCss().click('#customized-dialog-title > button')  
            .pause(3000)
            .useXpath().click('//*[@id="demo-positioned-menu"]/div[3]/ul/li[2]/button')
            .pause(3000)

            .useCss().click('.ChildExit__btnExit') 
            .pause(3000)
            

            //////////////////////////////



            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body",10000)
            .pause(5*1000)
            .assert.visible('#root > div > div.Toastify')
            .pause(3000)
            .end()
    }
}
