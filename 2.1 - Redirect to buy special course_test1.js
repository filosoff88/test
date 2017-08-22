
Feature('Buy special course');

Scenario('Redirect to buy special course', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('Купить');
I.see('пожизненный доступ к курсу', '.buy-course-card--description___3kttS')
});



