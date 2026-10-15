const s = "tree"

var frequencySort = function(s) {
    const map = new Map();

    for(let i = 0; i< s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    };

    const freq = [...map.entries()];

    freq.sort((a, b) => b[1] - a[1]); 

    return freq.map(([char, count]) => char.repeat(count)).join('');
};

console.log(frequencySort(s));