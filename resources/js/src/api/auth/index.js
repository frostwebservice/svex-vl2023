import { createResourceId } from '@/utils/create-resource-id';
import { decode, JWT_EXPIRES_IN, JWT_SECRET, sign } from '@/utils/jwt';
import { wait } from '@/utils/wait';
import { users } from './data';

const STORAGE_KEY = 'users';

// NOTE: We use localStorage since memory storage is lost after page reload.
//  This should be replaced with a server call that returns DB persisted data.

const getPersistedUsers = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

const persistUser = (user) => {
  try {
    const users = getPersistedUsers();
    const data = JSON.stringify([...users, user]);
    localStroage.setItem(STORAGE_KEY, data);
  } catch (err) {
    console.error(err);
  }
};

class AuthApi {
  async signIn(request) {
    const { email, password } = request;

    await wait(500);

    return new Promise((resolve, reject) => {
      try {
        // Merge static users (data file) with persisted users (browser storage)
        const mergedUsers = [
          ...users,
          ...getPersistedUsers()
        ];

        // Find the user
        // const user = mergedUsers.find((user) => user.email === email);
        const user = request;
        if (!user || (user.email !== email)) {
          reject(new Error('Please check your email and password'));
          return;
        }

        // Create the access token
        const accessToken = sign({ email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        resolve({ accessToken });
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async signUp(request) {
    const { email, name, password } = request;

    await wait(1000);

    return new Promise((resolve, reject) => {
      try {
        // Merge static users (data file) with persisted users (browser storage)
        const mergedUsers = [
          ...users,
          ...getPersistedUsers()
        ];

        // Check if a user already exists
        let user = mergedUsers.find((user) => user.email === email);

        if (user) {
          reject(new Error('User already exists'));
          return;
        }

        user = {
          id: createResourceId(),
          avatar: undefined,
          email,
          name,
          password,
          plan: 'Standard'
        };

        persistUser(user);

        const accessToken = sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        resolve({ accessToken });
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  me(request) {
    const { accessToken } = request;
    console.log(request);
    return new Promise((resolve, reject) => {
          resolve({
            id: null,
            avatar: null,
            email: null,
            name: null,
            plan: null
          });
      // try {
      //   // Decode access token
      //   // const decodedToken = decode(accessToken);

      //   if (!user) {
      //     reject(new Error('Invalid authorization token'));
      //     return;
      //   }
      //   resolve({
      //     // id: user.id,
      //     // avatar: user.avatar,
      //     email: user.email
      //     // name: user.name,
      //     // plan: user.plan
      //   });
      // } catch (err) {
      //   console.error('[Auth Api]: ', err);
      //   reject(new Error('Internal server error'));
      // }
    });
  }
}

export const authApi = new AuthApi();
