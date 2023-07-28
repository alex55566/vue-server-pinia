import { createStore } from 'vuex'

export default createStore({
    state: {
        posts: [],
        loading: false,
        error: false,
        limit: 20,
        progressTick: 9,
    },
    mutations: {
        getData(state, data) {
            state.posts = data.map(el => {
                return {
                    id: el.id,
                    checked: false,
                }
            })
            sessionStorage.setItem('questions', JSON.stringify(state.posts))
        },
        getStore(state) {
            state.posts = JSON.parse(sessionStorage.getItem('questions'))
        },
        showLoader(state, isLoad) {
            state.loading = isLoad
        },
        showError(state, isError) {
            state.error = isError
        },
        toogleQuestion(state, id) {
            state.posts.forEach(el => {
                if (Number(el.id) === Number(id)) {
                    el.checked = !el.checked
                }
            });
            sessionStorage.setItem('questions', JSON.stringify(state.posts))
        },
    },
    actions: {
        async getData(context) {
            try {
                context.commit('showLoader', true)
                let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${context.state.limit}`)
                let data = await response.json()

                context.commit('getData', data);
            } catch (e) {
                context.commit('showError', true)

            } finally {
                context.commit('showLoader', false)

            }
        },
    },
    getters: {
        checkedPosts(state) {
            return state.posts.filter(post => post.checked === true).length
        },
        progress(state, getters) {
            return Math.floor(getters.checkedPosts / state.posts.length * state.progressTick)
        }
    }
})