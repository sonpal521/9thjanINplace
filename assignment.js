// In-Place Merge Sort
//  In-place means it does not occupy extra memory for 
// merge operation as in the standard case.



// Inplace Implementation
function merge(arr, start, mid, end)
{
	let start2 = mid + 1;

	// If the direct merge is already sorted
	if (arr[mid] <= arr[start2])
	{
		return;
	}

	// Two pointers to maintain start
	// of both arrays to merge
	while (start <= mid && start2 <= end)
	{
		
		// If element 1 is in right place
		if (arr[start] <= arr[start2])
		{
			start++;
		}
		else
		{
			let value = arr[start2];
			let index = start2;

			// Shift all the elements between element 1
			// element 2, right by 1.
			while (index != start)
			{
				arr[index] = arr[index - 1];
				index--;
			}
			arr[start] = value;

			// Update all the pointers
			start++;
			mid++;
			start2++;
		}
	}
}


function mergeSort(arr, l, r)
{
	if (l < r)
	{
		let m = l + Math.floor((r - l) / 2);

		// Sort first and second halves
		mergeSort(arr, l, m);
		mergeSort(arr, m + 1, r);

		merge(arr, l, m, r);
	}
}

function printArray(A, size)
{
    let output = " ";
    for(let i=0; i<size ; i++){
        output += A[i] + " ";

    }
    console.log(output);


	
}

// Driver code
let arr = [ 12, 11, 13, 5, 6, 7 ];
let arr_size = arr.length;

mergeSort(arr, 0, arr_size - 1);
printArray(arr, arr_size);

// output  [5,6,7,11,12,13]


