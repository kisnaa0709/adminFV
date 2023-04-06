export function SaveStorageItems(key, data, needCallBack, callBack) {
  localStorage.setItem(key, data);
  if (needCallBack === 1) {
    var homeData = localStorage.getItem(key);
    homeData = JSON.parse(homeData);
    callBack(homeData);
  } else {
    callBack("Data Save successfully.");
  }
}

export function GetStorageItems(key, callBack) {
  var homeData = localStorage.getItem(key);
  homeData = JSON.parse(homeData);
  callBack(homeData);
}

export function EmptyStorage() {
  localStorage.clear();
}
