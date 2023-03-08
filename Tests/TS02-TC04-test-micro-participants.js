module.exports = {

    'test-cam-partage-ecran TS03 TC04': function (browser) {
        browser
            .maximizeWindow()
            .url('https://k8s-test-stream.webtv-solution.com/room/990-simple63e10fa5d38dc?userName=testadmin@gmail.com') 
            .waitForElementVisible ("body") 
            .pause(10*1000)  
            
            .click('button[class=Settings__btnRejoindre]')
            .pause(5*1000)  
            .waitForElementVisible ('#Timer',2000)

            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })

            .openNewWindow()
            .url('https://k8s-test-stream.webtv-solution.com/presenter/990-simple63e10fa5d38dc')
            .waitForElementVisible ("body")
            .pause(10*1000)  
            .setValue('input[placeholder="Nom de famille"]', 'Test')
            .pause(1000) 
            .setValue('input[placeholder=Prénom]', 'Test')
            .pause(1000) 
            .setValue('input[placeholder=Email]', 'test@gmail.com')
            .pause(1000) 
            .click('button[class=Settings__btnRejoindre]')
            .pause(5*1000)  
            .waitForElementVisible ('#Timer',2000)
            .pause(10*1000)

            browser
            .windowHandles(function (result) {
                var handle = result.value[2];
                browser.switchWindow(handle);
            })

            .openNewWindow()
            .url('https://k8s-test-stream.webtv-solution.com/presenter/990-simple63e10fa5d38dc')
            .waitForElementVisible ("body")
            .pause(10*1000)  
            .setValue('input[placeholder="Nom de famille"]', 'presenter')
            .pause(1000) 
            .setValue('input[placeholder=Prénom]', 'presenter')
            .pause(1000) 
            .setValue('input[placeholder=Email]', 'presenter@gmail.com')
            .pause(1000) 
            .click('button[class=Settings__btnRejoindre]')
            .pause(5*1000)  
            .waitForElementVisible ('#Timer',2000)
            .pause(10*1000)

            browser
            .windowHandles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body")
            .pause(5000)
            .click("#navbar > div:nth-child(6) > div.SideNav__icon_button.member.SideNav__tooltip") 
            .pause(1000)
            .click("#op-1-typeactive") 
            .pause(1000)
            .click('#op-1-typeactive > div > div > div > div > div:nth-child(4) > div > div.ant-col.ant-col-16 > span') 
            .pause(10000)
            
            .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]') 
            
            .pause(5000)

            browser
            .windowHandles(function (result) {
                var handle = result.value[2];
                browser.switchWindow(handle);
            })

            .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]')
            
            .pause(5000)
            .end()
        }

}