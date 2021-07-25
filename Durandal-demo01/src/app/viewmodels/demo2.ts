


define(["knockout"],
    (ko: KnockoutStatic,) => {
        class Account{
            Id: KnockoutObservable<number>
            Name: KnockoutObservable<string>
            Balance: KnockoutObservable<number>
            constructor(Id: number = 0, Name: string = "", Balance: number = 0){
                this.Id = ko.observable(Id);
                this.Name = ko.observable(Name);
                this.Balance = ko.observable(Balance);
            }
        }


        class Demo2ViewModel {
            Title: KnockoutObservable<string>
            Accounts:KnockoutObservableArray<Account>
            constructor() {
                this.Title = ko.observable("Demo2");
                this.Accounts = ko.observableArray([
                    new Account(1,"A1",10000),
                    new Account(2,"A2",20000),
                ])
            }
            AddAccount(){
                this.Accounts.push(new Account(3,"A3",3000))
            }
            DeleteAccount(){
                this.Accounts.pop()
            }
        }

        return Demo2ViewModel
    }
)