import { defineStore } from 'pinia'

export const useTopTapStore = defineStore('toptap', {
    state: () => {
        return {
            isShowTopTap: Boolean,
            windowWidth: Number,
            dropDown: Boolean
        }
    } 
})