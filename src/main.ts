import 'parsleyjs';
import IMask from 'imask';
import validation from './modules/validator.d';

const purchasesInp: any = document.querySelectorAll(".purchases__input")
const purchasesLabel: any = document.querySelectorAll(".purchases__input__label")
var contactInputPhone: any = document.getElementById("input-phone")

let maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: true
}
let mask = IMask(contactInputPhone, maskOptions);
function handlePlaceholder(purchasesInp: HTMLInputElement[], purchasesLabel: HTMLLabelElement[]) {
  purchasesInp.forEach((input, inpIdx) => {
      purchasesLabel.forEach((label, labelIdx) => {
        input.addEventListener("input", () => {
          mask.updateValue()
          if(input.type === "phone") {
            mask.updateValue()
          }
          if(input.value === "" && inpIdx === labelIdx) {
            label.classList.remove("purchases__input__label_active")
          }
          if(input.value !== "" && inpIdx === labelIdx) {
            label.classList.add("purchases__input__label_active")
          }
        })
      })
  })
}

(function main():void {
  handlePlaceholder(purchasesInp, purchasesLabel)
  validation();
}())