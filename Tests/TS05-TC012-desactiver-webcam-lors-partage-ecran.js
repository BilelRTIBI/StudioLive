module.exports = {

    'TS05-TC012-desactiver-webcam-lors-partage-ecran': function (browser) {
        browser
            .maximizeWindow()
            .url('https://k8s-test-stream.webtv-solution.com/room/998-simple63e2ee1147901?userName=testadmin@gmail.com')
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
            .url('https://k8s-test-stream.webtv-solution.com/presenter/998-simple63e2ee1147901')
            .waitForElementVisible ("body") 
            .pause(5*1000)  
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
                var handle = result.value[0];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body")
            .pause(5000)

            .click('.Footer__icons[src="/assets/images/footer/screen.svg"]')
            .pause(10000)
            
            
            .assert.visible('.CardMedia__audio')

            .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]')

            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })

            
            .waitForElementVisible ("body")
            .pause(5000)
            .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]')
            .pause(2000)
            
            .end()
    }
}