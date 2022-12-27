export const getUsersData = (state) => {
    return state.usersPage.usersData
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getPageNumber = (state) => {
    return state.usersPage.pageNumber
}

export const getTotalUsersCount= (state) => {
    return state.usersPage.totalUsersCount
}

export const getIsFetching= (state) => {
    return state.usersPage.isFetching
}

export const getIsFollowingInProgress= (state) => {
    return state.usersPage.isFollowingInProgress
}

