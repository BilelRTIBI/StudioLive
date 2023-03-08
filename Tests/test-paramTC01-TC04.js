module.exports = {  

    'Demo test Affichage durée de la réunion TC01' : function(browser) {         
       browser
       .windowMaximize()
       .url('https://k8s-test-stream.webtv-solution.com/room/999-simple63e35a6c64771?userName=test99@gmail.com')
       .waitForElementVisible ("body")
       .pause(10*1000)  
       .click('.Settings__card-action-list:nth-child(3) > img:nth-child(1)')
       .pause(2*1000) 
       .click('.ChildSettingV2__checkmark')
       .pause(2*1000) 
       .click('button[aria-label=close]')
       .pause(2*1000) 
       .click('button[class=Settings__btnRejoindre]')
       .pause(5*1000)
       .assert.not.elementPresent('#Timer') 
       .pause(3000)
       .end()
   },

   'Demo test Affichage nom des participants TC02' : function(browser) {    
      browser
      .windowMaximize()
      .url('https://k8s-test-stream.webtv-solution.com/room/999-simple63e35a6c64771?userName=test99@gmail.com')
      .waitForElementVisible ("body")
      .pause(10*1000)  
      .click('.Settings__card-action-list:nth-child(3) > img:nth-child(1)')
      .pause(2*1000) 
      .click('.ChildSettingV2__main > div:nth-child(1) > div:nth-child(3) > label > span')  
      .click('button[aria-label=close]')
      .pause(2*1000) 
      .click('button[class=Settings__btnRejoindre]')
      .pause(5*1000)
      .assert.not.elementPresent('.Conference__footer-name')
      .pause(3000) 
      .end()
  },

  'Demo test Affichage des vignettes TC03' : function(browser) {    
      browser
      .windowMaximize()
      .url('https://k8s-test-stream.webtv-solution.com/room/999-simple63e35a6c64771?userName=test99@gmail.com')
      .waitForElementVisible ("body")
      .pause(10*1000)  
      .click('.Settings__card-action-list:nth-child(3) > img:nth-child(1)')
      .pause(2*1000) 
      .click('.ChildSettingV2__main > div:nth-child(1) > div.ChildSettingV2__checkbox.ChildSettingV2__d-flex > label > span') 
      .pause(2*1000) 
      .click('button[aria-label=close]')
      .pause(2*1000) 
      .click('button[class=Settings__btnRejoindre]')
      .pause(5*1000)
      .assert.not.elementPresent('#ListMedia') 
      .pause(3000)
      .end()
  },

  'Demo test Affichage disposition avancée TC04' : function(browser) {    
      browser
      .windowMaximize()
      .url('https://k8s-test-stream.webtv-solution.com/room/999-simple63e35a6c64771?userName=test99@gmail.com')
      .waitForElementVisible ("body")
      .pause(10*1000)  
      .click('.Settings__card-action-list:nth-child(3) > img:nth-child(1)')
      .pause(2*1000) 
      .click('.ChildSettingV2__main > div:nth-child(1) > div:nth-child(5) > label > span')  
      .pause(2*1000) 
      .click('button[aria-label=close]')
      .pause(2*1000) 
      .click('button[class=Settings__btnRejoindre]')
      .pause(5*1000)
      .assert.not.elementPresent('.CardLayout__layout') 
      .pause(3000)
      .end()
  }
};