module.exports = {
    'Demo test configuration TS08-TC01' : function(browser) {
        
        browser
        .maximizeWindow()
        .url('https://k8s-test-stream.webtv-solution.com/room/994-simple63e127344bba5?userName=teklab11@empreinte.com')
        .waitForElementVisible ("body")
        .pause(10*1000)  
        .click('button[class=Settings__btnRejoindre]')
        .pause(5*1000)  
        .waitForElementVisible ('#Timer')
        
        .click('div.root-content div.portrait div.Home__main div.Home__content.Home__mini-content div.Home__footer_desktop div.Footer__emp.Footer__mini-emp div.css-1rf5qa3 div.Footer__itemslist.css-j65ioz:nth-child(3) div.css-1pf84eq:nth-child(7) div:nth-child(1) button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk > img.Footer__icons')
        .pause(2000)


        .click('#demo-positioned-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-177ic5c > ul > li:nth-child(3)')
        .pause(2000)


        .click('#Home > div.Test__emp > div.Test__content > span') 
        
        .pause(2000)

        .click('div.root-content div.portrait div.Home__main div.Home__content.Home__mini-content div.Home__footer_desktop div.Footer__emp.Footer__mini-emp div.css-1rf5qa3 div.Footer__itemslist.css-j65ioz:nth-child(3) div.css-1pf84eq:nth-child(7) div:nth-child(1) button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk > img.Footer__icons')
        .pause(2000)


        .click('#demo-positioned-menu > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-177ic5c > ul > li:nth-child(3)')
        .pause(2000)


        .click('.Test__btn') 
        .pause(25*1000)
        .waitForElementVisible('.Test__testSuccess')
        .pause(3000)
        .click('#Home > div.Test__emp > div.Test__content > span') 
        .pause(10000)

    },

    

}