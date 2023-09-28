import {store} from '../../redux/store';

const TokenProvider = {
  getToken: () => {
    return '';
  },
  getRefreshToken: () => {},
  clearToken: async () => {},
};

export default TokenProvider;
