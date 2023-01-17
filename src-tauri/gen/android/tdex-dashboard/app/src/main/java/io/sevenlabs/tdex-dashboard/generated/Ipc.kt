/* THIS FILE IS AUTO-GENERATED. DO NOT MODIFY!! */

// Copyright 2020-2022 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

package io.sevenlabs.tdex-dashboard

import android.webkit.*

class Ipc {
    @JavascriptInterface
    fun postMessage(message: String) {
        this.ipc(message)
    }

    companion object {
        init {
            System.loadLibrary("tdex-dashboard")
        }
    }

    private external fun ipc(message: String)

    
}
