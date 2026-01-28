public class Sorting {
    public static void main(String[] args) {
        int [] arr = {4,2,3,1,5};
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        }
        for(int x=arr.length-1;x>=0;x--){
            System.out.println(arr[x]);
        }
    }
}
