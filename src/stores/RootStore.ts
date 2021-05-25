import { createContext } from "react";
import MovieStore from "./MovieStore";
import { UIStore } from "./UIStore";

export class RootStore {
    movieStore: MovieStore;
    uiStore: UIStore;

    constructor() {
        this.movieStore = new MovieStore(this)
        this.uiStore = new UIStore(this);
    }
}

export default createContext(new RootStore());