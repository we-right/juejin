import { defineStore } from 'pinia'

export interface ArticleList {
    /**
     * 作者
     */
    auther: string;
    /**
     * 类别
     */
    category?: string[];
    /**
     * 评论数
     */
    comment: number;
    /**
     * 发布日期
     */
    date: string;
    /**
     * 描述
     */
    describe: string;
    img?:     string;
    /**
     * 点赞数
     */
    like: number;
    /**
     * 标题
     */
    title: string;
    /**
     * 查看数
     */
    view: number;
}
export const useArtcileListStore = defineStore('articleList', {
    state: () => {
        return {
            articList: [] as Array<ArticleList>,
            isAdd: false as boolean
        }
    },
    actions: {
        addList() {
            var myHeaders = new Headers();
            myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            var newList = {} as ArticleList

            fetch("https://mock.apifox.cn/m1/2333542-0-default/articleList")
                .then(response => response.text())
                .then(result => {
                    newList = JSON.parse(result)
                    console.log(newList)
                    this.articList.push(newList)})
                .catch(error => console.log('error', error)); 
        }
    }
})