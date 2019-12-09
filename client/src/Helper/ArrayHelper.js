
async function Sort(lstParam, fieldName, isDescending) {
    if (lstParam == undefined || lstParam == null || lstParam.length == 0) return [];

    if (fieldName == undefined || fieldName == null) return [];
    if (isDescending == undefined || isDescending == null) isDescending = false

    var lstTemp = lstParam.sort((a, b) => (a[fieldName] > b[fieldName]) ? 1 : ((b[fieldName] > a[fieldName]) ? -1 : 0))
    if (isDescending) {
        lstTemp = await lstTemp.reverse();
    }
    return lstTemp;
}
function IsNullOrUndefined(lstParam) {
    if (lstParam == undefined || lstParam == null)
        return true;
    else
        return false;
}
function IsNullOrEmpty(lstParam) {
    if (lstParam == undefined || lstParam == null || lstParam.length == 0)
        return true;
    else
        return false;
}

function RemoveItemByFieldName(lstParam, fieldName, value) {
    var lstTemp = lstParam.filter(item => item[fieldName] != value);
    return lstTemp;
}
function GetRandomElement(lstParam, numberOfElement) {
    // var lstTemp = lstParam.splice(Math.random() * lstParam.length | 0, 2);
    Logger.debug('lstParamRandom');
    Logger.debug(lstParam);
    lstParam.sort(function () { return 0.5 - Math.random(); })
    lstParam.splice(numberOfElement, lstParam.length);
    Logger.debug('lstTempRandom');
    Logger.debug(lstParam);
    return lstParam;
}
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

async function ProcessTATArray(TATItem) {
    if (TATItem == undefined || TATItem == null) {
        return null;
    }
    var lstResult = []
    if (TATItem.ListItemsDateStatus == undefined || TATItem.ListItemsDateStatus == null || TATItem.ListItemsDateStatus.length == 0) {
        return lstResult;
    }
    if (TATItem.ListItemsStatus == undefined || TATItem.ListItemsStatus == null || TATItem.ListItemsStatus.length == 0) {
        return lstResult;
    }
    var lstStatusDone = TATItem.ListItemsDateStatus;
    var orderStatusDone = lstStatusDone.map(item => item.order_status_id);
    var lstStatus = TATItem.ListItemsStatus;

    await asyncForEach(lstStatus, async (item) => {
        var modelResult = item
        if (orderStatusDone.includes(item.order_status_id)) {
            modelResult.isDone = true;
            var datetime = lstStatusDone.filter(x => x.order_status_id == item.order_status_id)[0].createdate_utc;
            var vitri = datetime.indexOf(" ");
            modelResult.statusDate = datetime.slice(0, vitri);
        }
        else {
            modelResult.isDone = false;
            modelResult.statusDate = null;
        }
        // Xử lý hiện màu gạch nối
        //0: ko hiện
        //1: full cam
        //2: 50/50
        //3: full xám
        var nextItem = lstStatus[lstStatus.indexOf(item) + 1]
        Logger.debug('nextItem');
        Logger.debug(nextItem);
        if (nextItem == undefined || nextItem == null) {
            modelResult.nextStatus = 0;
        }
        else {
            if (modelResult.isDone && orderStatusDone.includes(nextItem.order_status_id))
                modelResult.nextStatus = 1;

            if (modelResult.isDone && !orderStatusDone.includes(nextItem.order_status_id))
                modelResult.nextStatus = 2;

            if (!modelResult.isDone && !orderStatusDone.includes(nextItem.order_status_id))
                modelResult.nextStatus = 3;
        }
        lstResult.push(modelResult);
    })

    var lastItem = lstResult[lstResult.length - 1]
    Logger.debug('lastItem');
    Logger.debug(lastItem);
    if (lastItem.order_status_id == 12 && lastItem.isDone == true) {
        var lstResultTemp = [];
        lstResultTemp.push(lstResult[0]);
        lstResultTemp.push(lastItem);
        lstResult = lstResultTemp;
    }
    if (lastItem.order_status_id == 12 && lastItem.isDone == false) {
        lstResult = lstResult.splice(0, lstResult.length - 1);
        var nearLastItem = lstResult[lstResult.length - 1];
        nearLastItem.nextStatus = 0;
    }
    Logger.debug('lstResultTAT');
    Logger.debug(lstResult);
    return lstResult;
}
function GetDoubleElement(arr) {
    // Logger.debug('arr1');
    // Logger.debug(arr);
    // var arr = arr.sort(), i; // input must be sorted for this to work
    // Logger.debug('arr');
    // Logger.debug(arr);
    // var result = [];
    // for (i = arr.length; i--;) {
    //     Logger.debug('RemoveDoubleElement');
    //     Logger.debug(arr[i]);
    //     Logger.debug(arr[i - 1]);
    //     JSON.stringify(arr[i]) === JSON.stringify(arr[i - 1]) && result.push(arr[i]); // remove duplicate item
    // }
    var result = [];
    arr.forEach(item => {
        var objDouble = arr.filter(x => x.uri == item.uri && x.moTa == item.moTa);
        if (objDouble != undefined && objDouble != null && objDouble.length > 1) {
            result.push(item);
        }
    });
    resultDistinc = Array.from(new Set(result))
    return resultDistinc;
}
export {
    Sort, IsNullOrEmpty, RemoveItemByFieldName, GetRandomElement, ProcessTATArray,
    GetDoubleElement, IsNullOrUndefined,
}