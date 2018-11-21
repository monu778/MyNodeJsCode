function binary_search(arr,ele,low,high) {

    mid = parseInt((low+high)/2);
    if(arr.length>1) {
        if (arr[mid] == ele) {
            console.log("searching element found",ele,"postion=",mid);
        } else if( arr[mid]>ele) {
            high = mid-1;
            binary_search(arr,ele,low,high)

        } else if(arr[mid]<ele) {
            low = mid+1;
            binary_search(arr,ele,low,high)
        }
    } else {
        console.log("Array length is not sufficient")
    }
}
/*
var arr = [2, 3, 4, 10, 40,50,78,87,90];
var ele = 2;
low = 0;
high = arr.length-1;

binary_search(arr,ele,low,high);

*/

