//can not have a method body: abstract methods
//prototype method: method declaration
//no bussiness logic
//can not create the object of Interface
//100% Abstraction
class BankPolicy {
    creditPolicy(): void {
        console.log('bank credit policy');
    }
}
interface WorldBank {
    recoveryLoan(): void;
}
interface Bank {
    fee: number;
    credit(): void;
    debit(): void;
    transfer(): void;
}

class HDFC extends BankPolicy implements Bank, WorldBank {
    fee: number = 100;

    override creditPolicy(): void {
        console.log('hdfc credit policy');
    }

    recoveryLoan(): void {
        console.log('hdfc --- recoveryLoan');
    }
    credit(): void {
        console.log('hdfc --- credit');
    }
    debit(): void {
        console.log('hdfc --- debit');
    }
    transfer(): void {
        console.log('hdfc --- transfer');
    }
    homeLoan(): void {
        console.log('hdfc -- home loan');
    }
}

class ICICI implements Bank {
    fee: number = 50;
    credit(): void {
        console.log('icici --- credit');
    }
    debit(): void {
        console.log('icici --- debit');
    }
    transfer(): void {
        console.log('icici --- transfer');
    }
}

// 
let hdfc: HDFC = new HDFC();
hdfc.credit();
hdfc.debit();
hdfc.transfer();
hdfc.homeLoan();

//top casting: 
//child class object can be referred by parent interface ref variable:
console.log('-------');
let bank: Bank = new HDFC();
//down casting: NA
interface WorldBank {
    recoveryLoan(): void;
}

interface BankInterface extends WorldBank {
    credit(): void;
    debit(): void;
    transfer(): void;
}

class HDFCBank implements BankInterface {
    credit(): void {
    }
    debit(): void {
    }
    transfer(): void {
    }
    recoveryLoan(): void {
    }
}
//C - C: extends
//C - I: implements
// I - I: extends
// I - C: NA