export default class Categories{
    constructor(){
        this.categories = [];
        this._registered = [];
    }

    register(func){
        this._registered.push(func);
    }

    notify(){
        this._registered.forEach(func => func(this.categories));
    }

    addCategory(newCategory){
        this.categories.push(newCategory);
    }
}