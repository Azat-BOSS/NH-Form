import $ from "jquery"
import 'parsleyjs';

window.Parsley.addValidator('requiredIfChecked', {
  requirementType: 'string',
  validateString: function (value: any, requirement: any) {
      const checkbox = document.querySelector(requirement);
      if (!checkbox) {
          return false;
      }
      if (checkbox.checked && !value.trim()) {
          return false;
      }
      return true;
  },
  messages: {
      en: 'Required field',
      ru: 'Обязательное поле',
  },
  priority: 33,
});

window.Parsley.addMessages('ru', {
  type: {
    email: 'Введите E-mail',
  },
  notblank: 'Это поле должно быть заполнено',
  required: 'Обязательное поле',
});

Parsley.setLocale('ru');

export default function validation() {
  const formsToValidate = Array.from(document.querySelectorAll('form[data-need-validation]'));

  formsToValidate.forEach((form) => {
    //@ts-ignore
      $(form).parsley();
  });
}