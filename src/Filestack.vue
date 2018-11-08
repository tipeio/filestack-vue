<template>
  <div @click.prevent="onClickPick">
    <slot></slot>
  </div>
</template>

<script>
import * as filestack from 'filestack-js'

export default {
  props: {
    apikey: String,
    file: {
      type: Object,
      default: null
    },
    link: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'pick'
    },
    options: {
      type: Object,
      default: function() {
        return {};
      }
    },
    security: {
      type: Object,
      default: null
    },
    cname: {
      type: String,
      default: null
    }
  },
  methods: {
    onSuccess (result) {
      this.$emit('success', result)
    },
    onError (err) {
      this.$emit('error', err)
    },
    onClickPick () {
      this.initClient(
        this.mode,
        this.apikey,
        this.options,
        this.file,
        this.security,
        this.cname
      )
        .then((result) => this.onSuccess(result))
        .catch((err) => this.onError(err))
    },
    initClient (mode, apikey, options, file, security, cname) {
      const url = options.url
      const handle = options.handle
      const client = filestack.init(apikey, security, cname)
      const ops = Object.assign({}, options)
      delete ops.handle
      delete ops.url

      if (mode === 'transform') {
        return new Promise((resolve, reject) => {
          try {
            resolve(client.transform(url, ops))
          } catch (err) {
            reject(err)
          }
        })
      } else if (mode === 'retrieve') {
        return client.retrieve(handle, ops)
      } else if (mode === 'metadata') {
        return client.metadata(handle, ops)
      } else if (mode === 'storeUrl') {
        return client.storeURL(url, ops)
      } else if (mode === 'upload') {
        return client.upload(file, ops)
      } else if (mode === 'remove') {
        return client.remove(handle, security)
      }

      return client.picker(ops).open()
    }
  }
}
</script>

<style>
</style>
