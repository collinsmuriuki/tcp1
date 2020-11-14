var searchIndex = JSON.parse('{\
"tcp1":{"doc":"","i":[[5,"main","tcp1","",null,[[]]],[0,"http","","",null,null],[0,"method","tcp1::http","",null,null],[3,"MethodError","tcp1::http::method","",null,null],[4,"Method","","",null,null],[13,"GET","","",0,null],[13,"POST","","",0,null],[13,"PUT","","",0,null],[13,"PATCH","","",0,null],[13,"DELETE","","",0,null],[13,"OPTIONS","","",0,null],[13,"TRACE","","",0,null],[13,"CONNECT","","",0,null],[13,"HEAD","","",0,null],[0,"query_string","tcp1::http","",null,null],[3,"QueryString","tcp1::http::query_string","",null,null],[12,"data","","",1,null],[4,"Value","","",null,null],[13,"Single","","",2,null],[13,"Multiple","","",2,null],[11,"get","","",1,[[],[["value",4],["option",4]]]],[0,"request","tcp1::http","",null,null],[3,"Request","tcp1::http::request","",null,null],[12,"path","","",3,null],[12,"query","","",3,null],[12,"method","","",3,null],[4,"ParseError","","",null,null],[13,"InvalidRequest","","",4,null],[13,"InvalidEncoding","","",4,null],[13,"InvalidProtocol","","",4,null],[13,"InvalidMethod","","",4,null],[6,"HttpResult","","",null,null],[11,"path","","",3,[[]]],[11,"query","","",3,[[],[["querystring",3],["option",4]]]],[11,"method","","",3,[[],["method",4]]],[11,"message","","",4,[[]]],[0,"response","tcp1::http","",null,null],[3,"Response","tcp1::http::response","",null,null],[12,"status","","",5,null],[12,"body","","",5,null],[11,"new","","",5,[[["string",3],["statuscode",4],["option",4]]]],[11,"send","","",5,[[],["ioresult",6]]],[0,"status_code","tcp1::http","",null,null],[4,"StatusCode","tcp1::http::status_code","",null,null],[13,"Ok","","",6,null],[13,"BadRequest","","",6,null],[13,"NotFound","","",6,null],[11,"reason_phrase","","",6,[[]]],[0,"request_handler","tcp1","",null,null],[3,"RequestHandler","tcp1::request_handler","",null,null],[12,"public_path","","",7,null],[11,"new","","",7,[[["string",3]]]],[11,"read_file","","",7,[[],[["string",3],["option",4]]]],[0,"server","tcp1","",null,null],[3,"Server","tcp1::server","",null,null],[12,"address","","",8,null],[8,"Handler","","",null,null],[10,"handle_request","","",9,[[["request",3]],["response",3]]],[11,"handle_bad_request","","",9,[[["parseerror",4]],["response",3]]],[11,"new","","",8,[[["string",3]]]],[11,"run","","",8,[[]]],[0,"utils","tcp1","",null,null],[0,"helpers","tcp1::utils","",null,null],[5,"get_next_word","tcp1::utils::helpers","",null,[[],["option",4]]],[11,"from","tcp1::http::method","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","tcp1::http::query_string","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","tcp1::http::request","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","tcp1::http::response","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","tcp1::http::status_code","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"to_string","","",6,[[],["string",3]]],[11,"borrow","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","tcp1::request_handler","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","tcp1::server","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"handle_request","tcp1::request_handler","",7,[[["request",3]],["response",3]]],[11,"from","tcp1::http::query_string","",1,[[]]],[11,"from","tcp1::http::request","",4,[[["utf8error",3]]]],[11,"from","","",4,[[["methoderror",3]]]],[11,"clone","tcp1::http::status_code","",6,[[],["statuscode",4]]],[11,"fmt","tcp1::http::method","",0,[[["formatter",3]],["result",6]]],[11,"fmt","tcp1::http::query_string","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","tcp1::http::request","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","tcp1::http::response","",5,[[["formatter",3]],["result",6]]],[11,"fmt","tcp1::http::status_code","",6,[[["formatter",3]],["result",6]]],[11,"fmt","tcp1::http::method","",10,[[["formatter",3]],["fmtresult",6]]],[11,"fmt","tcp1::http::request","",4,[[["formatter",3]],["fmtresult",6]]],[11,"fmt","tcp1::http::response","",5,[[["formatter",3]],["fmtresult",6]]],[11,"fmt","tcp1::http::status_code","",6,[[["formatter",3]],["fmtresult",6]]],[11,"try_from","tcp1::http::request","",3,[[],[["request",3],["result",4],["parseerror",4]]]],[11,"from_str","tcp1::http::method","",0,[[],["result",4]]]],"p":[[4,"Method"],[3,"QueryString"],[4,"Value"],[3,"Request"],[4,"ParseError"],[3,"Response"],[4,"StatusCode"],[3,"RequestHandler"],[3,"Server"],[8,"Handler"],[3,"MethodError"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);