import { remote } from 'webdriverio';

let browser;

(async () => {
    browser = await remote({
        capabilities: { browserName: 'chrome' }
    });

    await browser.navigateTo('https://magento.softwaretestingboard.com/');

    await browser.$('//a[@id="ui-id-4"]//span[contains(text(),"Women")]').click();
    await browser.$("//a[contains(text(),'Jackets')]").click();
    await browser.$("//a[contains(text(), 'Jade Yoga Jacket')]").click();
    await browser.$("//div[@option-label='XS']").click();
    await browser.$("//div[@option-label='Blue']").click();
    await browser.$("//input[@id='qty']").setValue('11');
    await browser.$("//button[@class='action primary tocart']").click();
    await browser.$("//a[normalize-space()='shopping cart']").click();
    await browser.$("//span[normalize-space()='Proceed to Checkout']").click();
    await browser.$("//div[@class='control _with-tooltip']//input[@type='email']").setValue('123@gmail.com');
    await browser.$("//input[@class='input-text'][@name='firstname']").setValue('John');
    await browser.$("//input[@class='input-text'][@name='lastname']").setValue('Doe');
    await browser.$("//input[@class='input-text'][@name='street[0]']").setValue('123 elm st');
    await browser.$("//input[@class='input-text'][@name='city']").setValue('Carson');
    await browser.$("//select[@class='select'][@name='region_id']").click();
    await browser.$("//option[@data-title='California']").click();
    await browser.$("//option[@data-title='California']").click();
    await browser.$("//input[@class='input-text'][@name='postcode']").setValue('90746');
    await browser.$("//input[@class='input-text'][@name='telephone']").setValue('123-123-1234');
    await browser.$("//input[@value='tablerate_bestway']").click();
    await browser.$("//button[@data-role='opc-continue']").click();
    await browser.pause(2000)
    const button = await browser.$(".action.primary.checkout")
    button.click()
    await browser.pause(5000)

    const finalUrl = await browser.getUrl()
    if (finalUrl !== 'https://magento.softwaretestingboard.com/checkout/onepage/success/') throw Error ('finalUrl does not equal expected')

    console.log("\n\n\n\n\n\n*****test completed successfully******\n\n\n\n")
    await browser.deleteSession()

    process.exit()

})().catch((err) => {
    console.error(err)
    return browser.deleteSession()
})