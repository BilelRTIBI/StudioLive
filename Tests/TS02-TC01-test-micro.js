module.exports = {  

    'Demo test micro TC01 ACTIVATION' : function(browser) { 
            
        browser
        .windowMaximize()
        .url('https://k8s-test-stream.webtv-solution.com/room/993-simple_test_993_6406fd6b848c0')
        .waitForElementVisible ("body")  
        .pause(10*1000) 
        .setValue('input[placeholder=Email]', 'admin@gmail.com')  
        .pause(5000) 
        .click('button[class=Settings__btnRejoindre]')  
        .pause(10*1000)  
        .waitForElementVisible ('#Timer')
        .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]')
        .pause(3*1000)
        
        .windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
  
        browser
        .openNewWindow()
        .url('https://k8s-test-stream.webtv-solution.com/presenter/993-simple_test_993_6406fd6b848c0?userName=test10@gmail.com')
        .waitForElementVisible ("body")
        .pause(10*1000)  
        .setValue('input[placeholder="Nom de famille"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test') 
        .pause(1000)  
        .click('button[class=Settings__btnRejoindre]')
        .pause(10*1000)  
        .waitForElementVisible ('#Timer')
        .assert.visible('.Footer__icons[src="/assets/images/footer/microon.svg"]')
        .pause(3*1000)
  
  
        .windowHandles(function (result) {
         var handle = result.value[0];
        browser.switchWindow(handle);
        })
  
        browser
        .waitForElementVisible ("body")
        .pause(10*1000)
  
  
        .click('.member > img:nth-child(1)')
        .assert.visible('div.Members__microphone-icon:nth-child(3) > span:nth-child(1)')
  
        .assert.visible('li.type_video:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)')
        .pause(5000)
        .end()
      },
  
  
     'Demo test micro TC01 CAS DESACTIVATION' : function(browser) { 
               
        browser
        .windowMaximize()
        .url('https://k8s-test-stream.webtv-solution.com/room/993-simple_test_993_6406fd6b848c0') 
        .waitForElementVisible ("body")  
        .pause(10*1000) 
        .click('div.Settings__card-action-list:nth-child(1) > img:nth-child(1)')
        .pause(2000)
        .setValue('input[placeholder=Email]', 'admin@gmail.com') 
        .pause(5000)
        .click('button[class=Settings__btnRejoindre]')  
        .pause(10*1000)  
        .waitForElementVisible ('#Timer')
        .assert.visible('.Footer__icons[src="/assets/images/footer/microoff.svg"]')
        .pause(3*1000)
  
       
        .windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })
  
        browser
        .openNewWindow()
        .url('https://k8s-test-stream.webtv-solution.com/presenter/993-simple_test_993_6406fd6b848c0?userName=test10@gmail.com')
        .waitForElementVisible("body")
        .pause(10*1000) 
        .click('div.Settings__card-action-list:nth-child(1) > img:nth-child(1)')
        .pause(2000)
        .setValue('input[placeholder="Nom de famille"]', 'Test')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test')
        .pause(1000)  
        .click('button[class=Settings__btnRejoindre]')
        .pause(10*1000)  
        .waitForElementVisible ('#Timer')
        .assert.visible('.Footer__icons[src="/assets/images/footer/microoff.svg"]')                   
        .pause(3*1000)
  
  
     
        .windowHandles(function (result) {
         var handle = result.value[0];
        browser.switchWindow(handle);
        })
  
        browser
        .waitForElementVisible ("body")
        .pause(10*1000)
        .click('.member > img:nth-child(1)')
        .assert.visible('.Members__microphone_inactive') 
        .assert.visible('div.Members__microphone-icon:nth-child(3) > div:nth-child(1) > span:nth-child(1)')
        .pause(5000)
        .end()
  
        }
      }