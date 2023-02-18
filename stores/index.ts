import { defineStore } from 'pinia'

interface NavType {
    name: string,
    type: number
}

interface Nav {
    id: number,
    name: string,
    type: number,
    types?: Array<NavType>
}

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            navId: 0,
            navTypes: [] as Array<NavType>,
            typesId: 0
        }
    },
    actions: {
        changeNavType(nav: Nav) {
            if (!this.navId && this.navId !== nav.id) {
                this.navId = nav.id;
                this.navTypes = nav.types || []
                // console.log('nowNavId: '+ this.navId)
            }
        }
    }
})