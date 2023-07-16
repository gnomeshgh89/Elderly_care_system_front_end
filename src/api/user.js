import service from "../utils/request";

export function register(data) {
    return service({
        url: 'user/admin/register',
        method: 'post',
        data: data
    })
}

export function loginAuto(data) {
    return service({
        url: 'user/admin/login/auto',
        method: 'get',
        data: data
    })
}

export function login(data) {
    return service({
        url: 'user/admin/login',
        method: 'post',
        data: data
    })
}


export function getAdminInfo() {
    return service({
        url: 'user/admin/insight',
        method: 'get',

    })
}


export function updateAdmin(data) {
    return service({
        url: 'user/admin/update/basic',
        method: 'put',
        data: data
    })
}
