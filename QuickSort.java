public class QuickSort {
    static int partition(int a[],int high,int low){
        int pivot = a[high];
        int i = low-1; 
        for(int j=low;j<high;j++){  
            // {10,7,8,9,1,5};
            //{1,5,8,9,10,7} 0,1  5
            if(a[j]<pivot){   //10 <5
                i++; //i=0
                int temp = a[i];  //10
                a[i] = a[j];  
                a[j] = temp; 
                // {1,7,8,9,10,5}
            }
        }
        int temp = a[i+1];  //i=1 temp = 7
        a[i+1] = a[high]; // a[i+1] = 5
        a[high] = temp;
        return i+1; //1
       
        // {1,5,8,9,10,7}
    }
    static void quickSort(int a[],int low,int high){
        if(low<high){
            int pi = partition(a, high, low); //2
            quickSort(a, low, pi-1);  //{1,5,8,9,10,7} 0,1
            quickSort(a, pi+1,high);
        }
    }
    public static void main(String[] args) {
        int arr [] = {10,7,8,9,1,5};
        quickSort(arr, 0,arr.length-1);
        for(int x:arr){
            System.out.println(x);
        }
        
    }
}



// **Dry run mattum focus panni**, rendu line **step-by-step** explain pannrom 👇

// ```java
// quickSort(a, low, pi-1);
// quickSort(a, pi+1, high);
// ```

// Array:

// ```
// [10, 7, 8, 9, 1, 5]
// ```

// ---

// ## 🔰 First call (from main)

// ```java
// quickSort(a, 0, 5);
// ```

// ### partition(0,5)

// * pivot = 5
// * After partition:

// ```
// [1, 5, 8, 9, 10, 7]
// ```

// * pivot index `pi = 1`

// ---

// ## 🔥 NOW those two lines execute

// ### 1️⃣ Left side call

// ```java
// quickSort(a, 0, pi-1);  → quickSort(a, 0, 0)
// ```

// * low = 0, high = 0
// * `low < high` ❌ false
//   👉 **Single element → STOP**
//   👉 `[1]` already sorted

// ---

// ### 2️⃣ Right side call

// ```java
// quickSort(a, pi+1, high); → quickSort(a, 2, 5)
// ```

// Subarray:

// ```
// [8, 9, 10, 7]
// ```

// ---

// ## 🔁 Second partition (2,5)

// * pivot = 7
// * After partition:

// ```
// [1, 5, 7, 9, 10, 8]
// ```

// * pivot index `pi = 2`

// ---

// ## 🔥 Again two recursive calls

// ### Left call

// ```java
// quickSort(a, 2, 1);
// ```

// * low > high ❌
//   👉 STOP

// ---

// ### Right call

// ```java
// quickSort(a, 3, 5);
// ```

// Subarray:

// ```
// [9, 10, 8]
// ```

// ---

// ## 🔁 Third partition (3,5)

// * pivot = 8
// * After partition:

// ```
// [1, 5, 7, 8, 10, 9]
// ```

// * pivot index `pi = 3`

// ---

// ## 🔥 Again two calls

// ### Left

// ```java
// quickSort(a, 3, 2); → STOP
// ```

// ### Right

// ```java
// quickSort(a, 4, 5);
// ```

// Subarray:

// ```
// [10, 9]
// ```

// ---

// ## 🔁 Fourth partition (4,5)

// * pivot = 9
// * After partition:

// ```
// [1, 5, 7, 8, 9, 10]
// ```

// * pivot index `pi = 4`

// ---

// ## 🔥 Final recursive calls

// ```java
// quickSort(a, 4, 3); → STOP
// quickSort(a, 5, 5); → STOP
// ```

// ---

// ## ✅ FINAL SORTED ARRAY

// ```
// [1, 5, 7, 8, 9, 10]
// ```

// ---

// ## 🧠 RECURSION TREE (easy visualization)

// ```
// quickSort(0,5)
//  ├── quickSort(0,0)
//  └── quickSort(2,5)
//        └── quickSort(3,5)
//              └── quickSort(4,5)
// ```

// ---

// ## 💡 Why those two lines are IMPORTANT

// ```java
// quickSort(a, low, pi-1);   // left of pivot
// quickSort(a, pi+1, high); // right of pivot