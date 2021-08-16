import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SocialLogin = (accesstoken:String) => {
	console.log(accesstoken);
	axios
		.post('http://127.0.0.1:8000/auth/convert-token', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: '6UfjhsylRu5YsJAtcWSFg7MajswUd5lwvpb0mvWV',
			client_secret:
				'bk8cOX7KEaRiwOuDfUD3HF9yKV6N1ClPzHfYsgB3pH3Z8411AWHWzsvU9BaWCwAWAGdK03BaiKMkupEOrB4FYRtL05T7CQjfy6JopHWHjqxjGcNxhe8jr8na7gj7RTzT',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default SocialLogin;

