module.exports = {  
    
    'Demo test connexion TC04' : function(browser) {
        
        browser
        .maximizeWindow()
        .url('https://k8s-test-stream.webtv-solution.com/room/993-simple_test_993_6406fd6b848c0')
        .waitForElementVisible ("body")
        .pause(15*1000)    
        .setValue('input[placeholder="Nom de famille"]','admin-test') 
        .pause(1000)   
        .setValue('input[placeholder="Prénom"]','admin-test')
        .pause(1000) 
        .setValue('input[placeholder=Email]','admin@gmailcom')
        .pause(5000)
        .getAttribute('.Settings__btnRejoindre','disabled')
        .pause(3000) 

        .windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        })



        browser
        .openNewWindow() 
        .url('https://k8s-test-stream.webtv-solution.com/presenter/993-simple_test_993_6406fd6b848c0') 
        .waitForElementVisible ("body") 
        .pause(15*1000)    
        .setValue('input[placeholder="Nom de famille"]','Test') 
        .pause(1000) 
        .setValue('input[placeholder="Prénom"]','Test')
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmailcom')
        .pause(5000) 
        .getAttribute('.Settings__btnRejoindre','disabled')
        .pause(3000)
        .end()
    }
}

