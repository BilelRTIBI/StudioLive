module.exports = {

  'Demo test arreter le flux TS09 TC07': function (browser) {
      browser
          .maximizeWindow()
          .url('https://k8s-test-stream.webtv-solution.com/room/990-simple63e10fa5d38dc?userName=testadmin@gmail.com') 
          .waitForElementVisible ("body") 
          .pause(10*1000)  
          
          .click('button[class=Settings__btnRejoindre]')
          .pause(5*1000)  
          .waitForElementVisible ('#Timer',2000)

          .windowHandles(function (result) {
              var handle = result.value[1];
              browser.switchWindow(handle);
          })

          .openNewWindow()
          .url('https://k8s-test-stream.webtv-solution.com/presenter/990-simple63e10fa5d38dc')
          .waitForElementVisible ("body")
          .pause(5*1000)  
          .setValue('input[placeholder="Nom de famille"]', 'Test')
          .pause(1000) 
          .setValue('input[placeholder=Prénom]', 'Test')
          .pause(1000) 
          .setValue('input[placeholder=Email]', 'test@gmail.com')
          .pause(1000) 
          .click('button[class=Settings__btnRejoindre]')
          .pause(5*1000)  
          .waitForElementVisible ('#Timer',2000)
          .pause(10*1000)

          browser
          .windowHandles(function (result) {
              var handle = result.value[2];
              browser.switchWindow(handle);
          })

          .openNewWindow()
          .url('https://k8s-test-stream.webtv-solution.com/presenter/990-simple63e10fa5d38dc')
          .waitForElementVisible ("body")
          .pause(5*1000)  
          .setValue('input[placeholder="Nom de famille"]', 'presenter')
          .pause(1000) 
          .setValue('input[placeholder=Prénom]', 'presenter')
          .pause(1000) 
          .setValue('input[placeholder=Email]', 'presenter@gmail.com')
          .pause(1000) 
          .click('button[class=Settings__btnRejoindre]')
          .pause(5*1000)  
          .waitForElementVisible ('#Timer',2000)
          .pause(10*1000)

          browser
          .windowHandles(function (result) {
              var handle = result.value[0];
              browser.switchWindow(handle);
          })

          .waitForElementVisible ("body")
          .pause(5000)
          .click("#navbar > div:nth-child(6) > div.SideNav__icon_button.member.SideNav__tooltip")
          .click("#op-1-typeactive")
          .click('#op-1-typeactive > div > div > div > div > div:nth-child(4) > div > div.ant-col.ant-col-16 > span')
          .pause(10000)
          
          //.assert.elementPresent('.CardMedia__alias', 'display:none;') 
          //.assert.not.elementPresent('#ebc89840-a8c6-4e51-8361-e3583189337f') 

          .assert.not.visible('#bloc_conference > div.Conference__layout.Conference__layout_all_camera_one_large.Conference__is_conf.Conference__length_3 > ul > li.child_1.type_video.Conference__length_child_3 > div > div.SmallVideoView__small-alias-size')
          .assert.not.visible('#participant1-mid-46dea165-ebff-446f-8f13-9604865d6e14 > div > div.CardMedia__cardContent > div.CardMedia__slide > div > div')

          .pause(20000)

          browser
          .windowHandles(function (result) {
              var handle = result.value[2];
              browser.switchWindow(handle);
          })

          .waitForElementVisible ("body")
          .pause(10000)
          .assert.not.visible('#participant1-mid-46dea165-ebff-446f-8f13-9604865d6e14 > div > div.CardMedia__cardContent.CardMedia__isNotLocal > div.CardMedia__slide > div > div')
          .assert.not.visible('#bloc_conference > div.Conference__layout.Conference__layout_all_camera_one_large.Conference__is_conf.Conference__length_3 > ul > li.child_1.type_video.Conference__length_child_3 > div > div.SmallVideoView__small-alias-size')

          //.assert.elementPresent('#\31 2ee6e5f-7d7d-46d5-b228-bee7b2741d9a')
          //.assert.not.elementPresent('#bloc_conference > div.Conference__layout.Conference__layout_all_camera_one_large.Conference__is_conf.Conference__length_3 > ul > li.child_1.type_video.Conference__length_child_3 > div > div.Conference__footer-name > div') // 
          .pause(10000)
          .end()
      }
}