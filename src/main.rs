#![allow(dead_code)]

mod server;
mod http;
mod utils;
mod request_handler;

use std::env;
use macroz::tostr;
use server::Server;
use request_handler::RequestHandler;

fn main() {
    // read env variables at compile time
    let default_path = format!("{}/public", env!("CARGO_MANIFEST_DIR"));
    let public_path = env::var("PUBLIC_PATH").unwrap_or(default_path);
    let server = Server::new(tostr!("127.0.0.1:8080"));
    server.run(RequestHandler::new(public_path));
}
