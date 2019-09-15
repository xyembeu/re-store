export default class BookstoreService {

    dataProducts = [
        {id: 1, title: 'Book 1', author: 'Susan J.', price: 1000},
        {id: 2, title: 'Book 2', author: 'Michael K.', price: 2000}
    ];

    dataConstructor = [
        {id: 1, title: 'Black theme', active: true},
        {id: 2, title: 'White theme', active: false}
    ];

    getBooks =() =>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.dataProducts);
                //reject(new Error('Ошибка'))
            }, 700);
        });

          // return fetch('https://jsonplaceholder.typicode.com/posts')
          //       .then(response => response.json())
    }

    getBookDetail = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.dataProducts.find(item => item.id === id));
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


    getConstructor = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.dataConstructor);
                //reject(new Error('Ошибка'))
            }, 700);
        });
    }

    setConstructor = (id) => {
        return new Promise((resolve, reject) => {
            this.dataConstructor.forEach((item)=>{
                item.active = !!(item.id === id);
            });

            setTimeout(() => {
                resolve(this.dataConstructor);
                //reject(new Error('Ошибка'))
            }, 700);
        });
    }
}
