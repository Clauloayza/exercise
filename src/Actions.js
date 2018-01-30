import store from './Store';

export const addNumber = (name, comment) => {
    const comments = [...store.getState().comments]
    const newComment= comments.concat( {
		name: name,
		comment: comment
	});

	store.setState({
		comments: newComment
	})
}

export const removeNumber= (index) => {
    const comments =  store.getState().comments.filter( (item, idx) => idx != index );
	store.setState({
		comments: comments
	})
}

export const change =  () => {
     store.setState({
		 success: true
	 });
}