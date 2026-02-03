public class Binary {
    public static void main(String[] args) {
        int arr [] = {10,20,30,40,50};
        int key = 20;
        boolean found = false;
        int high = arr.length-1;
        int low = 0;
        while (low<=high) {
            int mid = (low+high/2);
            if(arr[mid]==key){
                System.out.println("foundes index at mid:"+mid);
                found=true;
                break;
            }
            else if(key<arr[mid]){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        if(!found){
            System.out.println("not found");
        }
    }
}


// mid++
// min--