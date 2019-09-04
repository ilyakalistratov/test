import { observable, action, decorate } from 'mobx';

class Store {
  theme = {
    firstSectionBackground: '#f2f2f2',
    secondSectionBackground: '#ffffff',
    colorHeader: '#000000',
    colorParagraph: '#939598',
    disabled: false
  }

  changeTheme(disabled) {    
    this.theme.disabled = disabled
    if (this.theme.disabled) {
      this.theme.firstSectionBackground = '#222222';
      this.theme.secondSectionBackground = '#333333';
      this.theme.colorHeader = '#f2f2f2';
      this.theme.colorParagraph = '#e6e6e6';
    } else {
      this.theme.firstSectionBackground = '#f2f2f2';
      this.theme.secondSectionBackground = '#ffffff';
      this.theme.colorHeader = '#000000';
      this.theme.colorParagraph = '#939598';
    }    
  }  
}

decorate (Store, {
  theme: observable,
  changeTheme: action,  
})
 export default Store;