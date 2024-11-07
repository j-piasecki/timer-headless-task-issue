package com.reproducerapp

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ServiceModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "ServiceModule"

    @SuppressLint("NewApi")
    @ReactMethod
    fun start() {
        reactApplicationContext.currentActivity?.finish()
        val service = Intent(reactApplicationContext, MyTaskService::class.java)
        val bundle = Bundle()

        bundle.putString("foo", "bar")
        service.putExtras(bundle)

        reactApplicationContext.startService(service)
    }
}
