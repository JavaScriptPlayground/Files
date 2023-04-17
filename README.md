# Files
Working with files in JavaScript.

## Download

### Description
This function provides a way to download blob files from the browser.

### Parameter
- `data` : `Blob` - File blob object
- `filename` : `string` - Name of the file to download

### Returns
- `void`

### Function
- [file_download.js](./file_download.js)

```js
function fileDownload(data = new Blob(), filename = '') {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = filename;
    link.click()
}
```
