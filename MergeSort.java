public class MergeSort {
    // arr = [8,3,5,4]
    // [8,3] [5,4]
    // [8] [3] [5][4] 
    // [8] [3] => [3,8]
    //[5][4] => [4,5] 
    // [3,4,5,8]
    static void merge(int arr[],int left,int mid,int right){
        int n1 = mid-left+1;  //1-0+1 2
        int n2 = right-mid; //2
        // [8]= 1 [3] =1
        int le[] = new int[n1];
        int re[] = new int[n2];
        for(int i=0;i<n1;i++){
            le[i] = arr[left+i];  //0 =8
        }//
        for(int j=0;j<n2;j++){
            re[j] = arr[mid+1+j]; //0+1+0 = 3
        }//[5,4]

        int i=0,j=0,k=left;
        while (i<n1 && j<n2) { //0<2 && 0<2
            if(le[i]<=re[j]){  //8<=8
                arr[k] = le[i];
                i++;
            }//
            else{
                arr[k] = re[j];    //ar[0] = 3
                j++;  //1
            }
            k++; //3   [8,3] [5,4] = > 3,8 4,5
        }
        while (i<n1 ) { //1<2
            arr[k] = le[i];  //arr[3] =  8 =  [3,8,4,5] {3,4,5,8}
            i++; //2
            k++; //4
        }
        while (i<n2) {
            //{8,3,5,4}
            arr[k] = re[i]; 
            j++;
            k++;
        }
    }
    static void mergeSort(int arr[],int left,int right){
        if(left<right){
            int mid = (left+right)/2; //0+3/2 = 1   8=0,3=1
            mergeSort(arr, left, mid);//(arr,0,1)
            mergeSort(arr, mid+1, right);  //(arr,2,3)
            merge(arr,left,mid,right); //(arr,0,1,3)
        }
    }
    public static void main(String[] args) {
        int arr [] = {8,3,5,4};
        mergeSort(arr,0,arr.length-1);
    }

}
