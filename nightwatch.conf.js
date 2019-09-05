require('module-alias/register');

const { CIRCLECI } = process.env;

const getArgs = () => {
    const args = [
        '--no-sandbox',
        'window-size=1920,1080',
        '--use-mock-keychain',
        '--enable-features=NetworkService,NetworkServiceInProcess',
        'disable-gpu',
    ];

    if (CIRCLECI) {
        args.push('headless');
    }

    return args;
};

module.exports = {
    src_folders: 'src/tests',
    page_objects_path: 'src/pages',
    custom_commands_path: 'src/commands',
    globals_path: 'src/scripts/globals.js',
    detailed_output: !CIRCLECI,
    test_settings: {
        default: {
            globals: {
                cdnUrl: 'https://ya666.infusionsoft.com',
                casUser: 'classicautomationtests@mailinator.com',
                casPassword: 'abcABC!@#1234',
                accountCentralBaseUrl: 'https://accounts.infusionsoft.com',
                marketplaceBaseUrl: 'https://marketplace.infusionsoft.com',
            },
            webdriver: {
                start_process: true,
                server_path: 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
                log_path: false,
                port: 9515,
            },
            desiredCapabilities: {
                javascriptEnabled: true,
                acceptSslCerts: true,
                browserName: 'chrome',
                chromeOptions: {
                    args: getArgs(),
                },
            },
            output_folder: 'output/results/',
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: 'output/results/screenshots',
            },
        },
    },
};
