const DEFAULT_TYPE = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
}

export default {
  USER: {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    SUSPENDED: 'SUSPENDED',
    PENDING: 'PENDING',
  },
  USER_DEVICE: DEFAULT_TYPE,
  FRIEND_REQUEST: {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED',
  },
  GAME: {
    ACTIVE: 'ACTIVE',
    FINISHED: 'FINISHED',
    INACTIVE: 'INACTIVE',
  },
}
