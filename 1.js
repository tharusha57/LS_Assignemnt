
// 1.1
// input parameter - the 'To Date' 
Date.prototype.daysTo = function ( toDate ) 
{
    const lastDate = new Date( toDate );
    const beginingDate = new Date( this );
    return Math.floor( ( lastDate.getTime() - beginingDate.getTime() ) / (1000 * 60 * 60 * 24) );
};


const data = new Date('2024-02-01');
console.log( data.daysTo('2024-02-02'));