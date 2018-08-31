<p align="center">
  <a href="https://tipe.io/?ref=filestack-vue" target="_blank">
    <img  alt="Tipe" src="https://cdn.tipe.io/tipe/tipe-github.png?w=800&dpr=2" class="img-responsive">
  </a>
</p>

___

[![NPM Version](https://img.shields.io/badge/npm-1.0.1-green.svg)](https://www.npmjs.com/package/filestack-vue)
<!-- [![Package Quality](http://npm.packagequality.com/shield/vue-filestack.svg)](http://packagequality.com/#?package=filestack-vue) -->

# Filestack Vue
<a href="https://www.filestack.com"><img src="https://filestack.com/themes/filestack/assets/images/press-articles/color.svg" align="left" hspace="10" vspace="6"></a> This is a Vue component for Filestack API and content management system that makes it easy to add powerful file uploading and transformation capabilities to any web or mobile application.

## Resources

* [Filestack](https://www.filestack.com)
* [Documentation](https://www.filestack.com/docs)
* [NPM](https://npmjs.com/package/filestack-vue)
<!-- * [Live Demo]() -->
<!-- * [Tutorial](https://blog.filestack.com/product-updates/vue-package/) -->

## Installing

Install ``filestack-vue`` and ``filestack-js`` through npm

```shell
npm install filestack-vue filestack-js
```
or
```shell
yarn add filestack-vue filestack-js
```
## Import
```javascript
var Filestack = require('filestack-vue');
```
In ES2015
```javascript
import Filestack from 'filestack-vue';
```

## Import with filestack-js client
```javascript
import Filestack, { client } from 'filestack-vue';
```
*client is available from version 1.3.4*

## Usage
You should register [Filestack](https://www.filestack.com) website and get an **API key** first!

**1. Custom Designed button**
```html
<filestack
  :apikey="YOUR_API_KEY"
  :options="options"
  @success="yourCallbackFunction"
>
  <div>
    Click here to upload
  </div>
</filestack>
```

**2. Custom render**
```html
<filestack
  :apikey="apikey"
  :options="options"
  @success="onSuccess"
  @error="onError"
>
  <div>
    <strong>Find an avatar</strong>
    <button>Pick</button>
  </div>
</filestack>
```

**3. Other modes**
```html
<filestack
  mode="upload"
  :apikey="YOUR_API_KEY"
  :options="options"
  @success="onSuccess"
>
  <div>
    Click here to upload
  </div>
</filestack>
```

Available modes:
* [upload](https://www.filestack.com/docs/javascript-api/upload-v3)
* [transform](https://www.filestack.com/docs/javascript-api/transform-v3)
* [retrieve](https://www.filestack.com/docs/javascript-api/retrieve-v3)
* [storeUrl](https://www.filestack.com/docs/javascript-api/store-url-v3)
* [metadata](https://www.filestack.com/docs/javascript-api/metadata-v3)
* [remove](https://www.filestack.com/docs/javascript-api/remove-v3)

Define your own options object and callback function, connect them to the component and get the result from Filestack:


```javascript
const options = {
  accept: 'image/*',
  maxFiles: 5,
  storeTo: {
    location: 's3',
  },
};

onSuccess(result) {
  // handle result here
}
```

**Do you prefer a link instead of a button?**

You can pass a custom prop **link**.
```html
<filestack
  :apikey="YOUR_API_KEY"
  :options="options"
  @success="yourSuccessCallbackFunction"
>
  <div>
    Click here to upload
  </div>
<filestack>
```

**Filestack-js client**

You can also import the official client and decouple its Vue component `Filestack`.
However, you will need to initialize it with the API key and optional security options.

```javascript
import { client } from 'filestack-vue';
const filestack = client.init('YOUR_API_KEY', security);
```

## Examples

You can find the examples of using Pick in ``/examples/demo``.

Run

```javascript
yarn start
```

and connect to localhost:8080.

To try different functions go to ``/examples/demo2`` and follow the same steps to run it.

![filestack](https://cloud.githubusercontent.com/assets/10962668/23750309/ac3e1080-050f-11e7-922d-ee9deb8251a3.png)


## Available Props
[Official Filestack Documentation](https://filestack.com/docs)

> ### apikey
> **required**, string. An API key for Filestack.

> ### mode
> **optional**, string. **default** 'pick'. Can be one of pick, upload, transform, retrieve, metadata, remove.

> ### file
> **optional** object. use it to insert a file object in upload mode.

> ### onSuccess
> **optional** function. Handle the results after a successful response.

> ### onError
> **optional** function. Handle errors.

> ### options
> **optional** object. Detailed options to customize the mode behavior.
>
> See Javascript API from  the[official documentation](https://filestack.com/docs).

> ### security
> **optional** object. If you have security enabled, you will need to initialize
the client with a valid Filestack policy and signature in order to perform the requested call.

> ### buttonText
> **optional** string. When using a custom button, you can set the text.

> ### buttonClass
> **optional** string. When using custom button, you can set className to style it.

> ### cname
> **optional** Custom domain to use for all URLs. This requires the custom CNAME feature on your Filestack app.

## Versioning
Filestack Vue follows the [Semantic Versioning](http://semver.org/).

## Issues
If you have problems, please create a [Github Issue](https://github.com/TipeIO/filestack-vue/issues).

<!-- ## Wanna Contribute? -->
<!-- Please see [CONTRIBUTING.md](https://github.com/filestack/filestack-vue/blob/master/CONTRIBUTING.md) for details. -->

## Contributors
- [Tipe](https://github.com/tipeio)
- [PatrickJS](https://github.com/gdi2290)
