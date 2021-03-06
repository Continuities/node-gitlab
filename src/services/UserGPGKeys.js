import { BaseService, RequestHelper } from '../infrastructure';

const url = userId => (userId ? `users/${encodeURIComponent(userId)}/gpg_keys` : 'users/gpg_keys');

class UserGPGKeys extends BaseService {
  all({ userId } = {}) {
    return RequestHelper.get(this, url(userId));
  }

  add(title, key, { userId } = {}) {
    return RequestHelper.post(this, url(userId), {
      title,
      key,
    });
  }

  show(keyId, { userId } = {}) {
    const kId = encodeURIComponent(keyId);

    return RequestHelper.get(this, `${url(userId)}/${kId}`);
  }

  remove(keyId, { userId } = {}) {
    const kId = encodeURIComponent(keyId);

    return RequestHelper.delete(this, `${url(userId)}/${kId}`);
  }
}

export default UserGPGKeys;
