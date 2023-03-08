module.exports = {  
    

    'Demo test activation partage écran dans la réunion' : function(browser) {

        browser
        .maximizeWindow() 
        .url('https://k8s-test-stream.webtv-solution.com/presenter/1012-simple_test_1012_63f4b6e989ac4')
        .waitForElementVisible ("body")
        .pause(15*1000)    
        .setValue('input[placeholder="Nom de famille"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'testppc@gmail.com')
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
        .url('https://k8s-test-stream.webtv-solution.com/room/1012-simple_test_1012_63f4b6e989ac4')
        .waitForElementVisible ("body")
        .pause(15*1000)
          
        .setValue('input[placeholder="Nom de famille"]','Admin-test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Admin-test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'adminyy@gmail.com')
        .pause(5000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(5*1000)  
        .waitForElementVisible ('#Timer')
        .pause(10*1000)
        
        .click('.Home__footer_desktop > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(7) > div:nth-child(1) > button:nth-child(1) > img:nth-child(1)')
        .pause(2000)
        .click('li.MuiMenuItem-root:nth-child(2) > p:nth-child(2)')
        .pause(2000)
        .click('div.ChildSettingV2__d-flex:nth-child(3) > label:nth-child(1) > span:nth-child(2)')
        .pause(2000)
        .click('svg.MuiSvgIcon-root:nth-child(1)')
        .pause(2000)


        .windowHandles(function (result) {
            var handle = result.value[0];
            browser.switchWindow(handle);
        })

        .waitForElementVisible ("body")
        .pause(15*1000)

        browser.expect.element('.Home__footer_desktop > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > button:nth-child(1) > img:nth-child(1)').to.be.present;
        browser.pause(2000)
        browser.end()

    }
}