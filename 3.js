// input paramters - src and proto objects
// output - projected object
function getProjectedObject( source , prototype )
{
    const finalObject = {};

    for ( const key in prototype )
    {
        if (source.hasOwnProperty( key ))
        {
            finalObject[key] = source[key];
        }
    }

    return finalObject;
}


const src = {
    prop11 : {
        prop21 : 21 ,
        prop22 : {
            prop31 : 31 ,
            propb32 : 32
        }
    }
}

const proto = {
    prop11 : {
        prop22 : null
    }
}

console.log( getProjectedObject( src , proto ))



