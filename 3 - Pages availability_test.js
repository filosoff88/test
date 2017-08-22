
Feature('Pages availability');

Scenario('Results of olimpiade', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('Результаты Олимпиады', '.nav-desktop--links___2O00q');
I.see('Результаты Участников Олимпиады 2017', '.overallResults--title___M_XVx')
});

Scenario('Buy PRO', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('Купить', '.nav-desktop--links___2O00q');
I.see('Подписка на PRO-аккаунт', '.header--content___1p3rl')
});

Scenario('Blog', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('Блог', '.footer___p79Oq');
I.see('Educa Blog', '.t269__title')
});

Scenario('О нас', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('О нас', '.footer___p79Oq');
I.see('О нас', '.promo--title___2MGxd')
});

Scenario('Соглашение', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('Соглашение', '.footer___p79Oq');
I.see('Лицензионный договор с конечным пользователем', '.terms--container___1I_Td')
});



Scenario('Пользователь - личный кабинет', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('.user___33ewK');
I.click('Личный кабинет', '.popup--inner___Zs7YV');
I.see('Ваше имя и фамилия нужны для сертификатов.', '.profileCard--subtitle___2m-AN')
});

Scenario('Пользователь - Купить PRO', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('.user___33ewK');
I.click('Купить PRO', '.popup--inner___Zs7YV');
I.see('Подписка на PRO-аккаунт', '.header--content___1p3rl')
});

Scenario('Пользователь - выход', (I) => {
I.amOnPage('https://www.educa.ru/')
I.click('Вход');
I.click('или используйте email');
I.fillField('email', 'sembat@inbox.ru')
I.pressKey('Enter');
I.fillField('//*[@id="app"]/div/div/div[2]/div/form/div[2]/input', '123123')
I.pressKey('Enter');
I.click('.user___33ewK');
I.click('Выход', '.popup--inner___Zs7YV');
I.see('Вход', '.landing--enter')
});
