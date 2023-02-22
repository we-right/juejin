import { defineStore } from 'pinia'

interface NavType {
    value: string,
    label: string,
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
            navId: 0 as number,
            navTypes: [] as Array<NavType>,
            typesId: 0 as number
        }
    },
    actions: {
        changeNavType(nav: Nav) {
            if (!this.navId && this.navId !== nav.id) {
                this.navId = nav.id;
                this.navTypes = nav.types || []
            }
            else if (this.navId === nav.id) {
                this.navId = 0
                this.typesId = 0
            }
            console.log('nowNavId: '+ this.navId)
        }
    }
})