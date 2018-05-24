import {observable, computed, action, runInAction, autorun, useStrict} from 'mobx';
import reqwest from 'reqwest'

// useStrict(true)

class Store {
    @observable number = 1;
    @observable name = '';
    @observable age = 0;

    @computed
    get plus() {
        return this.number * 2;
    }
    set squared(value) {
        this.number = Math.sqrt(value);
    }

    @action.bound 
    add() {
        this.number++;  //用 bound 绑定后，'this' 永远指向 Store
    }

    @action.bound
    fetchData (params) {
        reqwest(params)
            .then(res => {
                console.log(res)
                runInAction(() => {
                    this.name = res.name
                    this.age = res.age
                })
            })
            .fail(err => {
                console.log(err)
            })
    }
}

export default new Store()
