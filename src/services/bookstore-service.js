export default class BookstoreService {

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id: 1, title: 'Book 1', author: 'Susan J.', price: 1000},
                    {id: 2, title: 'Book 2', author: 'Michael K.', price: 2000}
                ]);
                //reject(new Error('Ошибка'))
            }, 700);
        });
    }

    getBookDetail(id) {
        return new Promise((resolve, reject) => {
            const data = [
                {id: 1, title: 'Book 1', author: 'Susan J.', price: 1000},
                {id: 2, title: 'Book 2', author: 'Michael K.', price: 2000}
            ];
            setTimeout(() => {
                resolve(data.find(item => item.id === id));
                //reject(new Error('Ошибка'))
            }, 700);
        });
    }

    auth({username, password}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'admin') {
                    resolve();
                } else {
                    reject(new Error('Incorrect username or password.'));
                }
            }, 700);
        });
    }
}
