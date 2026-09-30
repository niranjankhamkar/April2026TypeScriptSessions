//0 to 100% abstraction
//we can not create the object of abstract classes

abstract class Page {
    logo: boolean = true;
    abstract title(): void;
    abstract url(): void;
    loading(): void {
        console.log('page -- loading in 20 secs...');
    }
    header(): void {
        console.log('page -- header');
    }
}

class LoginPage extends Page {
    title(): void {
        console.log('login page title');
    }
    url(): void {
        console.log('https://www.nal.com/login.php');
    }

    override loading(): void {
        console.log('Login page -- loading in 5 secs...');
    }
    doLogin(): void {
        console.log('login to app');
    }

}

let lp: LoginPage = new LoginPage();
lp.title();
lp.url();
lp.loading();
lp.doLogin();
lp.header();