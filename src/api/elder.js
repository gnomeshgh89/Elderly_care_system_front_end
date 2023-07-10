import service from "../utils/request";

export function addElder(data) {
    return service({
        url: 'user/elder/add',
        method: 'post',
        data: data
    })
}

export function elderByID(id) {
    return service({
        url: 'user/elder/insight/'+id,
        method: 'get',

    })
}

export function elderList() {
    return service({
        url: 'user/elder/all/1/5',
        method: 'get',

    })
}

export function updateElder(data) {
    return service({
        url: 'user/elder/update',
        method: 'put',
        data: data
    })
}

export function deleteElder(id) {
    return service({
        url: 'user/elder/remove/'+id,
        method: 'delete',
        // data: data
    })
}

export function elderCounts() {
    return service({
        url: 'user/elder/counts',
        method: 'get',
        data: data
    })
}