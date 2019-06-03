/*eslint-disable */
import React from "react";

function validateForm(check, data) {
    const {
        username,
        password,
    } = data;

    var errors =  {
        hasError: false,
        errorsObj: {}
    }


    let Validation = {
        username: {
            Validate: [{
                condition: !username.length,
                message: "Please Specify Username",
            }, {
                condition: /\d/.test(username) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(username),
                message: "Username cannot contained any numbers or special characters",
            }, {
                condition: username.length < 4,
                message: "Username Should be greater than 4",
            }
            ],
            elem: "username"
        },


        password: {
            Validate: [{
                condition: !password.length,
                message: "Please Specify password",
            }, {
                condition: /\d/.test(password) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
                message: "password cannot contained any numbers or special characters",
            }, {
                condition: password.length < 4,
                message: "Password should be greater than 4",
            }
            ],
            elem: "password"
        },


        

        
    }
    
    if (check === "all") {
        for (var i in Validation) {
            var conArray = Validation[i].Validate;
            errors.errorsObj[Validation[i].elem] = { message: [] }
            for (var j = 0; j < conArray.length; j++) {
                if (conArray[j].condition) {
                    errors.hasError = true
                    errors.errorsObj[Validation[i].elem].message.push(conArray[j].message)
                }
            }
            if (!errors.errorsObj[Validation[i].elem].message.length) {
                delete errors.errorsObj[Validation[i].elem] ;
            }
        }
    }
    console.log("errors",errors);
    

    return Object.keys(errors).length>1 ? errors : {
        hasError: false
    }
}




export { validateForm };



