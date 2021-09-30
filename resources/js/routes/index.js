import PostsIndex from '../components/Index.vue'
import PostsCreate from '../components/Create.vue'
import PostsEdit from '../components/Edit.vue'

export default {
    mode: 'history',
    routes:[
        {
            path: '/',
            component: PostsIndex,
            name: 'posts.index'
        },
        {
            path: '/create',
            component: PostsCreate,
            name: 'posts.create'
        },
        {
            path: '/edit/:id',
            component: PostsEdit,
            name: 'posts.edit'
        },
    ]
}


