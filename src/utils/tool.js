export const formatTime = time => {
    let t = new Date(time);
    let year = t.getFullYear();
    let month = t.getMonth() + 1;
    let date = t.getDate();
    let hour = t.getHours();
    let minute = t.getMinutes();
    return `${year}-${month}-${date} ${hour}:${minute}`;
};

export const handleStatus = status => {
    let arr = ['待处理', '待确认', '已确认', '已完成', '暂缓处理'];
    return arr[Number(status)];
};
