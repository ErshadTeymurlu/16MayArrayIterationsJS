let cc = new CustomCollection(5, 2, 3, 6, 5, true);
cc.ForEachCustom(x => {
    console.log(x);
});

console.log(cc.EveryCustom(x=>x>1))

console.log(cc.SomeCustom(x=>x>=7));

console.log(cc.IndexOfCustom(4));

console.log(cc.LastIndexOfCustom(5));

console.log(cc.FindCustom(x=>x>5));

console.log(cc.findIndexCustom(x=>x>5));

console.log(cc.IncludesCustom(5));
