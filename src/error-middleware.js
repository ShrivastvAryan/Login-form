const errorMiddleware=(err,req,res,next)=>{ //you need to add next otherwise khud se ni dega error

    const status = err.status |500;
    const message= err.message | "Backend error";
    const extraDetails=err.extraDetails | "Error from backend";


    return res.status(status).json({message,extraDetails});

};

module.exports=errorMiddleware;


// you need to call next(error) instead of res.status 