//
// Refer to the online docs for more details:
// https://nightwatchjs.org/guide/configuration/nightwatch-configuration-file.html
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//

module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ["Tests"],
  
    webdriver: {
      start_process: true,
      //default_path_prefix: '/wd/hub',
      server_path:'./node_modules/chromedriver/lib/chromedriver/chromedriver.exe',//chromedriver.path,
      ssl: false,
      host: 'localhost',
      port: undefined,
      proxy: undefined,
      cli_args: 
      [
        //'--no-sandbox',
        //'--disable-dev-shm-usage',
        //'--headless',
       // '--disable-gpu',
       // '--verbose',
      //  "--window-size=1024x768",
       // '--start-maximized',
  
      //  "--use-fake-device-for-media-stream",
      //  "--use-fake-ui-for-media-stream",
      ] ,
    },
    
    test_workers: {
      enabled: true,
      workers: 'auto'
    },
  
    test_settings: {
      default: {
        disable_error_log: false,
  
        screenshots: {
          enabled: false,
          path: 'screens',
          on_failure: true
        },
  
        desiredCapabilities: {
          browserName : 'chrome',
          chromeOptions: {
  
            prefs:{
              download:{
                 default_directory:require('path').resolve(__dirname + '/download')
              }
           },
  
            w3c: true,
            args: [
              //"--no-sandbox",
              //'--disable-dev-shm-usage',
              //'--headless',
              //'--disable-gpu',
             // "--window-size=1024x768",
             // "--use-fake-device-for-media-stream",
             // "--use-fake-ui-for-media-stream",
            ]
          }
        },

        webdriver: {
          start_process: true,
          server_path: '',
        }    
      },
    }
  }
  