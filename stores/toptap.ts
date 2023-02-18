import { defineStore } from 'pinia'

export const useTopTapStore = defineStore('toptap', {
    state: () => {
        return {
            isShowTopTap: false,
            windowWidth: 0,
            dropDown: false
        }
    } 
})