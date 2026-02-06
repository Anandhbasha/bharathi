public class InsertionSort {
    public static void main(String[] args) {
        int arr [] = {12,11,13,5,6};
        for (int i=1;i<arr.length;i++){
            int key = arr[i]; //11
            int j = i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1] = arr[j];
                // 12
                // [12,12,13,5,6]

                j--;
                // -1
            }
            arr[j+1] = key;
            // [11,12,13,5,6]
        }
        for(int x :arr){
            System.out.println(x+" ");
        }
    }
}
