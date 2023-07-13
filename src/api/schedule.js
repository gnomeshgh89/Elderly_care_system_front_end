import service from "../utils/request";

export function getSchedule(date) {
    return service({
        url: 'schedule/insight/'+date,
        method: 'get',

    })
}

export function delSchedule(date) {
    return service({
        url: 'schedule/remove/'+date,
        method: 'delete',

    })
}

export function addSchedule(data) {
    return service({
        url: 'schedule/add',
        method: 'post',
        data: data
    })
}