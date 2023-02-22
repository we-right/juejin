import { defineStore } from 'pinia'

export interface AutherRank {
    /**
     * 头像
     */
    image: string;
    /**
     * 自我简介
     */
    intro: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 推荐值
     */
    score: number;
}

export const useAutherRankStore = defineStore('autherRank', {
    state: () => {
        return {
            autherList: [] as Array<AutherRank>
        }
    },
    actions: {
        sortByScore(a: AutherRank, b: AutherRank) {
            return b.score - a.score
        },
        addAuther() {
            var myHeaders = new Headers();
            myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            var newList = {} as AutherRank

            fetch("https://mock.apifox.cn/m1/2333542-0-default/autherRank")
                .then(response => response.text())
                .then(result => {
                    newList = JSON.parse(result)
                    // console.log(newList)
                    this.autherList.push(newList)})
                .catch(error => console.log('error', error)); 
        },
        sortAuther() {
            this.autherList.sort(this.sortByScore)
        }
    }
})