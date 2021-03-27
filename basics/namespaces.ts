/// <reference path="./form-namespace.ts" />

namespace Form {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active'
  
    constructor(public email: string) {}
  
    getInfo() {
      return {
        type: this.type,
        state: this.state
      }
    }
  }
  
  const myForm = new MyForm('v@g.com')
  console.log(myForm.getInfo());
}
