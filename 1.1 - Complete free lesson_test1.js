
Feature('Free lesson was completed');

Scenario('Free lesson was completed', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('15 уроков');
I.click('Медицинские проблемы');
I.click('Не знаю');
I.click('Продолжить');
I.click('Не знаю');
I.click('Продолжить');
I.click('Не знаю');
I.click('Продолжить');
I.click('Не знаю');
I.click('Продолжить');
I.click('Не знаю');
I.click('Продолжить');
I.see('Для прохождения урока нужно ответить минимум на 80% вопросов')
});



