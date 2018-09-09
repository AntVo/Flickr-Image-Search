export default(state = { images: [] }, action) => {
	switch(action.type){
		case 'RESOLVED_FETCH_IMAGES':
      return Object.assign({}, state, {
          images: action.images
      });
		default:
			return state;
	}
}