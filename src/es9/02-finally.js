const anotherFuncion = () => {
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve('hey');
        }
        else {
            reject ('whoops');
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));
.finally(()=> console.log("finally"));
