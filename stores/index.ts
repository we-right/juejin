import { defineStore } from 'pinia'

interface NavTypes {
    name: string
}

interface Nav {
    id: number,
    name: string,
    type: number,
    types: Array<NavTypes>;
}

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            navId: 0,
            navTypes: [] as NavTypes[]
        }
    },
    actions: {
        changeNavType(nav: Nav) {
            if (!this.navId && this.navId !== nav.id) {
                this.navId = nav.id;
                this.navTypes = nav.types
            }
        }
    }
})