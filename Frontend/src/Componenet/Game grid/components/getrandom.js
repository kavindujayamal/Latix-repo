

export const randomUnique = (lower,upper,count)=>
{
   
    var pool=[];
   for(var i=lower;i<=upper;i++)
   {
     pool.push(i);
   }
   
    var result = [];
    for(var k=1; k<=count;k++)
    {
        const random = Math.floor(Math.random() * (pool.length- k));
        result.push(pool[random]);
        pool[random] = pool[pool.length - k];
    }

    return result;
}

