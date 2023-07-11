import service from "../utils/request";

export function addWorker(data) {
    return service({
        url: 'user/staff/add',
        method: 'post',
        data: data
    })
}

export function workerByID(id) {
    return service({
        url: 'user/staff/insight/'+id,
        method: 'get',

    })
}

export function workerList() {
    return service({
        url: '/user/staff/all/1/5',
        method: 'get',

    })
}

export function updateWorker(data) {
    return service({
        url: 'user/staff/update',
        method: 'put',
        data: data
    })
}

export function deleteWorker(id) {
    return service({
        url: 'user/staff/remove/'+id,
        method: 'delete',
        // data: data
    })
}

export function workerCounts() {
    return service({
        url: 'user/staff/counts',
        method: 'get',
        data: data
    })
}