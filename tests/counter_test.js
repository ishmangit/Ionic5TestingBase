Feature('Counter');

Scenario('Counter increment button works fine', (I) => {
    I.amOnPage('/tabs/tab1');
    I.seeElement('.counter');
    I.say('Now 3 clicks to increment button');
    I.click('#increment');
    I.click('#increment');
    I.click('#increment');
    I.say('Now 3 clicks to decrement button');
    I.click('#decrement');
    I.click('#decrement');
    I.click('#decrement');
    I.see('0');
    pause();
});
