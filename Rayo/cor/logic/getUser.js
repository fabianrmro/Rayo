import { User } from '../data/models.js'

import { validate, errors } from 'com'
const { NotFoundError, SystemError } = errors

export default (userId, targetUserId) => {
    validate.id(userId, 'UserId')
    validate.id(targetUserId, 'TargetUserId')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('User not found')

            return User.findById(targetUserId).lean()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(targetUser => {
            if (!targetUser) throw new NotFoundError('Target user not found')

            targetUser.id = targetUser._id.toString()
            delete targetUser._id
            delete targetUser.__v

            return targetUser
        })
}