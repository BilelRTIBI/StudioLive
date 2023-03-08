module.exports = {  

    'Demo test connexion TC05' : function(browser) {
        
        browser
        .maximizeWindow()
        .url('https://k8s-test-stream.webtv-solution.com/presenter/993-simple_test_993_6406fd6b848c0')
        .waitForElementVisible ("body")
        .pause(15*1000)   
        .getAttribute('.Settings__btnRejoindre', 'disabled')
        .pause(3000) 
        .end()


    }
  };