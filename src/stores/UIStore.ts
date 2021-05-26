import { action, makeAutoObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class UIStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, {}, { autoBind: true })
    }

    @observable
    categoryFilterKeyHistory: string[] = []
    HISTORY_KEY_LIMIT = 12;

    feedbackIcons = {
        smile: {
            icon: 'far fa-smile',
            color: 'forestgreen'
        },
        sad: {
            icon: 'far fa-frown',
            color: 'lightcoral'
        },
        neutral: {
            icon: 'far fa-meh-blank',
            color: 'lightblue'
        }
    }

    generalIcons = {
        search: 'fas fa-search'
    }

    @action
    addSearchKeyToHistory(key: string) {
        if(this.categoryFilterKeyHistory.includes(key)){
            const index = this.categoryFilterKeyHistory.findIndex(elem => elem === key);
            const elem = this.categoryFilterKeyHistory.splice(index, 1)[0];

            this.categoryFilterKeyHistory.unshift(elem);
            return;
        } 
        
        if(this.categoryFilterKeyHistory.length === this.HISTORY_KEY_LIMIT) {
            this.categoryFilterKeyHistory.pop();
        }
        
        this.categoryFilterKeyHistory.unshift(key);
    }
}