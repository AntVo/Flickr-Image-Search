import $ from 'jquery';

export const fetchImages = (query, dispatch) => {
	return function action(dispatch){
		var options = {
	    url: `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=${query}`,
	    dataType: 'jsonp',
	  }
		$.ajax(options).then((data) => {
		 		return data.items
		 	}).then((json) => {
		 		const images = json.map((data) => {
		 			return data
		 		})
				dispatch({ type: 'RESOLVED_FETCH_IMAGES', images: images },)
 		})
	}
}