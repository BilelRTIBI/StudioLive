module.exports = {

    'Demo test stopper la diffusion TS-23 TC02' : function(browser) {

        browser
            
            .windowMaximize()
            .url('https://k8s-test-stream.webtv-solution.com/room/1001-simple63e365778d364?userName=teklab189@empreinte.com')
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
            .url('https://k8s-test-stream.webtv-solution.com/presenter/1001-simple63e365778d364?userName=test1@gmail.com')
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


           // #root > div > div.EndLive__emp > div > div > div.EndLive__iconContent > img

            .waitForElementVisible ("body",10000)
            .pause(5*1000) 
            .click('#Footer > div > div.Footer__itemslist.css-j65ioz > div:nth-child(3) > button')
            .pause(10*1000)
            .click('.Footer__iconstream')
            .pause(3000)

            .assert.visible ('#root > div > div.EndLive__emp > div > div > div.EndLive__iconContent > img')
            
            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body",10000)
            .pause(5*1000)
            .assert.visible ('#root > div > div.EndLive__emp > div > div > div.EndLive__iconContent > img')

            .end()

    }
}
