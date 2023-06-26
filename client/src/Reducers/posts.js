
export default (posts=[], action)=>{
    switch (posts.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;

    }
}