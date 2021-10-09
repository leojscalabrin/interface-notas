export default class Categories{
    constructor(){
        this.categories = [];
        this._registered = [];
    }

    register(func){
        this._registered.push(func);
    }

    unregister(func){
        this._registered = this._registered.filter(f => f !== func);
    }

    notify(){
        this._registered.forEach(func => {
            func(this.categories);
        } );
    }

    addCategory(newCategory){
        this.categories.push(newCategory);
        this.notify();
    }
}