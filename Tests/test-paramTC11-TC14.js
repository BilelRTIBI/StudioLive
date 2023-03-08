module.exports = {  

    'Demo test utilisation multi caméras TC011' : function(browser) {         
       browser
       .windowMaximize()
       .url('https://k8s-test-stream.webtv-solution.com/room/999-simple63e35a6c64771?userName=test99@gmail.com')
       .waitForElementVisible ("body")
       .pause(10*1000)  
       .click('.Settings__card-action-list:nth-child(3) > img:nth-child(1)')
       .pause(2*1000) 
       .useXpath().click('/html/body/div[2]/div[3]/div/div/div/div[1]/div[2]')
       .pause(5*1000) 
       .useCss()
       .click('.CamSettings__checkmark')
       .pause(2*1000) 
       .useXpath().click('//button[text()="Ajouter caméra"]')
       .pause(2*1000) 
       .useCss().click('.CamSettings__main > div.CamSettings__container > div:nth-child(2) > div.CamSettings__inputs > div.CamSettings__item-right > div')
       .pause(2*1000) 
       .click('button[aria-label=close]')
       .pause(2*1000) 
       .click('button[class=Settings__btnRejoindre]')
       .pause(5*1000)
       .assert.elementPresent('.Conference__footer-name')
       .pause(3000) 
       .end()
   },

    'Demo test utilisation caméra HD & Effet mirroir' : function(browser) {         
        browser
        .windowMaximize()
        .url('https://k8s-test-stream.webtv-solution.com/room/999-simple63e35a6c64771?userName=test99@gmail.com')
        .waitForElementVisible ("body")
        .pause(10*1000)  
        .click('.Settings__card-action-list:nth-child(3) > img:nth-child(1)')
        .pause(2*1000) 
        .useXpath().click('/html/body/div[2]/div[3]/div/div/div/div[1]/div[2]')
        .pause(5*1000) 
        .click('/html/body/div[2]/div[3]/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/label/span[2]')  
        .pause(4*1000) 
        .useCss().click('button[aria-label=close]')
        .pause(2*1000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(10*1000)
        .waitForElementVisible ('#Timer')
        .pause(5*1000)
        .end()
    },

    'Demo test micro & HP' : function(browser) {         
        browser
        .windowMaximize()
        .url('https://k8s-test-stream.webtv-solution.com/room/999-simple63e35a6c64771?userName=test99@gmail.com')
        .waitForElementVisible ("body")
        .pause(10*1000)  
        .click('.Settings__card-action-list:nth-child(3) > img:nth-child(1)') 
        .pause(2*1000) 
        .useXpath().click('/html/body/div[2]/div[3]/div/div/div/div[1]/div[3]/div')
        .pause(5*1000)
        .click('//button[text()="Testez le HP"]')
        .pause(5*1000)

        //.click('.ant-slider-handle[tabindex="0"]')
        //.setValue('.ant-slider-handle[tabindex="0"]', '0.9')

        //.click('/html/body/div[2]/div[3]/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/label/span[2]')  
        //.pause(4*1000) 
        .useCss().click('button[aria-label=close]')
        .pause(2*1000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(10*1000)
        .waitForElementVisible ('#Timer')
        .pause(5*1000)
        .end()
   }
};

