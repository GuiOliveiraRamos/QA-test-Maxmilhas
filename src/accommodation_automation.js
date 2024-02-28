const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://maxmilhas.com.br');

    // Accommodation search teste

    try {
        await page.click('span', 'Hotéis')
        await page.click('label', 'Qual é o seu destino?');
        await page.type('input#from', 'Rio de Janeiro');
        await page.waitForSelector('option[value="Rio de Janeiro (RIO)"]');
        await page.select('select', 'Rio de Janeiro, RJ, Brasil');
        await page.click('label[for="checkin"]');
        await page.waitForTimeout(1000);
        await page.click('abbr[aria-label="31 de março de 2024"]', '31');
        await page.click('label[for="checkout"]');
        await page.waitForTimeout(1000);
        await page.click('.icon-max-navigation-close');
        await page.waitForTimeout(1000);
        await page.click('abbr[aria-label="5 de abril de 2024"]', '1');
        await page.click('button', 'Buscar')
    } catch (e) {
        console.log('Search failed:', e)
    }

    try {
        await page.evaluate(() => {
            const sliderHandle = document.querySelector('.rc-slider-handle-1');
            const slider = document.querySelector('.rc-slider');
            const sliderWidth = slider.getBoundingClientRect().width;
            const sliderHandleWidth = sliderHandle.getBoundingClientRect().width;
            const maxSlideValue = sliderWidth - sliderHandleWidth;

            sliderHandle.dispatchEvent(new MouseEvent('mousedown'));
            sliderHandle.dispatchEvent(new MouseEvent('mousemove', { clientX: maxSlideValue }));
            sliderHandle.dispatchEvent(new MouseEvent('mouseup'));
        })

        await page.evaluate(() => {
            const sliderHandle = document.querySelector('.rc-slider-handle-2');
            const slider = document.querySelector('.rc-slider');
            const sliderWidth = slider.getBoundingClientRect().width;
            const sliderHandleWidth = sliderHandle.getBoundingClientRect().width;
            const maxSlideValue = sliderWidth - sliderHandleWidth;

            sliderHandle.dispatchEvent(new MouseEvent('mousedown'));
            sliderHandle.dispatchEvent(new MouseEvent('mousemove', { clientX: maxSlideValue }));
            sliderHandle.dispatchEvent(new MouseEvent('mouseup'));
        })

    } catch (e) {
    }

    await browser.close();
})();
