module.exports = {  
        'Demo test micro TC01 & TC02' : function(browser) { 
                
            browser
            .windowMaximize()
            .url('https://k8s-test-stream.webtv-solution.com/room/998-simple63e2ee1147901?userName=testadmin@gmail.com')
            .waitForElementVisible ("body")
            .pause(5*1000)  
         
            .click('button[class=Settings__btnRejoindre]')
            .pause(10*1000)  
            .waitForElementVisible ('#Timer')
            .assert.visible('.Footer__icons[src="/assets/images/footer/videoon.svg"]')
            .pause(3*1000)
            .click('.Footer__icons[src="/assets/images/footer/videoon.svg"]')
            .pause(3*1000)
            .assert.visible('.Footer__icons[src="/assets/images/footer/videooff.svg"]')
            .pause(3*1000)
        
            .click('#demo-positioned-button[aria-label="Quitter"]') 
            .pause(3000)
        
            .click('#demo-positioned-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-177ic5c > ul > li:nth-child(2) > button > label')
            .pause(3000)
            .click('body > div.MuiModal-root.MuiDialog-root.css-1lrjy0q > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div.ChildExit__action > a > button')
            .pause(3000)
        
        
            .url('https://k8s-test-stream.webtv-solution.com/room/998-simple63e2ee1147901?userName=testadmin@gmail.com')
            .waitForElementVisible ("body")
            .pause(5*1000)  
        
            .click('#Home > div.Settings__emp > div.Settings__right.Settings__mini-right > div > div.Settings__check.Settings__mini-check > div.Settings__container.Settings__mini-container > div.Settings__video-container.false > div.Settings__global-card-action > div.Settings__action_bloc > div:nth-child(2)')
            .pause(5000)
            .click('button[class=Settings__btnRejoindre]')
            .pause(10*1000)  
            .waitForElementVisible ('#Timer')
            .assert.visible('.Footer__icons[src="/assets/images/footer/videooff.svg"]')
            .pause(3*1000)
            .click('.Footer__icons[src="/assets/images/footer/videooff.svg"]')
            .pause(3*1000)
            .assert.visible('.Footer__icons[src="/assets/images/footer/videoon.svg"]')
            .pause(3*1000)
        
            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })
        
        
            browser
            .openNewWindow()
            .url('https://k8s-test-stream.webtv-solution.com/presenter/998-simple63e2ee1147901?userName=test@gmail.com')
            .waitForElementVisible ("body")
            .pause(10*1000)  
            .setValue('input[placeholder="Nom de famille"]', 'Test')
            .pause(1000) 
            .setValue('input[placeholder=Prénom]', 'Test')
            .pause(1000)  
            .click('button[class=Settings__btnRejoindre]')
            .pause(5*1000)  
            .waitForElementVisible ('#Timer')
            .assert.visible('.Footer__icons[src="/assets/images/footer/videoon.svg"]')
            .pause(3*1000)
            .click('.Footer__icons[src="/assets/images/footer/videoon.svg"]')
            .pause(3*1000)
            .assert.visible('.Footer__icons[src="/assets/images/footer/videooff.svg"]')
            .pause(3*1000)
        
            .click('#demo-positioned-button[aria-label="Quitter"]') 
            .pause(3000)
        
            .click('.ChildExit__btnExit') 
            .pause(3000)
        
        
            .pause(10*1000)  
            .setValue('input[placeholder="Nom de famille"]', 'Test')
            .pause(1000) 
            .setValue('input[placeholder=Prénom]', 'Test')
            .pause(1000)  
        
            .click('#Home > div.Settings__emp > div.Settings__right.Settings__mini-right > div > div.Settings__check.Settings__mini-check > div.Settings__container.Settings__mini-container > div.Settings__video-container.false > div.Settings__global-card-action > div.Settings__action_bloc > div:nth-child(2)')
            .pause(5000)
            .click('button[class=Settings__btnRejoindre]')
            .pause(5*1000)  
            .waitForElementVisible ('#Timer')
            .assert.visible('.Footer__icons[src="/assets/images/footer/videooff.svg"]')
            .pause(3*1000)
            .click('.Footer__icons[src="/assets/images/footer/videooff.svg"]')
            .pause(3*1000)
            .assert.visible('.Footer__icons[src="/assets/images/footer/videoon.svg"]')
            .pause(3*1000)
        
            .end()
        
        
        },
    
        
};