import { defineStore } from 'pinia'

export const useTopTapStore = defineStore('toptap', {
    state: () => {
        return {
            isShowTopTap: false as boolean,
            windowWidth: 0 as number,
            dropDown: false as boolean
        }
    } 
})