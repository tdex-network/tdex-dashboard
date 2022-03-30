#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{
  AboutMetadata, CustomMenuItem, Manager, Menu, MenuItem, RunEvent, Submenu, WindowEvent,
};

fn main() {
  let menu = Menu::new().add_submenu(Submenu::new(
    "TdexDashboard",
    Menu::new()
      .add_native_item(MenuItem::About(
        "TdexDashboard".to_string(),
        AboutMetadata::new(),
      ))
      .add_item(CustomMenuItem::new("quit", "Quit")),
  ));

  #[allow(unused_mut)]
  let mut app = tauri::Builder::default()
    .menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id() {
        "quit" => {
          // emit event to JS and quit from there after cleanup
          event.window().emit("quit-event", {}).unwrap();
        }
        _ => {}
      }
    })
    .build(tauri::generate_context!())
    .expect("error while running tauri application");

  app.run(|app_handle, e| match e {
    // Triggered when a window is trying to close
    RunEvent::WindowEvent { label, event, .. } => {
      match event {
        WindowEvent::CloseRequested { api, .. } => {
          let app_handle = app_handle.clone();
          let window = app_handle.get_window(&label).unwrap();
          // use the exposed close api, and prevent the event loop to close
          api.prevent_close();
          window.emit("quit-event", {}).unwrap();
        }
        _ => {}
      }
    }
    _ => {}
  })
}
