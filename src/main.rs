#![allow(dead_code)]

mod http;
mod request_handler;
mod server;
mod utils;

use request_handler::RequestHandler;
use server::Server;
use std::env;

fn main() {
    // read env variables at compile time
    let default_path = format!("{}/public", env!("CARGO_MANIFEST_DIR"));
    let public_path = env::var("PUBLIC_PATH").unwrap_or(default_path);
    let server = Server::new(String::from("127.0.0.1:8080"));
    server.run(RequestHandler::new(public_path));
}
