module.exports = {
    'Capturer photo': function (browser) {
        browser
        .windowMaximize()
        .url('https://k8s-test-stream.webtv-solution.com/room/996-simple63e20cef31ac5?userName=testadmin@gmail.com')
        .waitForElementVisible("body")
        .pause(5000)
        .click('.Settings__btn-upload') 
        .click('.ChildUploadImage__btn-capture')  
        .pause(3000)
        .click('.ChildUploadImage__text-use') 
        .pause(3000)
        .assert.visible('.Settings__thumbnail')
        .pause(2000)

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
        .url('https://k8s-test-stream.webtv-solution.com/presenter/996-simple63e20cef31ac5?userName=test1@gmail.com')
        .waitForElementVisible ("body",10000)
        .pause(5*1000)  
        .setValue('input[placeholder="Nom de famille"]', 'Test1')
        .pause(1000) 
        .setValue('input[placeholder=Prénom]', 'Test1')
        .pause(1000)  

        .click('.Settings__btn-upload')
        .click('.ChildUploadImage__btn-capture')  
        .pause(3000)
        .click('.ChildUploadImage__text-use') 
        .pause(3000)
        .assert.visible('.Settings__thumbnail')
        .pause(2000)

        .click('button[class=Settings__btnRejoindre]')
        .pause(10*1000)  

        .click('#Footer > div > div.Footer__itemslist.css-j65ioz > div:nth-child(1) > button > img')
        

        .windowHandles(function (result) {
            var handle = result.value[0];
            browser.switchWindow(handle);
        })

        .waitForElementVisible ("body",10000)
        
        .pause(5000)
        .end()

    },
}