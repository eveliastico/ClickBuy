  export default fn =>{
    return ()=> {
      fn(req, res, next).catch(next);
    };
  };