class UserNew1 {
	_login: string;
	password: string;
	createdAt: Date;

	set login(l: string) {
		this._login = 'user-' + l;
		this.createdAt = new Date();
	}
	get login() {
		return 'no-login';
		//return this._login
	}

	// Для получения пароля лучше использовать методы
	async getPassword(p: string) {
		//...
	}
	// Если убрать setter, то login становится только readonly
	// getter и setter не могут быть асинхронными
}
const userMasha = new UserNew1();
userMasha.login = 'myLogin';
console.log(userMasha); // UserNew1 { _login: 'user-myLogin' }
console.log(userMasha.login); // no-login
