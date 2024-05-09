export const getUserList = () => {
    // return mySQLConnect.query(
    //     "select * from users",
    //     function(err, results) {
    //         if(err)
    //             return []
    //         console.log(results)
    //         return results
    //     }
    // )

    return new Promise((resolve, reject) => {
        mySQLConnect.query('select * from users', (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results)
            }
        })
    })

}

export const createNewUser = () => {

}
