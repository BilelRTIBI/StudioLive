module.exports = {  
    
    'Demo test autoriser le chat privé' : function(browser) {
        
        browser
        .maximizeWindow()
        .url('https://k8s-test-stream.webtv-solution.com/room/1012-simple_test_1012_63f4b6e989ac4')
        .waitForElementVisible ("body")
        .pause(15*1000)
        .setValue('input[placeholder="Nom de famille"]','Admin-test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Admin-test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'admin@gmail.com')
        .pause(5000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(5*1000)  
        .waitForElementVisible ('#Timer')
        .pause(10*1000)
   

       .windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })

        browser
        .openNewWindow() 
        .url('https://k8s-test-stream.webtv-solution.com/presenter/1012-simple_test_1012_63f4b6e989ac4')
        .waitForElementVisible ("body")
        .pause(15*1000)    
        .setValue('input[placeholder="Nom de famille"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmail.com')
        .pause(5000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(5*1000)  
        .waitForElementVisible ('#Timer') 
        .pause(10*1000) 
        
        .click('.member')
        .pause(2000)
        .moveToElement('div.Members__meet:nth-child(2) > div:nth-child(1)',10,10)
        .pause(2000)
        browser.expect.element('div.Members__meet:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)').to.be.present;
        browser.click('div.Members__meet:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)')
        .pause(2000)
        .setValue('.Chat__textarea','bonjour')
        .pause(2000)
        .click('.icon-send-arrow')
        .pause(2000)
        .end()
    }
}