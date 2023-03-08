module.exports = {  
    
    'Demo test connexion TC02' : function(browser) {
        
        browser
        .maximizeWindow()
        .url('https://k8s-test-stream.webtv-solution.com/presenter/993-simple_test_993_6406fd6b848c0')
        .waitForElementVisible ("body")
        .pause(15*1000)    
        .setValue('input[placeholder="Nom de famille"]', 'Test') 
        .pause(1000) 
        .setValue('input[placeholder=Email]', 'test@gmail.com')
        .pause(3000) 
        .click('button[class=Settings__btnRejoindre]')
        .pause(5000)
        .waitForElementVisible('.Settings__err-msg',5000)
        .pause(3000)
        .end()

    }
}