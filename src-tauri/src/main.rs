#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{Event, Manager, Menu, MenuItem, Submenu};

// the payload type must implement `Serialize`.
// for global events, it also must implement `Clone`.
#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
}

fn main() {
    let menu = Menu::new().add_submenu(Submenu::new(
        "TdexDashboard",
        Menu::new()
            .add_native_item(MenuItem::About("TdexDashboard".to_string()))
            .add_native_item(MenuItem::Quit),
    ));

    #[allow(unused_mut)]
    let mut app = tauri::Builder::default()
        .menu(menu)
        .build(tauri::generate_context!())
        .expect("error while running tauri application");

    // TODO: remove Event::CloseRequested when Tauri beta.9 is released
    // https://tauri.studio/en/docs/api/rust/tauri/enum.event/
    app.run(|app_handle, e| match e {
        Event::CloseRequested { label, api, .. } => {
            let app_handle = app_handle.clone();
            let window = app_handle.get_window(&label).unwrap();
            api.prevent_close();
            window
                .emit(
                    "quit-event",
                    Payload {
                        message: "quitting".into(),
                    },
                )
                .unwrap();
        }

        Event::ExitRequested {
            window_label, api, ..
        } => {
            let app_handle = app_handle.clone();
            let window = app_handle.get_window(&window_label).unwrap();
            api.prevent_exit();
            window
                .emit(
                    "quit-event",
                    Payload {
                        message: "quitting".into(),
                    },
                )
                .unwrap();
        }
        _ => {}
    })
}
