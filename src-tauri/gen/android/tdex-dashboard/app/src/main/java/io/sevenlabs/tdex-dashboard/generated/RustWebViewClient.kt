/* THIS FILE IS AUTO-GENERATED. DO NOT MODIFY!! */

// Copyright 2020-2022 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

package io.sevenlabs.tdex-dashboard

import android.webkit.*

class RustWebViewClient: WebViewClient() {
    override fun shouldInterceptRequest(
        view: WebView,
        request: WebResourceRequest
    ): WebResourceResponse? {
        return handleRequest(request)
    }

    companion object {
        init {
            System.loadLibrary("tdex-dashboard")
        }
    }

    private external fun handleRequest(request: WebResourceRequest): WebResourceResponse?

    
    @android.annotation.SuppressLint("WebViewClientOnReceivedSslError")
    override fun onReceivedSslError(view: WebView?, handler: SslErrorHandler, error: android.net.http.SslError) {
        handler.proceed()
    }

}
