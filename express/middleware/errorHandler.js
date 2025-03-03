// custom error class

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "API Error"; // set the error type to API Error
  }
}

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const globalErrorhandler = (err, req, res, next) => {
  console.log(err.stack);

  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    });
  }
  // handle mongoose validation ->
  else if(err.name === 'validationerror'){
    return res.status(400).json({
        status:'error',
        message:'validation Error'
    })
  }else{
    return res.status(500).json({
        status:'error',
        message:'An Unexpected Error Occured'
    })
  }
};

MediaSourceHandle.exports = {APIError,asyncHandler,globalErrorhandler}
