const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        executablePath: "C:\\Users\\Centro de Ciências\\AppData\\Local\\Programs\\Opera GX\\launcher.exe",
        headless: true,
        timeout: 30000
    })
    const page = await browser.newPage()

    // login data

    const user = 'guioliveiraramos30@gmail.com'
    const correct_password = 'akccka123'
    const wrong_password = '123456'

    //correct password test
    try {
        await page.goto('https://maxmilhas.com.br/login')
        await page.waitForSelector('input#email')
        await page.type('input#email', user)
        await page.type('input#password', correct_password)
        await page.click('button[type="submit"]')
        await page.waitForNavigation()
        await page.click('button[aria-label="Perfil"]')
        const signedIn = await page.evaluate(() => {
            return document.querySelector('a[href="/cliente/minha-conta"]') !== null
        })
        console.log(signedIn ? 'Login successful(expected)' : 'Login failed(unexpected)')
    } catch (e) {
        console.log('Login failed:', e)
    }

    //wrong password test
    try {
        await page.click('a[href="/logout"]')
        await page.click('button[aria-label="Perfil"]')
        await page.click('a[href="/login"]')
        await page.waitForSelector('input[name="email"]')
        await page.type('input#email', user)
        await page.type('input#password', wrong_password)
        await page.click('button[type="submit"]')
        await page.waitForNavigation()
        const signedInError = await page.evaluate(() => {
            return document.querySelector('.icon-max-navigation-close')
        })
        console.log(signedInError ? 'Login failed(expected)' : 'Login successful(unexpected)')
    } catch (e) {
        console.log('Login failed:', e)
    }

    await browser.close()

})();

