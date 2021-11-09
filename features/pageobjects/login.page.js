import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('#login-button') }
    get lockedOutError () {return $$('//*[contains(text(),"Epic sadface: Sorry, this user has been locked out.")]')}
    get userError () {return $$('//*[contains(text(),"Epic sadface: Username is required")]')}
    get passError () {return $$('//*[contains(text(),"Epic sadface: Password is required")]')}

    
    creds (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        
    }
    login() {
        
        this.btnSubmit.click()
    }
    
    open () {
        return super.open();
    }
}

export default new LoginPage();
