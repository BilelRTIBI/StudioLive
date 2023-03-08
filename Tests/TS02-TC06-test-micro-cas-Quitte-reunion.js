module.exports = {

    'test-partage-ecran TS02 TC06': function (browser) {
        browser
            .maximizeWindow()
            .url('https://k8s-test-stream.webtv-solution.com/room/998-simple63e2ee1147901?userName=testadmin@gmail.com')  
            .waitForElementVisible ("body",10000)  
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
            .url('https://k8s-test-stream.webtv-solution.com/presenter/998-simple63e2ee1147901?userName=test1@gmail.com')
            .waitForElementVisible ("body",10000) 
            .pause(5*1000)  
            
            .setValue('input[placeholder="Nom de famille"]', 'Test1')
            .pause(1000) 
            .setValue('input[placeholder=Prénom]', 'Test1')
            .pause(1000)  
            .click('button[class=Settings__btnRejoindre]') 
            .pause(5*1000)  
            
            
            .windowHandles(function (result) {
                var handle = result.value[2];
                browser.switchWindow(handle);
            })

            browser
            .openNewWindow()
            .url('https://k8s-test-stream.webtv-solution.com/presenter/998-simple63e2ee1147901?userName=test2@gmail.com')
            .waitForElementVisible ("body",10000) 
            .pause(5*1000)  
            
            .setValue('input[placeholder="Nom de famille"]', 'presenter')
            .pause(1000) 
            .setValue('input[placeholder=Prénom]', 'presenter')
            .pause(1000)  
            .click('button[class=Settings__btnRejoindre]') 
            .pause(10*1000)  


            .click('#demo-positioned-button[aria-label="Quitter"]') 
            .pause(3000)

            .click('.ChildExit__btnExit') 
            .pause(3000)


            .windowHandles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body") 
            .pause(5*1000)


            .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]')
            //.assert.visible('.Footer__icons[src="/assets/images/footer/videoon.svg"]')


            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })


            .waitForElementVisible ("body") 
            .pause(5*1000)
            .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]')


            .windowHandles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle);
            })


            .waitForElementVisible ("body") 
            .pause(5*1000)

            .click('#demo-positioned-button[aria-label="Quitter"]') 
            .pause(3000)

        

            .click('#demo-positioned-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-177ic5c > ul > li:nth-child(2) > button > label')
            .pause(3000)
            .click('body > div.MuiModal-root.MuiDialog-root.css-1lrjy0q > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div.ChildExit__action > a > button')
            .pause(1000)

            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body") 
            .pause(5*1000)


            .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]')
            .pause(5000)


            .end()   

            
        }
    }