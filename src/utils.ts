
  export const mean = (data: Array<number>) => {
    const sum = data.reduce((a, b) => a + b, 0);
    const avg = (sum / data.length) || 0;
    return avg;
  };

  export const median = (data: Array<number>) => {
    const mid = Math.floor(data.length / 2),
    nums = [...data].sort((a, b) => a - b);
    return data.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

  export const mode = (data: Array<number>) => {
    var modes = [], count:any[] = [], i, number, maxIndex = 0;
 
    for (i = 0; i < data.length; i += 1) {
        number = data[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
  };