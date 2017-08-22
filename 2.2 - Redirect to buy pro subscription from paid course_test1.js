
Feature('Redirect buy pro subscription');

Scenario('Redirect to buy pro subscription from paid course', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('139 уроков');
I.click('Продолжить');
I.see('Подписка на PRO-аккаунт', '.header--content___1p3rl')
});



