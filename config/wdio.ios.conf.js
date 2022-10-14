const path = require('path');
const { config } = require('./wdio.shared.conf')

// ====================
// Runner Configuration
// ====================
//
config.port = 4723,

// ============
// Specs
// ============
config.specs = ['./test/specs/ios-*.spec.js']

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'ios',
        'appium:platformVersion': '16.0',
        'appium:deviceName': 'iPhone 14 Pro Max',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), './app/ios/UIKitCatalog.app')
    }
]

exports.config = config