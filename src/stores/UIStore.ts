import { makeAutoObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class UIStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, {}, { autoBind: true })
    }

    @observable
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
}