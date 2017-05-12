var test = {
    wrapper : document.createElement('div'),
    form : document.createElement('form'),
    ol : document.createElement('ol'),
    submitWrapper: document.createElement('div'),

createHeader: function () {
        this.wrapper.classList.add('text');
        document.body.appendChild(this.wrapper);

        var header = document.createElement('h2');
        header.classList.add('text-center');
        header.innerHTML = '<strong>Тест по программированию</strong>';
        this.wrapper.appendChild(header);

    this.form.classList.add('form-test');
    this.wrapper.appendChild(this.form);

        this.form.appendChild(this.ol);
        this.ol.style.fontSize = '18px';

        this.submitWrapper.classList.add('text-center');
        this.form.appendChild(this.submitWrapper);
    },

    createQuestion1: function () {
        var list = document.createElement('li');
        list.classList.add('question1');
        list.innerHTML = '<h4>Вопрос №1</h4>';
        this.ol.appendChild(list);

        var input1 = this.createInput('question1', 'answer1', 'answer1');
        this.ol.appendChild(input1);

        var label1 = this.createLabel('answer1');
        label1.innerHTML = 'Вариант ответа №1';
        this.ol.appendChild(label1);

        this.ol.appendChild(document.createElement('br'));

        var input2 = this.createInput('question1', 'answer2', 'answer2');
        this.ol.appendChild(input2);

        var label2 = this.createLabel('answer2');
        label2.innerHTML = 'Вариант ответа №2';
        this.ol.appendChild(label2);

        this.ol.appendChild(document.createElement('br'));

        var input3 = this.createInput('question1', 'answer3', 'answer3');
        this.ol.appendChild(input3);

        var label3 = this.createLabel('answer3');
        label3.innerHTML = 'Вариант ответа №3';
        this.ol.appendChild(label3);
    },

    createQuestion2: function () {
        var list = document.createElement('li');
        list.classList.add('question2');
        list.innerHTML = '<h4>Вопрос №2</h4>';
        this.ol.appendChild(list);

        var input1 = this.createInput('question1', 'answer1', 'answer1');
        this.ol.appendChild(input1);

        var label1 = this.createLabel('answer1');
        label1.innerHTML = 'Вариант ответа №1';
        this.ol.appendChild(label1);

        this.ol.appendChild(document.createElement('br'));

        var input2 = this.createInput('question1', 'answer2', 'answer2');
        this.ol.appendChild(input2);

        var label2 = this.createLabel('answer2');
        label2.innerHTML = 'Вариант ответа №2';
        this.ol.appendChild(label2);

        this.ol.appendChild(document.createElement('br'));

        var input3 = this.createInput('question1', 'answer3', 'answer3');
        this.ol.appendChild(input3);

        var label3 = this.createLabel('answer3');
        label3.innerHTML = 'Вариант ответа №3';
        this.ol.appendChild(label3);
    },

    createQuestion3: function () {
        var list = document.createElement('li');
        list.classList.add('question3');
        list.innerHTML = '<h4>Вопрос №3</h4>';
        this.ol.appendChild(list);

        var input1 = this.createInput('question1', 'answer1', 'answer1');
        this.ol.appendChild(input1);

        var label1 = this.createLabel('answer1');
        label1.innerHTML = 'Вариант ответа №1';
        this.ol.appendChild(label1);

        this.ol.appendChild(document.createElement('br'));

        var input2 = this.createInput('question1', 'answer2', 'answer2');
        this.ol.appendChild(input2);

        var label2 = this.createLabel('answer2');
        label2.innerHTML = 'Вариант ответа №2';
        this.ol.appendChild(label2);

        this.ol.appendChild(document.createElement('br'));

        var input3 = this.createInput('question1', 'answer3', 'answer3');
        this.ol.appendChild(input3);

        var label3 = this.createLabel('answer3');
        label3.innerHTML = 'Вариант ответа №3';
        this.ol.appendChild(label3);
    },

    createSubmit: function () {
        var submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.classList.add('btn');
        submit.classList.add('btn-default');
        submit.innerHTML = 'Проверить мои результаты';
        this.submitWrapper.appendChild(submit);
    },

    createInput: function (name, value, id) {
        var input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', name);
        input.setAttribute('value', value);
        input.setAttribute('id', id);

        return input;
    },

    createLabel: function (id) {
        var label = document.createElement('label');
        label.setAttribute('for', id);

        return label;
    }
};

test.createHeader();
test.createQuestion1();
test.createQuestion2();
test.createQuestion3();
test.createSubmit();


//Как работать с insertBefore