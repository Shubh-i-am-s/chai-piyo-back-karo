class ApiResponse {
  constructor(statusCode, message = "success", data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export { ApiResponse };

//function(parameters){ a*b  }
//consturctor(parameters){ this.a = a  }
