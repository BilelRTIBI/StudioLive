module.exports = {  
    'Demo test ajouter & diffuser & repondre question ' : function(browser) {
            
        browser
        .windowMaximize()
        .url('https://k8s-test-stream.webtv-solution.com/room/997-simple63e24e3b0c207?userName=test10@gmail.com')
        .waitForElementVisible ("body")
        .pause(10*1000)  
        .click('button[class=Settings__btnRejoindre]')
        .pause(10*1000)  
        .waitForElementVisible('#Timer')
        .pause(5*1000)
        

    
        .click("#navbar > div:nth-child(7) > div.SideNav__icon_button.survey.SideNav__tooltip")
        .click(".Survey__add-question")



        .click(".Survey__IconStyle")
        .pause(3000)
        .click('.Survey__IconStyle[src="../../assets/images/Survey/icon-keyboard_edit.svg"]') 
        .setValue('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > textarea','Question choix unique 1')
        .click('input[name=multiple]')
        .setValue('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > div.Survey__input-box > input:nth-child(1)','choix 1')
        .setValue('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > div.Survey__input-box > input:nth-child(2)','choix 2')
        .setValue('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > div.Survey__input-box > input:nth-child(3)','choix 3')
        .setValue('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > div.Survey__input-box > input:nth-child(4)','choix 4')
        .setValue('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > div.Survey__input-box > input:nth-child(5)','choix 5')
        .setValue('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > div.Survey__input-box > input:nth-child(6)','choix 6')
        .pause(2000) 
        .click('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > div.Survey__action-btns > span.Survey__btn-save')
        .pause(2000)
        .click('.Survey__IconStyle[src="../../assets/images/Survey/icon-keyboard_edit.svg"]')
        .pause(5000)
        
        
       
        .click('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse > div > img:nth-child(1)')
        .pause(2000)
        


        .windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })

        browser
        .openNewWindow()
        .url('https://k8s-test-stream.webtv-solution.com/presenter/997-simple63e24e3b0c207?userName=test13@gmail.com')
        .waitForElementVisible ("body",10000)
        .pause(10*1000)  
        .setValue('input[placeholder="Nom de famille"]', 'Test1')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test1')
        .pause(1000)  
        .click('button[class=Settings__btnRejoindre]')
        .pause(10*1000)  

        .assert.visible('#navbar > div:nth-child(5) > div:nth-child(2) > div.SideNav__chat-icons > span')
        .pause(2000)
        .click("#navbar > div:nth-child(5) > div.SideNav__icon_button.survey.SideNav__tooltip")
        .pause(1000)
        .click('#Survey > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div')
        .pause(1000)
        .click('#Survey > div:nth-child(3) > div.Survey__footer-action-btn > button')
        .pause(1000)





        .windowHandles(function (result) {
            var handle = result.value[0];
            browser.switchWindow(handle);
        })

        browser
        .waitForElementVisible ("body")
        .pause(5000)
        .click('.Survey__IconStyle[src="../../assets/images/Survey/icon-keyboard_edit.svg"]')
        .pause(1000)
        .assert.visible('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse-item > div > div:nth-child(1) > div.Survey__ProgressPercent > div:nth-child(2)')
        .pause(2000)
        .click('#Survey > div.Survey__scroll.Survey__admin.Survey__infoIsClose > div.Survey__collapse > div > img:nth-child(1)')
        .pause(2000)
        .click('.Survey__btn-remove')
        .pause(5000)
        .end()
    }
};