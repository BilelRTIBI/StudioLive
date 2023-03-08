module.exports = {

    'test-partage-ecran TS02 TC03': function (browser) {
        browser
            .maximizeWindow()
            .url('https://k8s-test-stream.webtv-solution.com/room/998-simple63e2ee1147901?userName=testadmin@gmail.com')
            .waitForElementVisible ("body",10000)
            .pause(10*1000)  
        
            .click('button[class=Settings__btnRejoindre]')
            .pause(5*1000)  
            .waitForElementVisible('#Timer',2000)
            .pause(10*1000)

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
            .pause(5*1000)

            .windowHandles(function (result) {
                var handle = result.value[0];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body")
            .pause(10*1000)
            
            .click('#navbar > div:nth-child(6) > div.SideNav__icon_button.member.SideNav__tooltip') 
            .pause(2*1000)
            .click('#Members > div.Members__scroll.Members__admin.Members__infoIsClose > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.Members__info > div.Members__microphone-icon > span')
            .pause(1000)
            .click('#Members > div.Members__scroll.Members__admin.Members__infoIsClose > div > div > div:nth-child(1) > div > div:nth-child(3) > div > div > div.Members__info > div.Members__microphone-icon > span')
            .pause(1000)
            .click('#Members > div.Members__scroll.Members__admin.Members__infoIsClose > div > div > div:nth-child(1) > div > div:nth-child(4) > div > div > div.Members__info > div.Members__microphone-icon > span')
            .pause(5000)

            
            .assert.visible('.Footer__icons[src="/assets/images/footer/microoff.svg"]')

            .assert.visible('#Members > div.Members__scroll.Members__admin.Members__infoIsClose > div > div > div > div > div:nth-child(2) > div > div > div.Members__info > div.Members__microphone-icon > div > span')

            
            .assert.visible('#Members > div.Members__scroll.Members__admin.Members__infoIsClose > div > div > div > div > div:nth-child(3) > div > div > div.Members__info > div.Members__microphone-icon > div > span')
            .assert.visible('#Members > div.Members__scroll.Members__admin.Members__infoIsClose > div > div > div > div > div:nth-child(4) > div > div > div.Members__info > div.Members__microphone-icon > div > span') 


            .windowHandles(function (result) {
                var handle = result.value[1];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body")
            .pause(5*1000)
            
            .assert.visible('.Footer__icons[src="/assets/images/footer/microoff.svg"]')
            .pause(2*1000)

            .windowHandles(function (result) {
                var handle = result.value[2];
                browser.switchWindow(handle);
            })

            .waitForElementVisible ("body")
            .pause(5*1000)
            
            .assert.visible('.Footer__icons[src="/assets/images/footer/microoff.svg"]')
            .pause(2*1000)

            .end()

        }
    }
